import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const options = [
  'Action',
  'Science Fiction',
  'Economy',
  'Biography',
  'Fantasy',
  'Horror',
  'Romance',
  'History',
].map((o, idx) => [o, idx]);

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (!title || !genre) return;
    dispatch(addBook({
      id: uuidv4(),
      title,
      genre,
    }));

    setTitle('');
    setGenre('');
  };

  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitBookToStore}>
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
          {options.map(([value, idx]) => (
            <option key={idx} value={value}>{value}</option>
          ))}
        </select>
        <input type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default AddBook;
