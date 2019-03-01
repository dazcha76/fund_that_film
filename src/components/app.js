import React from 'react';
// import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Test from './test';
import Home from './home/index';
import NewProject from './newprojects/index';
import Comparisons from './comparables/index';
import Financials from './financial/index';
import Contact from './contact/index';
import About from './aboutus/index';
import Nav from './navbar/index';


const App = () => (
    <div>
      <Nav/> 
         <Route exact path='/' component={ Home }/>
         <Route exact path='/new_project' component={ NewProject }/>
         <Route exact path='/comparisons' component={ Comparisons }/>
         <Route exact path='/financials' component={ Financials }/>
         <Route exact path='/contact' component={ Contact }/>
         <Route exact path='/about' component={ About }/>
         
    </div>
);

export default App;
