import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../helpers/form/input';
import '../../section/contact.scss';



const required = value => value ? undefined : 'Field is Required';

class Contact extends Component {

  dummySubmitHandler(values){
    console.log('contact form has been submitted with value: ', values);
    return values;
  }

  render(){
    const {handleSubmit, onSubmit } = this.props;
    return (

      <div className='zzwrapper zzcontact-us-wrapper'>
            <div className='filter-container'></div>
            <div className='zzcontact-us-container'>
                <div className='form-box'>
                   <h1>Contact Us</h1>
                    <form className='contact-us-form' onSubmit={handleSubmit(this.dummySubmitHandler)}>
                          <div className='row'>
                        <div className='col'>
                            <Field type='text' id='firstName' name='firstName' className='contact_input'  placeholder='First Name' validate={ required } component={ Input }/>
                        </div>
                      <div className='col'>
                        <Field type='text' id='lastName' name='lastName' className='contact_input'  placeholder='Last Name' validate={ required } component={ Input }/>
                      </div>

                      </div>
                      <div className='row'>
                                       
                      <div className='col'>
                          <Field type='text' id='phoneNumber' name='phoneNumber' className='contact_input'  placeholder='Phone Number' component={ Input }/>
                      
                       <div className='col'>
                         <Field type='email' id='email' name='email' className='contact_input'  placeholder='Email Address' validate={ required } component={ Input }/>
                       </div>
                        <div className='col'>
                           <Field component='textarea' type='text' id='message' name='message' className='contact_text' validate={ required } placeholder='Enter Message' component={ Input }/>
                        </div>
                      </div></div>
                      <div className='row'>
                        <div className='col'>
                        <button className='input-submit-button first-button page-button'>Submit</button>
                        </div>
                      </div>         
                </form>
              </div>
          </div>
      </div>
    )
  }
}

export default 
  reduxForm({
    form: 'contact_validate_form',
  })(Contact) 
