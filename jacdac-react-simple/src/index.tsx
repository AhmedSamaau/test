import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';  // comment out this
import App from './App';
import reportWebVitals from './reportWebVitals';
import { JacdacProvider } from "react-jacdac";
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <JacdacProvider>
      <App />
    </JacdacProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();