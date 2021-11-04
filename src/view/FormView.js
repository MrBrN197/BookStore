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

/* eslint-disable react/prop-types */
const FormView = ({
  title,
  onSubmit,
  onChange,
  genre,
}) => (
  <div className={styles.formBox}>
    <h2>ADD NEW BOOK</h2>
    <form onSubmit={onSubmit}>
      <input
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
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default FormView;
