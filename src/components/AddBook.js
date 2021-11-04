import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import FormView from '../view/FormView';

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

  // (e) => setGenre(e.target.value)

  const handleChange = (e) => {
    if (!e.target.name) {
      console.log('element doesn\'t have a name attribute');
    }
    const [name, value] = e.target;
    console.log('name:', name, 'value:', value);
  };

  return (
    <FormView
      title={title}
      onSubmit={submitBookToStore}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default AddBook;
