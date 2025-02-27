import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore';
// import './index.css';

const { store } = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
