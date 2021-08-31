//import PropTypes from 'prop-types';
import { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Button from '../../components/Button/Button';
import CastView from '../CastView/CastView';
import ReviewsView from '../ReviewsView/ReviewsView';
import { fetchMovie } from '../../components/moviesAPI';

import styles from './OneMovieView.module.css';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const OneMovieView = () => {
  const [movie, setMovie] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();

  //console.log('movieId: ', movieId);

  const onBackButton = () => {
    //console.log('location?.state?.from: ', location?.state?.from);
    history.push(location?.state?.from ?? '/');
  };

  useEffect(() => {
    fetchMovie(movieId).then(setMovie);
    //console.log('moooovie: ', movie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <div className={styles.OneMovieView__section}>
          <Button onBackButton={onBackButton} />
          <div className={styles.OneMovieView__container}>
            <img
              className={styles.OneMovieView__image}
              src={`${BASE_IMG_URL}${movie.poster_path}`}
              alt={movie.original_title}
            />
            <div className={styles.OneMovieView__text}>
              <h2 style={{ color: '#1f87ff', fontSize: '30px' }}>
                {movie.original_title}
              </h2>
              <p style={{ color: '#808992' }}>
                User score: {movie.vote_average}%{' '}
              </p>
              <h3>Overview</h3>
              <p style={{ color: '#808992' }}>{movie.overview}</p>
              <div style={{ display: 'flex' }}>
                <span style={{ fontWeight: 'bold' }}>Genres: </span>
                {movie.genres &&
                  movie.genres.map(genre => (
                    <span
                      style={{
                        fontStyle: 'bold',
                        marginLeft: '5px',
                        color: '#808992',
                      }}
                      key={genre.id}
                    >
                      {genre.name}{' '}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={styles.Additional}>
        <h3>Additional information</h3>
        <li style={{ listStyleType: 'none' }}>
          <Link to={`${url}/cast`}>Cast</Link>
        </li>
        <li style={{ listStyleType: 'none' }}>
          <Link to={`${url}/reviews`}>Reviews</Link>
        </li>

        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path={`${path}/cast`}>
              <CastView movieId={movieId} />
            </Route>
            <Route path={`${path}/reviews`}>
              <ReviewsView movieId={movieId} />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default OneMovieView;
