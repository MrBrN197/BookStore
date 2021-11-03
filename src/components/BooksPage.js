// import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Book from './Book';
import AddBook from './AddBook';
import { getAllBooks } from '../api/api';

const BooksPage = () => {
  // const books = useSelector((state) => state.books);
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setBooks(await getAllBooks());
    };
    fetchBooks();
  }, []);

  if (!books) {
    return <div>no Books</div>;
  }

  return (
    <>
      <div>
        {Object.entries(books).map(([itemId, [book]]) => (
          <Book
            key={itemId}
            id={itemId}
            title={book.title}
            author="Unknown"
            genre={book.category}
            completed={Math.floor(Math.random() * 100)}
          />
        ))}
      </div>
      <AddBook />
    </>
  );
};

export default BooksPage;
