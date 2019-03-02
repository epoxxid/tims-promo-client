import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reducer from './reducers';
import { createStore } from "redux";

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

render();

store.subscribe(render);
