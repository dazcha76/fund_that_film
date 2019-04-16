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
    toSignIn: false
  }

  createUser = (values, projectID) => {
    this.props.createAccount(values, this.props.project_id);
    this.setState({
      toSignIn: true
    })
    return values;
  }

  render(){
    const {handleSubmit, onSubmit } = this.props;

    if (this.state.toSignIn === true) {
      return <Redirect to='/sign_in' />
    }

    return (
      <div className='main-container'>
        <Nav/> 
          <form className='new-account-form' onSubmit={handleSubmit(this.createUser)}>
            <h1 className='new-account-title'>Create Account</h1>
            <div className="new-account-inputs">
              <p className='label'>Full Name:</p>
              <Field name='name' type='name' validate={ validate } component={ Input }/>
              <p className='label'>Email Address:</p>
              <Field type='email' name='email'  validate={ validate } component={ Input }/>
              <p className='label'>Password:</p>
              <Field type='password' name='password'  validate={ validate } component={ Input }/>
            </div>
            <div className='button-container'>
              <button type="submit" className='login-submit-button page-button'>Register</button>
            </div>
          </form>
      </div>
    )
  }
}

CreateAccount = reduxForm({
  form: 'create_account_form',
})(CreateAccount) ;

const mapStateToProps = state => {
  console.log('PROJECT ID', state.comparables.project_id)
  return {
    project_id: state.comparables.project_id
  }
}

export default connect(mapStateToProps, { 
  createAccount, 
  sendProjectData 
})(CreateAccount); 