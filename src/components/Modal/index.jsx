import { PropTypes } from 'prop-types';
import { pageDetailsShape } from '../../constants/propShapes';
import styles from './styles.module.scss';

const Modal = ({ modalContent, visible, onHide }) => (
  <div
    className={`${styles.modal} ${
      visible ? styles.modal__visible : styles.modal__hidden
    }
 `}
  >
    <div className={styles['modal-content']}>
      <div className="modal-header">
        <span
          onClick={onHide}
          onKeyDown={onHide}
          role="button"
          tabIndex={0}
          className={styles.close}
        >
          &times;
        </span>
        <h2>Value</h2>
      </div>
      <div className="modal-body">
        <p>{modalContent}</p>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  modalContent: PropTypes.objectOf(pageDetailsShape),
  visible: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  modalContent: '',
};

export default Modal;
