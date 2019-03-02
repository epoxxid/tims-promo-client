export const ActionNames = {
  START_LOADING_OFFERS: 'START_LOADING_OFFERS',
  RECEIVE_LOADED_OFFERS: 'RECEIVE_LOADED_OFFERS',
  APPLY_FILTER: 'APPLY_FILTER'
};

export const applyFilter = (payload) => ({
  type: ActionNames.APPLY_FILTER,
  payload
});

export const loadOffers = (payload) => ({
  type: ActionNames.RECEIVE_LOADED_OFFERS,
  payload
});

export const startLoading = () => ({
  type: ActionNames.START_LOADING_OFFERS
});

