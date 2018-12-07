import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
let apiKey = 'c8be6249eee95a0f11ff43fd837eb9cc';

export default {
  getPopularMovies() {
    return axios.get(`/movie/popular?api_key=${apiKey}&page=1`);
  },

  getUpcomingMovies() {
    return axios.get(`/movie/upcoming?api_key=${apiKey}&page=1`);
  },

};
