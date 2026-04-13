#!/usr/bin/env sh
set -eu

# Ensure submodules are present and up to date, then switch each to develop tracking origin/develop.
git submodule update --init --recursive

git submodule foreach --recursive '
  git fetch origin develop
  if git show-ref --verify --quiet refs/heads/develop; then
    git checkout develop
  else
    git checkout -b develop origin/develop
  fi
  git pull --ff-only origin develop
'
