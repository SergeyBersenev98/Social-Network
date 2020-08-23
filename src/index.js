import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
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
document.getElementById('root')
 );

serviceWorker.unregister();