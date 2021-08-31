import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { fetchCast } from '../../components/moviesAPI';
import styles from './CastView.module.css';
import defaultImg from '../../images/default.jpg';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export default function CastView({ movieId }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchCast(movieId).then(data => setMovie(data));
  }, [movieId]);

  return (
    <>
      <ul className={styles.CastList}>
        {movie?.cast &&
          movie.cast.map(actor => (
            <li
              key={`${actor.name}-${actor.character}`}
              className={styles.ActorInfo}
            >
              {actor.profile_path ? (
                <img
                  className={styles.ActorImage}
                  src={`${BASE_IMG_URL}${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <img
                  className={styles.ActorImage}
                  src={defaultImg}
                  alt={actor.name}
                />
              )}
              <p style={{ marginTop: 5 }}>{actor.name}</p>
              <p
                style={{
                  marginTop: 5,
                  fontWeight: 'bold',
                  display: 'inline-block',
                }}
              >
                Character:{' '}
              </p>{' '}
              <span>{actor.character}</span>
            </li>
          ))}
      </ul>
    </>
  );
}

CastView.propTypes = {
  movieId: PropTypes.string,
};
