import { ADD_STATUS_PAGE_URL, FETCH_CONTENTS } from "../actions/types";

export default function contentReducer(state = [], action) {
  switch (action.type) {
      case FETCH_CONTENTS:
      return action.contents;
      case ADD_STATUS_PAGE_URL:
      return [...state, action.payload];
    default:
      return state;
  }
}