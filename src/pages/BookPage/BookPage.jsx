import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import NavigationBtn from '../../components/NavigationBtn/NavigationBtn';
import Page from '../../components/Page/Page';
import styles from './BookPage.module.scss';

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
      <div className={styles.book}>
        <Page
          pageDetails={pages[currentPage]}
          variant="left"
          pageNumber={[currentPage + 1]} // increase index by 1 cause its starting from 0
        />
        <Page
          pageDetails={pages[currentPage + 1]}
          variant="right"
          pageNumber={[currentPage + 2]} // increase index by 2 for the right page cause its starting from 0
        />
      </div>
      <div className={styles['navigation-btns']}>
        <NavigationBtn
          name="Previous Page"
          onClick={prevPage}
          visible={hasPrev}
        />

        <NavigationBtn name="Next Page" onClick={nextPage} visible={hasNext} />
      </div>
    </section>
  );
};

BookPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BookPage;
