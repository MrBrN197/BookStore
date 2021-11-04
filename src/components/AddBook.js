import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import FormView from '../view/FormView';

const AddBook = () => {
  const [inputData, setInputData] = useState({ title: '', genre: '' });
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();

    const { title, genre } = inputData;

    if (!title || !genre) return;
    dispatch(addBook({
      id: uuidv4(),
      title,
      genre,
    }));

    setInputData({
      title: '',
      genre: '',
    });
  };

  const { title, genre } = inputData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  return (
    <FormView
      title={title}
      genre={genre}
      onSubmit={submitBookToStore}
      onChange={handleChange}
    />
  );
};

export default AddBook;
