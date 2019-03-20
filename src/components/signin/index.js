import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../helpers/form/input';
import Nav from '../navbar/index';
import '../../section/signin.scss'; 

import { signIn } from '../../actions';
import { connect } from 'react-redux';

const required = value => value ? undefined : 'Field is Required';

class SignIn extends Component {
  loginHandler = (values) => {
    console.log('LOGIN: ', values);
    return values;
  }

  render(){
    const {handleSubmit, onSubmit } = this.props;

    return (
      <div className='signin-wrapper'>
        <Nav/>
        <div className='form-box'>
          <div className='signin-header'>
            <h1>Sign In</h1>
          </div>

          <form className='sign-in-form' onSubmit={handleSubmit(this.loginHandler)}>
            <div className="sign-in-inputs">
              <Field type='email' id='email' name='email' className='email-input'  placeholder='Email Address' validate={ required } component={ Input }/>
   
              <Field type='password' id='password' name='password' className='password-input'  placeholder='Password' validate={ required } component={ Input }/>
            </div>
            <button type="submit" className='login-submit-button page-button'>Login</button>
          </form>
        </div>
        
      </div>
    )
  }
}

SignIn = reduxForm({
    form: 'sign_in_form',
  })(SignIn) ;

const mapStateToProps = state => {
  return {
    sign_in_form: state.form
  }
}

export default connect(mapStateToProps, { signIn })(SignIn); 
