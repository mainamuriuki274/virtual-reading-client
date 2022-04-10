import { useQuery } from '@apollo/client';
import BookPage from './pages/BookPage/BookPage';
import { BOOKS } from './utils/queries';

const App = () => {
  // Whenever this component renders, the useQuery hook automatically executes our query
  // and returns a result object containing loading, error, and data properties
  const { loading, error, data } = useQuery(BOOKS); //

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <BookPage pages={data.book.pages} />
    </div>
  );
};

export default App;
