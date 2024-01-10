import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import datastore from './Redux/Store';
import { Provider } from 'react-redux';
console.log(datastore.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider datastore={datastore}>
<App/> 

</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
