import { PropTypes } from 'prop-types';
import styles from './styles.module.scss';

const ClickableWord = ({ word, value, onClick }) => (
  <span
    aria-hidden
    className={styles.word}
    onClick={() => {
      onClick(value);
    }}
    onKeyDown={() => {
      onClick(value);
    }}
  >
    {word}
  </span>
);

ClickableWord.propTypes = {
  word: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ClickableWord;
