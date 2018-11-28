# movieapp

> A Vue.js project using Ionic 4 and cordova for making a small movie app

## Build Setup

``` bash
# install dependencies (important for building mobile app)
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# build and start for application using Android
./scriptAndroid.sh (make sure your android device is plugged into your computer)

# build and start for application using iOS
./scriptiOS.sh (make sure your iphone device is plugged into your MacOS)

You might have an error 'code Signing Error: Signing for "MovieApp"'.
Open MovieApp.xcworkspace in the folder ios that has been created in platforms and select team.

Also verify the config.xml (same bundle identifier for the ID and on workspace Xcode's ID)
So your device can work perfectly!

```
