import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import AddBook from './AddBook';
import { setAllBooks } from '../redux/books/books';

const BooksPage = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    // set books on initial load
    dispatch(setAllBooks());
  }, [dispatch]);

  if (!books) {
    return <div>no Books</div>;
  }

  return (
    <section style={{ marginInline: '5rem' }}>
      <div>
        { books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author="Unknown"
            genre={book.genre}
            completed={Math.floor(Math.random() * 100)}
          />
        ))}
      </div>
      <AddBook />
    </section>
  );
};

export default BooksPage;
