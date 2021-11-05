import { fetchAllBooks, createBook, deleteBook } from '../../api/api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const SET_ALL_BOOKS = 'bookStore/books/SET_ALL_BOOKS';

export default (state = null, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          genre: action.payload.genre,
          completed: action.payload.completed,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case SET_ALL_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export const addBook = (payload) => async (dispatch) => {
  const extraDetails = {
    title: payload.title,
    completed: payload.completed,
  };

  await createBook({
    itemId: payload.id,
    title: JSON.stringify(extraDetails),
    category: payload.genre,
  });
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (payload) => async (dispatch) => {
  await deleteBook(payload);
  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

export const setAllBooks = () => async (dispatch) => {
  const books = await fetchAllBooks();

  // convert api data to array of objects
  const data = Object.entries(books).map(([itemId, [book]]) => {
    // sanitize book
    const { title, completed } = JSON.parse(book.title);

    return ({
      id: itemId,
      title,
      completed,
      genre: book.category,
    });
  });

  data.sort((a, b) => b.completed - a.completed);

  dispatch({
    type: SET_ALL_BOOKS,
    payload: data,
  });
};
