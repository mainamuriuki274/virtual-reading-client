import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { pageDetailsShape } from '../../constants/propShapes';
import ClickableWord from '../ClickableWord';
import Modal from '../Modal';
import styles from './styles.module.scss';

const Page = ({ pageDetails, variant, pageNumber }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const mapValueToContent = (data) => {
    // maps token values to content

    const content = data.content.split('');
    const values = [];

    let pointer = 0; // used to indicate the position of the current index

    const { tokens } = data;

    for (let i = 0; i < tokens.length; i += 1) {
      const startPosition = tokens[i].position[0]; // where the token value starts
      const endPosition = tokens[i].position[1]; // where the token value ends

      if (!(pointer >= startPosition && pointer < endPosition)) {
        /* if the pointer value is not between where the value starts to where it ends,
         it adds content missing as a string
         */
        values.push(content.slice(pointer, startPosition).join(''));
      }

      values.push([
        content.slice(startPosition, endPosition).join(''), // add the mapped content and value as an array
        tokens[i].value,
      ]);

      pointer = endPosition; // move the pointer to the last position of the value
    }

    if (pointer !== content.length) {
      /* to add the missing content at the end in case the values did not match the content */
      values.push(content.slice(pointer, content.length + 1).join(''));
    }
    return values;
  };

  const handleWordClick = (value) => {
    // opens modal on text click and passes the value to the modal
    setModalContent(value);
    setShowModal(true);
  };

  const handleClose = () => {
    // closes the modal
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
          {mapValueToContent(pageDetails).map((data) => {
            if (Array.isArray(data)) {
              return (
                <ClickableWord
                  word={data[0]}
                  value={data[1]}
                  onClick={handleWordClick}
                />
              );
            }

            return <span>{data}</span>;
          })}
        </p>
        <p className={styles['page-number']}>{pageNumber}</p>
      </div>
    </>
  );
};

Page.propTypes = {
  pageDetails: PropTypes.objectOf(PropTypes.shape(pageDetailsShape)).isRequired,
  variant: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

export default Page;
