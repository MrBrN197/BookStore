import { useState } from 'react';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  console.log(title, genre);
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={(e) => e.preventDefault()}>
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
