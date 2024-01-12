import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App1';
import { createStore } from 'redux';
import controlNum from './store/counterReducer';
import { Provider } from 'react-redux';
import controlStatus from './store/isVisibleReducer';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(controlStatus);

const store = configureStore({ reducer: rootReducer }, composeWithDevTools);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
