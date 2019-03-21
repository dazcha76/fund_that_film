import { Button } from 'reactstrap';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Test from './test';
import Home from './home/index';
import SignIn from './signin/index';
import NewProject from './newprojects/index';
import MovieComparison from './comparables/index';
import FinancialNorthAmerica from './financial/index';
import Shareable from './financial/shareable';
import Contact from './contact/index';
import EmailSent from './contact/messagesent';
import CardsContainer from './aboutus/index';
import Disclaimer from './footer/disclaimer';
import Terms from './terms/index';

class App extends Component{
    componentDidMount(){
        setTimeout(() =>{
            let preloader = document.querySelector('.spinner-container');
            preloader.className = 'spinner-container spinner-disappear';
        }, 1000)
    }

    render(){
        return (    
            <main>
                <div className='route-container'>
                    <Route exact path='/' component={ Home }/>
                    <Route path='/sign_in' render={() => <SignIn />}/>
                    <Route path='/new_project' render={() => <NewProject />}/>
                    <Route path='/comparisons' component={ MovieComparison }/>
                    <Route path='/financials' component={ FinancialNorthAmerica }/>
                    <Route path='/invest/' component={ Shareable }/>
                    <Route path='/contact' component={() => <Contact /> }/>
                    <Route path='/confirmation' component={() => <EmailSent /> }/>
                    <Route path='/about' component={ CardsContainer }/>   
                    <Route path='/terms' component={ Terms } />
                </div>
            </main>
        )
    }
};

export default App;
