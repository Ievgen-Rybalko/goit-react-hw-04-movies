import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import MovieListItem from '../MovieListItem/MovieListItem';
import { fetchTrending } from '../moviesAPI';
import styles from './Trending.module.css';

export default function Trending() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrending()
      .then(data => setMovies(data.results))
      .catch(e => console.log('Error', e));
  }, []);

  console.log('data.results: ', movies);
  return (
    <div className={styles.Trending}>
      <h2>Trending today:</h2>
      <MovieList>
        {movies.map(movie => (
          <MovieListItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            prevLocation={location}
          />
        ))}
      </MovieList>
    </div>
  );
}
