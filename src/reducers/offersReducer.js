import {ActionNames} from "../actions";

export default function (state = [], action) {
  switch (action.type) {

    case ActionNames.ADD_LOADED_OFFER:
      return [
        ...state,
        action.payload
      ];

    default:
      return state;
  }
};