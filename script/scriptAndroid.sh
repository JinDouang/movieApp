#!/usr/bin/env bash

## create platform with android
cordova platform add android --save

## build application (make sure you used "npm install")
npm run build

## build and run ios using custom flag
cordova run android

