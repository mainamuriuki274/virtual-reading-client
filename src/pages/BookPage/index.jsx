import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import NavigationBtn from '../../components/NavigationBtn';
import styles from './styles.module.scss';
import Book from '../../components/Book';
import { pageDetailsShape } from '../../constants/propShapes';

const BookPage = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const [hasPrev, setHasPrev] = useState(false);

  // side effect to determine whether to show the navigation buttons if there is a next/previous page available
  useEffect(() => {
    if (currentPage + 2 >= pages.length) {
      setHasNext(false);
    } else {
      setHasNext(true);
    }

    if (currentPage - 1 <= 0) {
      setHasPrev(false);
    } else {
      setHasPrev(true);
    }
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 2);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 2);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Virtual Reading Client</h1>
      <Book pages={pages} currentPage={currentPage} />

      <div className={styles['navigation-btns']}>
        <NavigationBtn
          name="Previous Page"
          onClick={prevPage}
          visible={hasPrev}
        />

        <NavigationBtn name="Next Page" onClick={nextPage} visible={hasNext} />
      </div>
      <div className={styles['bg-attribute']}>
        Photo by&nbsp;
        <a href="https://unsplash.com/@mullins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          David Mullins
        </a>
        &nbsp; on &nbsp;
        <a href="https://unsplash.com/s/photos/sunset?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </div>
    </section>
  );
};

BookPage.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.shape(pageDetailsShape))
  ).isRequired,
};

export default BookPage;
