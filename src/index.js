import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from './reducers';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import {addLoadedOffer} from "./actions";
import offerLoader from "./services/offerLoader";
import offers from './data/offers';

const store = createStore(reducer);

offerLoader.run(function(offer) {
  store.dispatch(addLoadedOffer(offer));
});

// offers.map(offer => store.dispatch(addLoadedOffer(offerLoader.createOffer(offer))));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);