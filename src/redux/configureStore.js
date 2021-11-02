import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books';

const reducer = combineReducers({
  books: booksReducer,
});

const store = createStore(reducer);
export default store;
