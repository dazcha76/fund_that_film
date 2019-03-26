import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../helpers/form/input';
import Nav from '../navbar/index';
import '../../section/signin.scss'; 
import {Redirect} from 'react-router-dom';
import { signIn } from '../../actions';
import { connect } from 'react-redux';

const required = value => value ? undefined : 'Field is Required';

class SignIn extends Component {

  loginHandler = (values) => {
    console.log("PROPS", this.props)
    this.props.signIn(values);
      
    return values;
  }

  render(){
    const {handleSubmit, onSubmit } = this.props;

    return (
      <div className='signin-wrapper'>
        <div className='signin-container'>
          <form className='sign-in-form' onSubmit={handleSubmit(this.loginHandler)}>
            <h1 className='signin-title'>Sign In</h1>
            <div className="sign-in-inputs">
              <Field type='email' id='email' name='email' className='email-input'  placeholder='Email Address' validate={ required } component={ Input }/>
   
              <Field type='password' id='password' name='password' className='password-input'  placeholder='Password' validate={ required } component={ Input }/>
            </div>
            <div className='login-button-container'>
            <button type="submit" className='login-submit-button page-button'>Login</button>
            </div>
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
  console.log("SIGNIN STATE", state.signin)
  return {
    sign_in_form: state.form
  }
}

export default connect(mapStateToProps, { signIn })(SignIn); 
