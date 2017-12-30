#!/usr/bin/env bash

SCRIPTPATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BUILDPATH="$( cd "${SCRIPTPATH}/.." && pwd)"
PWDTMP=$(pwd)
REPOPATH="$( cd "${SCRIPTPATH}/../.." && pwd)/r4_prod_TMP"

printf "\n\e[1m\e[91mDeploy\e[0m\n\n"

echo "${PWDTMP}"
echo "${SCRIPTPATH}"
echo "${BUILDPATH}"
echo "${REPOPATH}"

printf "\n\e[32mCreating temp dir ...\e[0m\n"

mkdir -p "${REPOPATH}"
rm -rf "${REPOPATH}"

# Checkout production stuff
printf "\n\e[32mCloning repo ...\e[0m\n"
git clone git@github.com:SimonChong/r4.git "${REPOPATH}"

# Empty the repo
printf "\n\e[32mCleaning up repo ...\e[0m\n"

cd "${REPOPATH}"
git rm -rf .

printf "\n\e[32mBuilding site ...\e[0m\n"
cd "$BUILDPATH"
npm run-script build

cp -R build/* "${REPOPATH}"
# tree "${REPOPATH}"
HASH=$(git rev-parse HEAD)

# Add everything and commit it
printf "\n\e[32mAdding new files ...\e[0m\n"
cd "${REPOPATH}"
echo "${REPOPATH}"
git add -A
git commit -m "Built from the 'r4-src' repository. https://github.com/shmcsensei/r4-src/commit/${HASH}"

# Push
printf "\n\e[32mPushing files to the public ...\e[0m\n"
git push origin master

# Cleanup
printf "\n\e[32mCleaning up ...\e[0m\n"
rm -rf "${REPOPATH}"

# echo "${PWDTMP}"
cd "${PWDTMP}"
printf "\n\e[1m\e[91mDONE!\e[0m\n\n"
