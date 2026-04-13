#!/usr/bin/env node

const { spawnSync } = require('node:child_process');

const BRANCH = 'develop';

function runGit(args, options = {}) {
  const result = spawnSync('git', args, {
    stdio: 'inherit',
    shell: false,
    ...options,
  });

  if (result.status !== 0) {
    const label = `git ${args.join(' ')}`;
    throw new Error(`Command failed: ${label}`);
  }
}

function runGitCapture(args, options = {}) {
  const result = spawnSync('git', args, {
    stdio: ['ignore', 'pipe', 'pipe'],
    encoding: 'utf8',
    shell: false,
    ...options,
  });

  if (result.status !== 0) {
    const label = `git ${args.join(' ')}`;
    throw new Error(`${label}\n${(result.stderr || '').trim()}`);
  }

  return result.stdout;
}

function hasLocalBranch(path, branch) {
  const res = spawnSync(
    'git',
    ['-C', path, 'show-ref', '--verify', '--quiet', `refs/heads/${branch}`],
    { stdio: 'ignore', shell: false }
  );
  return res.status === 0;
}

function listSubmodulePaths() {
  const output = runGitCapture(['submodule', 'status', '--recursive']);

  return output
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split(/\s+/);
      return parts[1];
    })
    .filter(Boolean);
}

function updateSubmodule(path) {
  console.log(`\n==> ${path}`);

  runGit(['-C', path, 'fetch', 'origin', BRANCH]);

  if (hasLocalBranch(path, BRANCH)) {
    runGit(['-C', path, 'checkout', BRANCH]);
  } else {
    runGit(['-C', path, 'checkout', '-b', BRANCH, `origin/${BRANCH}`]);
  }

  runGit(['-C', path, 'pull', '--ff-only', 'origin', BRANCH]);
}

function main() {
  console.log('Sync and init submodules...');
  runGit(['submodule', 'sync', '--recursive']);
  runGit(['submodule', 'update', '--init', '--recursive']);

  const submodules = listSubmodulePaths();

  if (submodules.length === 0) {
    console.log('No submodules found.');
    return;
  }

  for (const path of submodules) {
    updateSubmodule(path);
  }

  console.log('\nDone. Submodules are on origin/develop (ff-only).');
}

try {
  main();
} catch (error) {
  console.error(`\n${error.message}`);
  process.exit(1);
}

