#!/usr/bin/env bash

SCRIPTPATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BUILDPATH="${SCRIPTPATH}/.."
REPOPATH="${SCRIPTPATH}/../../r4_prod_TMP"
PWDTMP=$(pwd)

printf "\n\e[1m\e[91mDeploy\e[0m\n\n"
#
# echo "${PWDTMP}"
# echo "${SCRIPTPATH}"
# echo "${REPOPATH}"

printf "\e[32mBuilding site ...\e[0m\n"
cd "$BUILDPATH"
npm run-script build

printf "\e[32mCreating temp dir ...\e[0m\n"

mkdir -p "${REPOPATH}"
rm -rf "${REPOPATH}"

# tree "${REPOPATH}"

printf "\e[32mCloning repo ...\e[0m\n"
# Checkout production stuff
git clone https://github.com/SimonChong/r4.git "${REPOPATH}"

# Empty the repo
printf "\e[32mCleaning up repo ...\e[0m\n"
rm -rf "${REPOPATH}/[^.]*"

# Add everything and commit it
printf "\e[32mAdding new files ...\e[0m\n"
cd "${REPOPATH}"
git add -A
git commit -m "Updated from a build of the 'r4-source' repository."


# Push
printf "\e[32mPushing files to the public ...\e[0m\n"
# git push origin master

# Cleanup
printf "\e[32mCleaning up ...\e[0m\n"
rm -rf "${REPOPATH}"

echo "${PWDTMP}"
cd "${PWDTMP}"
printf "\n\e[1m\e[91mDONE!\e[0m\n\n"
