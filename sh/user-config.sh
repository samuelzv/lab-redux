#!/bin/bash
curl https://raw.githubusercontent.com/creationix/nvm/v0.30.0/install.sh | sh

source ~/.nvm/nvm.sh
nvm install v4.0.0
nvm alias default v4.0.0
nvm use default

npm install -g nodemon

