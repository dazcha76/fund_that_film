import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(
    <Router>
         <App />
    </Router>,
    document.getElementById('root')
);
