import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
// import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import rootReducer from './reducers/index'; 
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    // <Provider>
         <Router>
             <App />
        </Router>,
    // </Provider>,
    document.getElementById('root')
);
