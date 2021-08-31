import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import styles from './MovieListItem.module.css';

const MovieListItem = ({ title, id, prevLocation }) => {
  return (
    <li>
      <Link
        to={{
          pathname: `/movies/${id}`,
          state: { from: { ...prevLocation } },
        }}
      >
        {title}
      </Link>
    </li>
    /*
    <Link
    to={{
    pathname: `/articles/${id}`,
    state: { from: this.props.location },
    }}
    >
    Article title
    </Link>  */
  );
};

MovieListItem.propTypes = {
  prevLocation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieListItem;
