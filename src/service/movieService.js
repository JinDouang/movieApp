import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// var apiKey: 'c8be6249eee95a0f11ff43fd837eb9cc';

export default {

  getPosts() {
    return axios.get("/posts");
  },

  getPost(id) {
    return axios.get("/posts/" + id);
  },

  getPhotos() {
    return axios.get("/photos");
  }

};
