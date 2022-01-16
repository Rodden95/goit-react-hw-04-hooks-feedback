import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import Provider from './components/Provider/Provider';


ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

