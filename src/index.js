import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import store from './Redux/ReduxStore.js'
import {Provider} from "react-redux"

ReactDOM.render(
  <BrowserRouter>
    <Provider store = {store}>
      <App />
    </Provider>
  </BrowserRouter>,
    document.getElementById('root'));

//https://www.youtube.com/watch?v=qMnZz5TI1WY&t=200s - work with GITHUB
serviceWorker.unregister();