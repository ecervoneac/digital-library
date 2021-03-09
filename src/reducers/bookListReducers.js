import { ADD_BOOK_RATING, ADD_REVIEW } from "../constants/bookConstants";
import data from "../data";

export const booksListReducer = (state = { books: data }, action) => {
  switch (action.type) {
    case ADD_BOOK_RATING:
      const findItem = state.books.find((x) => x.slug === action.slug);
      const rating = action.rating;
      const updatedItem = { ...findItem, rating: rating };
      const updatedBooks = state.books.map((book) => {
        return book.slug === action.slug ? updatedItem : book;
      });
      return {
        ...state,
        books: updatedBooks,
      };
    case ADD_REVIEW:
      const itemReview = state.books.find((x) => x.slug === action.slug);
      const review = action.review;
      const updatedReviewItem = { ...itemReview, review };
      const updatedReviewBooks = state.books.map((book) => {
        return book.slug === action.slug ? updatedReviewItem : book;
      });
      return {
        ...state,
        books: updatedReviewBooks,
      };
    default:
      return state;
  }
};
