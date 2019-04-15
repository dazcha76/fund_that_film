import { Button } from 'reactstrap';
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
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
import Shareable from './shareable/shareable';
import SignIn from './signin';
import Terms from './terms';
import { signIn } from '../actions';
import { connect } from 'react-redux';
import auth from '../hoc/auth';

class App extends Component {
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
          <Route path='/sign_in' component={() => <SignIn />}/>
          <Route path='/new_project' component={() => <NewProject />}/>
          <Route path='/my_projects' component={auth(MyProjects, this.props.sign_in)}/>
          <Route path='/comparisons' component={() => <MovieComparison /> }/>
          <Route path='/financials' component={() => FinancialNorthAmerica }/>
          <Route path='/invest/' component={() => Shareable }/>
          <Route path='/contact' component={() => <Contact /> }/>
          <Route path='/confirmation' component={() => <EmailSent /> }/>
          <Route path='/about' component={ CardsContainer }/>   
          <Route path='/terms_and_conditions' component={ Terms } />
        </div>
      </main>
    )
  }
};

const mapStateToProps = state => {
  return {
    sign_in: state.session.login
  }
}

export default withRouter(connect(mapStateToProps, {
  signIn
})(App));



