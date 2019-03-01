import React from 'react';
import '../assets/css/app.css';
import '../assets/css/app.scss';
import logo from '../assets/images/logo.svg';
import Test from './test';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <h1>Welcome to React</h1>
        </div>
        <Test/>
    </div>
);

export default App;
