import {ActionNames} from "../actions";

export default (state = false, action) => {

  switch (action.type) {
    case ActionNames.START_LOADING_OFFERS:
      return true;
    case ActionNames.ADD_LOADED_OFFER:
      return false;
    default:
      return state;
  }
};