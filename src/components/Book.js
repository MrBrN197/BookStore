import PropTypes from 'prop-types';
import { AiOutlineLoading3Quarters as Loading } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const bookStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginInline: '2rem',
  border: '1px solid #ddd',
  padding: '1rem',
  borderRadius: '0.2rem',
  marginBlock: '1rem',
};

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
    <div style={bookStyle}>
      <div>
        <span>{genre}</span>
        <h2>{title}</h2>
        <span>{author}</span>
        <ul>
          <li><button type="button">Comments</button></li>
          <li><button type="button" onClick={removeBookFromStore}>Remove</button></li>
          <li><button type="button">Edit</button></li>
        </ul>
      </div>
      <div style={{ display: 'flex' }}>
        <Loading style={{ fontSize: '4.25rem' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '3rem' }}>
            {completed}
            %
          </span>
          {' '}
          <span>completed</span>
        </div>
      </div>
      <div>
        <button type="button">update progress</button>
      </div>
    </div>
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
