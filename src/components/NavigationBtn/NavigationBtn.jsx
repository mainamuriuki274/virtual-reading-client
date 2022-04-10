import { PropTypes } from 'prop-types';
import styles from './NavigationBtn.module.scss';

const NavigationBtn = ({ name, onClick, visible }) => (
  <button
    className={styles['navigation-btn']}
    style={visible ? { visibility: 'visible' } : { visibility: 'hidden' }}
    type="button"
    onClick={onClick}
  >
    {name}
  </button>
);

NavigationBtn.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default NavigationBtn;
