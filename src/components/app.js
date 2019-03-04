import { Button } from 'reactstrap';
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Test from './test';
import Home from './home/index';
import NewProject from './newprojects/index';
import Comparisons from './comparables/index';
import Financials from './financial/index';
import Contact from './contact/index';
import About from './aboutus/index';
import Nav from './navbar/index';
import Disclaimer from './footer/disclaimer';


const App = () => (
    <div>
         <Route exact path='/' component={ Home }/>
         <Route  path='/new_project' component={ NewProject }/>
         <Link   to='/new_project'></Link>
               
         <Route  path='/comparisons' component={ Comparisons }/>
         <Route  path='/financials' component={ Financials }/>
         <Route  path='/contact' component={ Contact }/>
         <Route  path='/about' component={ About }/>
         <Nav/>
        <Disclaimer/>
    </div>
);

export default App;
