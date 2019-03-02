import {ActionNames} from "../actions";

export default (state = false, action) => {

  switch (action.type) {
    case ActionNames.START_LOADING_OFFERS:
      return true;
    case ActionNames.RECEIVE_LOADED_OFFERS:
      return false;
    default:
      return state;
  }
};