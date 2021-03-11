import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
  // <React.StrictMode>
    <MainApp />
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

