import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import BookView from '../view/BookView';

const Book = ({
  id,
  title,
  author,
  genre,
  completed,
}) => {
  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    dispatch(removeBook(id));
  };

  return (
    <BookView
      title={title}
      author={author}
      completed={completed}
      genre={genre}
      onClick={removeBookFromStore}
    />
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
};

export default Book;
