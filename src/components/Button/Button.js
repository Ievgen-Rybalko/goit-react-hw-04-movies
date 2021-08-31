import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ onBackButton }) {
  return (
    <button
      type="button"
      className={styles.More__button}
      onClick={onBackButton}
    >
      Go back
    </button>
  );
}
Button.propTypes = {
  onBackButton: PropTypes.func.isRequired,
};

export default Button;

/*
class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className={styles.More__button}
        onClick={this.props.onGetMore}
      >
        Load more
      </button>
    );
  }
}
Button.propTypes = {
  onGetMore: PropTypes.func.isRequired,
};
*/
