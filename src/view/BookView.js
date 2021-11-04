import { AiOutlineLoading3Quarters as Loading } from 'react-icons/ai';
import PropTypes from 'prop-types';
import styles from './BookView.module.scss';

const BookView = ({
  genre,
  completed,
  title,
  author,
  onClick,
}) => (
  <div className={styles.book}>
    <div>
      <span>{genre}</span>
      <h2>{title}</h2>
      <span>{author}</span>
      <ul>
        <li><button type="button">Comments</button></li>
        <li><button type="button" onClick={onClick}>Remove</button></li>
        <li><button type="button">Edit</button></li>
      </ul>
    </div>
    <div className={styles.progressBox}>
      <Loading className="loading-icon" style={{ fontSize: '4.25rem' }} />
      <div>
        <h3 style={{ fontSize: '3rem' }}>
          {completed}
          %
        </h3>
        {' '}
        <span>completed</span>
      </div>
    </div>
    <div className={styles.updateBox}>
      <button type="button">update progress</button>
    </div>
  </div>
);

BookView.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BookView;
