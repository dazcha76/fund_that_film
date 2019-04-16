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
      <div className='main-wrapper'>
        <Nav/> 
          <form className='new-account-form' onSubmit={handleSubmit(this.createUser)}>
            <h1 className='new-account-title'>Create Account</h1>
            <div className="new-account-inputs">
              <Field type='name' id='name' name='name' className='name-input'  placeholder='First and Last Name' validate={ validate } component={ Input }/>
              <Field type='email' id='email' name='email' className='email-input'  placeholder='Email Address' validate={ validate } component={ Input }/>
              <Field type='password' id='password' name='password' className='password-input'  placeholder='Password' validate={ validate } component={ Input }/>
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