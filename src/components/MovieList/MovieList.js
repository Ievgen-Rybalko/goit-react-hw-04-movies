import PropTypes from 'prop-types';
import styles from './MovieList.module.css';

const MovieList = ({ children }) => {
  return <ul className={styles.MovieList}>{children}</ul>;
};

MovieList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MovieList;
