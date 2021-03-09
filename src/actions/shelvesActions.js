import { ADD_TO_SHELVE } from "../constants/shelvesConstants";

export const addToShelve = (slug, gender) => (dispatch, getState) => {
  const books = getState().booksList.books;
  const item = books.find((x) => x.slug === slug);

  dispatch({
    type: ADD_TO_SHELVE,
    slug: item,
    gender,
  });

  localStorage.setItem(
    "shelves",
    JSON.stringify(getState().shelvesList.shelves)
  );
};
