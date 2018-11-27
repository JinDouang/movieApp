#!/usr/bin/env bash

## create platform with ios
cordova platform add ios --save

## build application (make sure you used "npm install")
npm run build

## build and run ios using custom flag
cordova run ios --buildFlag="-UseModernBuildSystem=0"

