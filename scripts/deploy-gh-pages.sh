#!/bin/bash
# Copyright 2017-2019 @polkadot/dev authors & contributors
# This software may be modified and distributed under the terms
# of the Apache-2.0 license. See the LICENSE file for details.

set -e

function npm_get_version () {
  NPM_VERSION=$(cat package.json \
    | grep version \
    | head -1 \
    | awk -F: '{ print $2 }' \
    | sed 's/[",]//g')
}

function git_push () {
  echo ""
  echo "*** Adding build artifacts"

  git add --all .

  if [ -d "docs" ]; then
    git add --all -f docs
  fi

  echo ""
  echo "*** Committing changed files"

  git commit --no-status --quiet -m "[CI Skip] $NPM_VERSION"

  echo ""
  echo "*** Pushing to GitHub"

  git push --quiet origin HEAD:refs/heads/test/gh-pages > /dev/null 2>&1

  echo ""
  echo "*** Github push completed"
}

function deploy_all () {
  if [ -f "node_modules/.bin/gh-pages" ]; then
    echo ""
    echo "*** Publishing to GitHub Pages"

    GH_PAGES_DST="."

    yarn run gh-pages --dist packages/apps/build --dest $GH_PAGES_DST

    echo ""
    echo "*** GitHub Pages completed"
  fi
}

function loop_func () {
  FUNC=$1

  if [ -f "lerna.json" ]; then
    PACKAGES=( $(ls -1d packages/*) )

    for PACKAGE in "${PACKAGES[@]}"; do
      if [ -f "$PACKAGE/package.json" ]; then
        echo ""
        echo "*** Executing in $PACKAGE"

        cd $PACKAGE
        $FUNC
        cd ../..
      fi
    done
  else
    $FUNC
  fi
}

npm_get_version

if [ "$TRAVIS_BRANCH" == "test/gh-pages" ]; then
  git_push

  deploy_all
fi

echo ""
echo "*** CI deploy completed"

exit 0
