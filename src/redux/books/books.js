import { fetchAllBooks, postBook } from '../../api/api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const SET_ALL_BOOKS = 'bookStore/books/SET_ALL_BOOKS';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          genre: action.payload.genre,
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
  await postBook({
    itemId: payload.id,
    title: payload.title,
    category: payload.genre,
  });
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (payload) => (dispatch) => dispatch({
  type: REMOVE_BOOK,
  payload,
});

export const setAllBooks = () => async (dispatch) => {
  const books = await fetchAllBooks();
  // convert api data to array of objects
  const data = Object.entries(books).map(([itemId, [book]]) => ({
    id: itemId,
    title: book.title,
    genre: book.category,
  }));
  dispatch({
    type: SET_ALL_BOOKS,
    payload: data,
  });
};
