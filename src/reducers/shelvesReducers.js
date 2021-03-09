import { ADD_TO_SHELVE } from "../constants/shelvesConstants";

export const shelvesListReducer = (state = { shelves: [] }, action) => {
  switch (action.type) {
    case ADD_TO_SHELVE:
      const item = action.slug;
      const gender = action.gender;
      const existingItem = state.shelves.find((x) => x.slug === item.slug);
      const fix = state.shelves.filter((x) => x.gender !== gender);

      if (existingItem) {
        return {
          ...state,
          shelves: state.shelves.map((x) =>
            x.slug === existingItem.slug ? item : x
          ),
        };
      } else {
        return {
          ...state,
          shelves: [...state.shelves, item],
        };
      }
    default:
      return state;
  }
};
