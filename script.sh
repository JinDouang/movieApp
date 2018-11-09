#!/usr/bin/env bash

## build application
npm run build

## build and run ios using custom flag
cordova run ios --buildFlag="-UseModernBuildSystem=0"

