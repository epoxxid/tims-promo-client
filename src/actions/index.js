export const ActionNames = {
  START_LOADING_OFFERS: 'START_LOADING_OFFERS',
  ADD_LOADED_OFFER: 'ADD_LOADED_OFFER',
  APPLY_FILTER: 'APPLY_FILTER'
};

export const applyFilter = (payload) => ({
  type: ActionNames.APPLY_FILTER,
  payload
});

export const addLoadedOffer = (payload) => ({
  type: ActionNames.ADD_LOADED_OFFER,
  payload
});

export const startLoading = () => ({
  type: ActionNames.START_LOADING_OFFERS
});

