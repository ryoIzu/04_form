import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*
import Sample from './Components/Sample';
import StateForm from './Components/StateForm';
import FormTextarea from './Components/FormTextarea';
import FormList from './Components/FormList';
import FormRadio from './Components/FormRadio';
import FormCheck from './Components/FormCheck';
import FormCheckMulti from './Components/FormCheckMulti';
import FormFile from './Components/FormFile';
import StateNest from './Components/StateNest';
import StateNestImmer from './Components/StateNestImmer;
*/

import StateNestImmer2 from './Components/StateNestImmer2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <StateNestImmer2 />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
