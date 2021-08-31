import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Searchbar from '../../components/Searchbar/Searchbar';
import MovieList from '../../components/MovieList/MovieList';
import MovieListItem from '../../components/MovieListItem/MovieListItem';
import { fetchQuery } from '../../components/moviesAPI';
//import styles from './SearchView.module.css';

export default function SearchView() {
  const location = useLocation();
  const history = useHistory();
  const [movies, setMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState(
    new URLSearchParams(location.search).get('query') ?? '',
  );
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery)
      fetchQuery(searchQuery)
        .then(res => {
          if (res.results.length === 0) {
            return Promise.reject(
              new Error(`Sorry!!! Nothing found on server`),
            );
          }
          setMovies(res.results);
        })
        .catch(error => setError(error.message));
  }, [searchQuery]);

  const handleQuerySubmit = query => {
    setError(null);
    setMovies([]);
    setSearchQuery(query);

    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  const onChangeQuery = shouldErrorReset => {
    shouldErrorReset && setError(null);
  };

  return (
    <>
      <Searchbar onSubmit={handleQuerySubmit} onChangeQuery={onChangeQuery} />
      {error && (
        <p
          style={{
            textAlign: 'left',
            margin: 20,
            padding: '15px',
            color: 'red',
            border: '1px solid red',
            borderRadius: '3px',
            fontSize: '16px',
          }}
        >
          Error!!! : {error}
        </p>
      )}
      <div>
        {movies && (
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
        )}
      </div>
    </>
  );
}
