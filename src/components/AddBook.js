import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import FormView from '../view/FormView';

const AddBook = () => {
  const [inputData, setInputData] = useState({ title: '', genre: '' });
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  const submitBookToStore = async (e) => {
    e.preventDefault();
    const { title, genre } = inputData;
    if (!title || !genre) return;

    setDisabled(true);
    await dispatch(addBook({
      id: uuidv4(),
      title,
      genre,
      completed: Math.round(Math.random() * 100),
    }));
    setDisabled(false);

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
      disabled={disabled}
      title={title}
      genre={genre}
      onSubmit={submitBookToStore}
      onChange={handleChange}
    />
  );
};

export default AddBook;
