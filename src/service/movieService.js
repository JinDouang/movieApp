import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
let apiKey = 'c8be6249eee95a0f11ff43fd837eb9cc';

export default {
  getPopularMovies(pageNb) {
    return axios.get(`/movie/popular?api_key=${apiKey}&page=${pageNb}`);
  },
  getUpcomingMovies(pageNb) {
    return axios.get(`/movie/upcoming?api_key=${apiKey}&page=${pageNb}`);
  },
  getTopRatedMovies(pageNb) {
    return axios.get(`/movie/top_rated?api_key=${apiKey}&page=${pageNb}`);
  },
  searchMovie(keyword, pageNb) {
    return axios.get(`/search/movie?api_key=${apiKey}&query=${keyword}&page=${pageNb}`);
  },
  getMovieDetail(id) {
    return axios.get(`/movie/${id}?api_key=${apiKey}&append_to_response=videos`);
  }
};
