import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const BooksPage = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            completed={book.completed}
          />
        ))}
      </div>
      <AddBook />
    </>
  );
};

export default BooksPage;
