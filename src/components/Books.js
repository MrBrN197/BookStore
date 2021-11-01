import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const books = [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      genre: 'Action',
      completed: 64,
      id: 0,
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
      completed: 8,
      id: 1,
    },
    {
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      genre: 'Economy',
      completed: 0,
      id: 2,
    },
  ];
  return (
    <>
      <div>
        {books.map((book) => (
          <Book
            key={book.id}
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

export default Books;
