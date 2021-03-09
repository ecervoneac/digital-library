import {
  ADD_BOOK_RATING,
  ADD_REVIEW,
  REQUEST_BOOK_LIST,
} from "../constants/bookConstants";

export const requestData = () => {
  return {
    type: REQUEST_BOOK_LIST,
  };
};

export const rateBook = (slug, rating) => (dispatch, getState) => {
  dispatch({
    type: ADD_BOOK_RATING,
    slug,
    rating,
  });

  localStorage.setItem("books", JSON.stringify(getState().booksList.books));
};

export const addReview = (slug, review) => (dispatch, getState) => {
  dispatch({
    type: ADD_REVIEW,
    slug,
    review,
  });

  localStorage.setItem("books", JSON.stringify(getState().booksList.books));
};
