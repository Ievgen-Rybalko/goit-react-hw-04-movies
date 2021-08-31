//import axios from 'axios';

//axios.defaults.baseURL = 'https://pixabay.com/api/';

const BASE_URL = 'https://api.themoviedb.org/3/'; //https://api.themoviedb.org/3/movie/550?api_key=c71c338b5fe2e747fefa9b4b76e0d2e5
const KEY = 'api_key=c71c338b5fe2e747fefa9b4b76e0d2e5'; //eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzFjMzM4YjVmZTJlNzQ3ZmVmYTliNGI3NmUwZDJlNSIsInN1YiI6IjYxMmI2YjhiNDJmMTlmMDA5NTdhM2Q2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.23ScWGNqFtGmga1Xgh7rR2TiTYNz3wbEP2077mWHnyI
//const IMG_TYPE = 'image_type=photo&orientation=horizontal';

function fetchMovies(url) {
  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Bad request!!! No response from server`));
  });
}

export function fetchTrending() {
  return fetchMovies(`${BASE_URL}trending/movie/week?${KEY}`);

  //     .finally(() => setIsLoading(false));
}

export function fetchQuery(query) {
  return fetchMovies(`${BASE_URL}search/movie?${KEY}&query=${query}`);
}

export function fetchMovie(movieId) {
  return fetchMovies(`${BASE_URL}movie/${movieId}?${KEY}`);
}

export function fetchCast(movieId) {
  return fetchMovies(`${BASE_URL}movie/${movieId}/credits?${KEY}`);
}

export function fetchReviews(movieId) {
  return fetchMovies(`${BASE_URL}movie/${movieId}/reviews?${KEY}`);
}

// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
