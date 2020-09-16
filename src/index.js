import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import SiderDemo from './layout/index'

ReactDOM.render(
  <React.StrictMode>
    <SiderDemo />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
