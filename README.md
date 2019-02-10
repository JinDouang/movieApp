# movieapp

> A Vue.js project using Ionic 4 and cordova for making a small movie app

# To know

Some ionic element might not be working at all so I had to use some tricks in order to make my ionic elements working
There will soon have an official release of ionic-vueJs.
In the meantime, you can use this project as a "beginning" if you want to interact vueJS using ionic and cordova.

This project is split with pages and components

- Each page has different component and logical (using props)
- clear scss architecture used for each component and view
- a router and API service


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

### Usage of service ionic/VueJS
```javascript
export default {
  getPopularMovies(pageNb) {
    return axios.get(`/movie/popular?api_key=${apiKey}&page=${pageNb}`);
  },
  getMovieDetail(id) {
    return axios.get(`/movie/${id}?api_key=${apiKey}&append_to_response=videos`);
  }
};
```