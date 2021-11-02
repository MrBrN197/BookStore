const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    genre: 'Action',
    completed: 64,
    id: 0,
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    completed: 8,
    id: 1,
  },
  {
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    genre: 'Economy',
    completed: 0,
    id: 2,
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [];
    case REMOVE_BOOK:
      return [];
    default:
      return state;
  }
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
