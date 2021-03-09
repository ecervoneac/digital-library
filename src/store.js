import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { booksListReducer } from "./reducers/bookListReducers";
import { shelvesListReducer } from "./reducers/shelvesReducers";

const reducer = combineReducers({
  booksList: booksListReducer,
  shelvesList: shelvesListReducer,
});

const midleware = [thunk];

const localStorageBooks = localStorage.getItem("books")
  ? JSON.parse(localStorage.getItem("books"))
  : [];

const localStorageShelves = localStorage.getItem("shelves")
  ? JSON.parse(localStorage.getItem("shelves"))
  : [];

const initialState = {
  booksList: {
    books: localStorageBooks,
  },
  shelvesList: {
    shelves: localStorageShelves,
  },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...midleware))
);

export default store;
