import React, { Component } from 'react';
import scss from '../../section/contact.scss';
import { Field, reduxForm } from 'redux-form';
import Input from '../helpers/form/input';


class Contact extends Component {


  dummySubmitHandler(values){
    console.log('form has been submitted with value: ', values);
    return values;
  }

  render(){
    const {handleSubmit, onSubmit } = this.props;
    return (
      <div className='zzwrapper zzcontact-us-wrapper'>
            <div className='zzcontact-us-container'>
            <h1> Contact Us</h1>
                    <form className='contact-us-form' onSubmit={handleSubmit(this.dummySubmitHandler)}>
                          <div className='row'>
                        <div className='col'>
                            <Field type='text' id='firstName' name='firstName' className='contact_input'  placeholder='First Name' component={ Input }/>
                        </div>
                      <div className='col'>
                        <Field type='text' id='lastName' name='firstName' className='contact_input'  placeholder='Last Name' component={ Input }/>
                      </div>

                      </div>
                      <div className='row'>
                                       
                      <div className='col'>
                          <Field type='text' id='phoneNumber' name='phoneNumber' className='contact_input'  placeholder='Phone Number' component={ Input }/>
                      
                       <div className='col'>
                         <Field type='email' id='email' name='email' className='contact_input'  placeholder='Email Address' component={ Input }/>
                       </div>
                        <div className='col'>
                           <textarea type= 'text' id='message' name='message' className='contact_text' placeholder='Enter Message' component='textarea'/>
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
    )
  }
}

export default 
  reduxForm({
    form: 'contact_validate_form',
  })(Contact)
