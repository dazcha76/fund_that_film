import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../helpers/form/input';
import '../../section/contact.scss'; 

import { sendContactForm } from '../../actions';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import Nav from '../navbar/index';



const required = value => value ? undefined : 'Field is Required';

class Contact extends Component {
  state = {
    messageSent: false,
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

      <div className='wrapper contact-us-wrapper'>
            <div className='filter-container'></div>
            <div className='contact-us-container'>
            <Nav/>
                <div className='form-box contact-form'>
                   <h1 className="contact-title">Contact Us</h1>
                    <form className='contact-us-form' onSubmit={handleSubmit(this.submitHandler)}>
                      <div className="name-inputs">
                        <Field type='text' id='firstName' name='firstName' className='first-name-input'  placeholder='First Name' validate={ required } component={ Input }/>
             
                        <Field type='text' id='lastName' name='lastName' className='last-name-input'  placeholder='Last Name' validate={ required } component={ Input }/>
                      </div>

                      <div className="message-inputs">
                        <Field type='text' id='phoneNumber' name='phoneNumber' className='contact-input'  placeholder='Phone Number' validate={ required } component={ Input }/>
                        </div>
                      <div className="message-inputs">
                        <Field type='email' id='email' name='email' className='contact-input'  placeholder='Email Address' validate={ required } component={ Input }/>
                      </div>
                      <div className="message-inputs">
                        <Field component='textarea' type='text' id='message' name='message' className='contact-text' validate={ required } placeholder='Enter Message' component={ Input }/>
                      </div>
      
                      <div className='row'>
                        <div className='col'>
                        <button type="submit" className='input-submit-button first-button page-button'>Submit</button>
                        </div>
                      </div>         
                </form>
              </div>
          </div>
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
