#!/bin/bash

git remote -v
git remote add --track master upstream https://github.com/tars-node/rpc.git
git fetch upstream
git merge upstream/master
git push
