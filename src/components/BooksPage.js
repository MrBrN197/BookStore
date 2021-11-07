import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import AddBook from './AddBook';
import { setAllBooks } from '../redux/books/books';
import LoadingBooks from '../view/LoadingBooks';

const BooksPage = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    // set books on initial load
    dispatch(setAllBooks());
  }, [dispatch]);

  if (!books) {
    return <LoadingBooks />;
  }

  return (
    <section style={{ marginInline: '5rem' }}>
      <div>
        { books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author || 'N/a'}
            completed={book.completed}
            genre={book.genre}
          />
        ))}
      </div>
      <AddBook />
    </section>
  );
};

export default BooksPage;
