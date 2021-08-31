import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { fetchReviews } from '../../components/moviesAPI';

import styles from './ReviewsView.module.css';

export default function ReviewsView({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={styles.Reviews__List}>
          {reviews.map(review => (
            <li key={review.id} className={styles.Review__Item}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.Review__Item}>
          We don't have any reviews for this movie
        </p>
      )}
    </>
  );
}

ReviewsView.propTypes = {
  movieId: PropTypes.string,
};
