#!/usr/bin/env sh

set -e
npm run docs:build

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ddsomav8/vuepress-learn.git master:gh-pages
