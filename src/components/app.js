import { Button } from 'reactstrap';
import React from 'react';
import { Route } from 'react-router-dom';
import Test from './test';
import Home from './home/index';
import NewProject from './newprojects/index';
import MovieComparison from './comparables/index';
import FinancialNorthAmerica from './financial/index';
import Contact from './contact/index';
import CardsContainer from './aboutus/index';
import Nav from './navbar/index';
import Disclaimer from './footer/disclaimer';


const App = () => (
    <div>
        <div>
            <Route exact path='/' component={ Home }/>
            <Route  path='/new_project' component={ NewProject }/>
            <Route  path='/comparisons' component={ MovieComparison }/>
            <Route  path='/financials' component={ FinancialNorthAmerica }/>
            <Route  path='/contact' component={() => <Contact /> }/>
            <Route  path='/about' component={ CardsContainer }/>
        </div>
         <Nav/>
        <Disclaimer/>
    </div>
);

export default App;
