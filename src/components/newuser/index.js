import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../helpers/form/input';
import Nav from '../navbar/index';
import { Redirect } from 'react-router-dom';
import { createAccount, sendProjectData } from '../../actions';
import { connect } from 'react-redux';

// const validate = value => value ? undefined : 'Field is Required';

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

  // handleChange = (event) => { 
  //   let password = '';
  //   let confirm = '';

  //   if(event.target.name === 'password'){
  //     password = event.target.value;
  //     console.log("PASSWORD", password);
  //   } else if(event.target.name === 'confirm'){
  //     confirm = event.target.value;
  //     console.log("CONFIRM", confirm);
  //   }

    // if(password !== confirm){
    //   console.log("your passwords don't match")
    // } else if(password === confirm){
    //   console.log("your passwords MATCH")
    // }
  // };

  render(){
    const {handleSubmit, onSubmit, onChange } = this.props;

    if (this.state.toSignIn === true) {
      return <Redirect to='/sign_in' />
    }

    return (
      <div className='main-container'>
        <Nav/> 
          <form className='new-account-form' onSubmit={handleSubmit(this.createUser)}>
            <h1 className='new-account-title'>Create Account</h1>
            <div className="new-account-inputs">
              <p className='register-label'>Full Name:</p>
              <Field name='name' type='name' component={ Input }/>
              <p className='register-label'>Email Address:</p>
              <Field type='email' name='email' component={ Input }/>
              <p className='register-label'>Password:</p>
              <Field type='password' name='password' component={ Input } onChange={this.handleChange} />
              <p className='register-label'>Confirm Password:</p>
              <Field type='password' name='confirm' component={ Input } onChange={this.handleChange}/>
            </div>
            <div className='button-container'>
              <button type="submit" className='login-submit-button page-button'>Register</button>
            </div>
          </form>
      </div>
    )
  }
}

const validate = (values) => {
  const errors = {};

  console.log("VALUES", values)

  if(values.confirm !== values.password){
    errors.confirm = 'Your passwords do not match'
  }

  return errors;
}

CreateAccount = reduxForm({
  form: 'create_account_form',
  validate
})(CreateAccount) ;

const mapStateToProps = state => {
  return {
    project_id: state.comparables.project_id
  }
}

export default connect(mapStateToProps, { 
  createAccount, 
  sendProjectData 
})(CreateAccount); 