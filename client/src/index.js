import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import { RestaurantsContextProvider } from './context/RestaurantsContext';

ReactDOM.render(
  <React.StrictMode>
    <RestaurantsContextProvider>
	  <Router>
    		<App />
	  </Router>
    </RestaurantsContextProvider>

     </React.StrictMode>,
  document.getElementById('root')
);

