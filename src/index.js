import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom'


import './index.css';
import App from './App';

//Bootstrap 4
// import 'bootstrap/dist/css/bootstrap.min.css';

//MD Bootstrap 
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


