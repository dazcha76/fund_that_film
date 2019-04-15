import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import Input from '../helpers/form/input';
import Textarea from '../helpers/form/textarea';
import Nav from '../navbar/index';
import { connect } from 'react-redux';
import { sendContactForm } from '../../actions';

const required = value => value ? undefined : 'Field is Required';

class Contact extends Component {
  state = {
    messageSent: false
  }

  submitHandler = (values) => {
    this.props.sendContactForm(values).then(() => this.setState(() => ({
        messageSent: true
      })));
    return values;
  }

  render(){
    const {handleSubmit, onSubmit } = this.props;

    if (this.state.messageSent === true) {
      return <Redirect to='/confirmation' />
    }

    return (
      <div className='main-container'>
        <Nav/>
        <h1>Contact Us</h1>
        <form className='contact-us-form' onSubmit={handleSubmit(this.submitHandler)}>
          <div className='multiple-inputs-fields'>
            <div className="two-input-grouping">
              <p className='label'>First Name:</p>
              <Field name='firstName' type='text' component={ Input } validate={ required }/>
            </div>
            <div className='two-input-grouping'>
              <p className='label'>Last Name:</p>
              <Field name='lastName' type='text' component={ Input } validate={ required }/>
            </div>
          </div>
          <div className="multiple-inputs-fields">
            <div className='two-input-grouping'>
              <p className='label'>Phone Number:</p>
              <Field name='phoneNumber' type='text' component={ Input } validate={ required }/>
            </div>
            <div className='two-input-grouping'>
              <p className='label'>Email Address:</p>
              <Field name='email' type='email' component={ Input } validate={ required }/>
            </div>
          </div>
          <div className="message-input">
            <p className='textarea-label'>Message:</p>
            <Field name='message' type='text' component={ Textarea } validate={ required }/>
          </div>
  
          <div className='button-container'>
            <button type="submit" className='input-submit-button page-button'>Send</button>
          </div>         
        </form>
      </div>
    )
  }
}

Contact = reduxForm({
    form: 'contact_form',
  })(Contact) ;

const mapStateToProps = state => {
  return {
    contact_form: state.form
  }
}

export default connect(mapStateToProps, { sendContactForm })(Contact); 
