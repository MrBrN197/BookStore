import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  const createBook = (e) => {
    e.preventDefault();
    if (!title || !genre) return;
    dispatch(addBook({
      title,
      author: 'Unknown',
      completed: 0,
      genre,
      id: 10,
    }));

    setTitle('');
    setGenre('');
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={createBook}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Book title"
        />
        <select
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option hidden value="">-- Category --</option>
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <input type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default AddBook;
