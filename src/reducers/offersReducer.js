import {ActionNames} from "../actions";

export default function (state = [], action) {

  switch (action.type) {
    case ActionNames.RECEIVE_LOADED_OFFERS:
      return action.payload;
    default:
      return state;
  }

};