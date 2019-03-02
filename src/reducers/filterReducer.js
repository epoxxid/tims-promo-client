import { ActionNames } from "../actions";

const defaultFilter = {
  activeOnly: false,
  maxPrice: ''
};

export default function (state = defaultFilter, action) {
  switch (action.type) {
    case ActionNames.APPLY_FILTER:
      return action.payload;
    default:
      return state;
  }
};