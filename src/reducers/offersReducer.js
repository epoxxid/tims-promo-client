import {ActionNames} from "../actions";

const applyFilter = (offers, filter) => {
  return offers.filter(offer => {
    let isValid = true;

    if (filter.activeOnly) {
      isValid = isValid && offer.validTo > new Date();
    }

    if (filter.maxPrice) {
      isValid = isValid && offer.fromPrice <= filter.maxPrice;
    }

    return isValid;
  });
};

let defaultOfferList = [];

export default function (state = [], action) {
  switch (action.type) {
    case ActionNames.RECEIVE_LOADED_OFFERS:
      // Save loaded list to external variable
      defaultOfferList = action.payload;
      return action.payload;
    case ActionNames.APPLY_FILTER:
      return applyFilter(defaultOfferList, action.payload);
    default:
      return state;
  }
};