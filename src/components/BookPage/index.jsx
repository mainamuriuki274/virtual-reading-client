import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { pageDetailsShape } from '../../constants/propShapes';
import Modal from '../Modal';
import styles from './styles.module.scss';

const BookPage = ({ pageDetails, variant, pageNumber }) => {
  const pageContent = pageDetails.content.split('');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  // opens modal on text click
  const handleWordClick = (value) => {
    setModalContent(value);
    setShowModal(true);
  };

  // opens modal on text click
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <Modal
        visible={showModal}
        modalContent={modalContent}
        onHide={handleClose}
      />
      <div
        className={`
  ${styles.page}
  ${variant === 'right' ? styles.page__right : styles.page__left}
  `}
      >
        <p className={styles.content}>
          {pageDetails.tokens.map((token) => (
            <>
              <span
                key={token}
                className={styles.word}
                onClick={() => {
                  handleWordClick(token.value);
                }}
                onKeyDown={() => {
                  handleWordClick(token.value);
                }}
                role="button"
                tabIndex={pageNumber}
              >
                {pageContent.slice(token.position[0], token.position[1])}
              </span>
              <span key={token}> </span>
            </>
          ))}
        </p>
        <p className={styles['page-number']}>{pageNumber}</p>
      </div>
    </>
  );
};

BookPage.propTypes = {
  pageDetails: PropTypes.objectOf(PropTypes.shape(pageDetailsShape)).isRequired,
  variant: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

export default BookPage;
