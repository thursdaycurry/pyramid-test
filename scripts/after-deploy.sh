#!/bin/bash
REPOSITORY=/home/ubuntu/build

cd $REPOSITORY

sudo npm install # npm으로 dependency 설치

# sudo pm2 start dist
# sudo npm run start:dev