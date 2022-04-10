import { PropTypes } from 'prop-types';
import { pageDetailsShape } from '../../constants/propShapes';
import BookPage from '../BookPage';
import styles from './styles.module.scss';

const Book = ({ pages, currentPage }) => (
  <div className={styles.book}>
    <BookPage
      pageDetails={pages[currentPage]}
      variant="left"
      pageNumber={[currentPage + 1]} // increase index by 1 cause its starting from 0
    />
    <BookPage
      pageDetails={pages[currentPage + 1]}
      variant="right"
      pageNumber={[currentPage + 2]} // increase index by 2 for the right page cause its starting from 0
    />
  </div>
);

Book.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.shape(pageDetailsShape))
  ).isRequired,
  currentPage: PropTypes.number.isRequired,
};
export default Book;
