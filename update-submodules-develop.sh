#!/usr/bin/env sh
set -eu

# Aligne la config des submodules et initialise ceux manquants.
git submodule sync --recursive
git submodule update --init --recursive

git submodule foreach --recursive '
  branch=develop
  git fetch origin "$branch"
  if git show-ref --verify --quiet "refs/heads/$branch"; then
    git checkout "$branch"
  else
    git checkout -b "$branch" "origin/$branch"
  fi
  git pull --ff-only origin "$branch"
'
