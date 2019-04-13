import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../helpers/form/input';
import Nav from '../navbar/index';
import { Redirect } from 'react-router-dom';
import { createAccount, sendProjectData } from '../../actions';
import { connect } from 'react-redux';

const validate = value => value ? undefined : 'Field is Required';

class CreateAccount extends Component {
  state = {
    toMyProjects: false
  }

  createUser = (values) => {
    console.log("VALUES", values)
    this.props.createAccount(values)
    return values;
  }

  render(){
    const {handleSubmit, onSubmit } = this.props;

    return (
      <div className='new-account-wrapper'>
      <Nav/> 
        <div className='new-account-container'>
          <form className='new-account-form' onSubmit={handleSubmit(this.createUser)}>
            <h1 className='new-account-title'>Create Account</h1>
            <div className="new-account-inputs">

              <Field type='name' id='name' name='name' className='name-input'  placeholder='First and Last Name' validate={ validate } component={ Input }/>
   
              <Field type='email' id='email' name='email' className='email-input'  placeholder='Email Address' validate={ validate } component={ Input }/>

              <Field type='password' id='password' name='password' className='password-input'  placeholder='Password' validate={ validate } component={ Input }/>

            </div>
            <div className='login-button-container'>
            <button type="submit" className='login-submit-button page-button'>Register</button>
            </div>
          </form>
        </div>
        
      </div>
    )
  }
}

CreateAccount = reduxForm({
  form: 'create_account_form',
})(CreateAccount) ;

const mapStateToProps = state => {
  console.log('STATE', state)
  return {
    new_account: state
  }
}

export default connect(mapStateToProps, { 
  createAccount, 
  sendProjectData 
})(CreateAccount); 