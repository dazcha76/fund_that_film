import { Button } from 'reactstrap';
import auth from '../hoc/auth'
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Test from './test';
import CardsContainer from './aboutus';
import Contact from './contact';
import Disclaimer from './footer/disclaimer';
import EmailSent from './contact/messagesent';
import FinancialNorthAmerica from './financial';
import Home from './home';
import MovieComparison from './comparables';
import NewProject from './newprojects';
import MyProjects from './projects';
import Shareable from './financial/shareable';
import SignIn from './signin';
import Terms from './terms';

class App extends Component {
    // state = {
    //     userAuth: false
    // }

    // signIn = () => {
    //     this.setState({userAuth: true})
    // };

    // signOut = () => {
    //     this.setState({userAuth: false})
    // };

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
                    {/*<Route path='/my_projects' component={auth(MyProjects, this.state.userAuth) }/>*/}
                    <Route path='/my_projects' component={MyProjects}/>
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
