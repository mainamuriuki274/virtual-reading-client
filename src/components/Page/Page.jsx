import { PropTypes } from 'prop-types';
import styles from './Page.module.scss';

const Page = ({ pageDetails, variant, pageNumber }) => (
  <div
    className={`
  ${styles.page}
  ${variant === 'right' ? styles.page__right : styles.page__left}
  `}
  >
    <p>{pageDetails.content}</p>
    <p className={styles['page-number']}>{pageNumber}</p>
  </div>
);

const pageDetailsShape = {
  content: PropTypes.string,
  token: PropTypes.array,
};

Page.propTypes = {
  pageDetails: PropTypes.objectOf(PropTypes.shape(pageDetailsShape)).isRequired,
  variant: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

export default Page;
