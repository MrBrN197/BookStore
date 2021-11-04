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
      <span className={styles.genre}>{genre}</span>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.author}>{author}</span>
      <ul>
        <li><button type="button">Comments</button></li>
        <li><button type="button" onClick={onClick}>Remove</button></li>
        <li><button type="button">Edit</button></li>
      </ul>
    </div>
    <div className={styles.progressBox}>
      <Loading className={styles.loading} />
      <div>
        <h3>
          {completed}
          %
        </h3>
        {' '}
        <span>completed</span>
      </div>
    </div>
    <div>
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
