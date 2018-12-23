import { EMPLOYEES_FETCH_SUCCESS } from "../actions/types";

const INITIAL_STASTE = {};

export default (state = INITIAL_STASTE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
