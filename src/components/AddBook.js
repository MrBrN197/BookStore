const AddBook = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Book title" />
      <select name="genre">
        <option value="action">Action</option>
        <option value="science-fiction">Science Fiction</option>
        <option value="economy">Economy</option>
      </select>
      <input type="submit" value="ADD BOOK" />
    </form>
  </div>
);

export default AddBook;
