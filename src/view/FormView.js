import PropTypes from 'prop-types';
import styles from './FormView.module.scss';

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

const FormView = ({
  title,
  genre,
  disabled,
  onSubmit,
  onChange,
}) => (
  <div className={styles.formBox}>
    <h2>ADD NEW BOOK</h2>
    <form onSubmit={onSubmit}>
      <input
        name="title"
        value={title}
        onChange={onChange}
        type="text"
        placeholder="Book title"
      />
      <select
        name="genre"
        value={genre}
        onChange={onChange}
      >
        <option hidden value="">-- Category --</option>
        {options.map(([value, idx]) => (
          <option key={idx} value={value}>{value}</option>
        ))}
      </select>
      <button type="submit" disabled={disabled}>ADD BOOK</button>
    </form>
  </div>
);

FormView.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormView;
