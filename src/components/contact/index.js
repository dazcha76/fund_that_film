import React, { Component } from 'react';
import scss from '../../section/contact.scss';
import { Field, reduxForm } from 'redux-form';
import Forms, {textarea} from '../helpers/forms';
// import { connect } from 'react-redux';

// const { DOM : { textarea }} = React;

class Contact extends Component {

  // handleContact = value => {
  //   this.props.Contact( values );
  // }
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
                  <div className='zzmultiple-inputs'>
                      <div>
                        <Field type='text' id='firstName' name='firstName' className='contact_input' label='First Name' component={ Forms }/>
                      </div>
                       <div>
                        <Field type='text' id='lastName' name='lastName' className='contact_input' label='Last Name' component ={ Forms }/>
                       </div>
                        <div>
                       <Field type='phone-number' id='phoneNumber' name='phoneNumber' className='contact_input' label='Phone Number' component= { Forms }/>
                        </div>
                        <div>
                       <Field type='email' id='email' name='email' className='contact_input' label='Email Address' component={ Forms }/>
                        </div>
                       <textarea type= 'text' id='message' name='message' className='contact_text'  component="textarea"/>
                    <button className='page-button send-email-button'>Send</button>
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



// const {handleSubmit} = this.props;
// return (
//   <div className='wrapper contact-us-wrapper'>
//     <div className='contact-us-container'>
//       <h1>Contact Us</h1>
//       <form className='contact-us-form' onSubmit={handleSubmit(this.functionLog)}>
//         <div className='multiple-inputs'>
//         <div>
//       <Field/>
//         </div>
//           <input type='text' id='firstName' name='firstName' className='contact_input' placeholder='First Name' />
//           <p></p>
//           <input type='text' id='lastName' name='lastName' className='contact_input' placeholder='Last Name' />
//           <p></p>
//         </div>
//         <input type='phone-number' id='phoneNumber' name='phoneNumber' className='contact_input' placeholder='Phone Number' />
//         <input type='email' id='email' name='email' className='contact_input' placeholder='Email Address' />
//         <textarea id='message' name='message' className='contact_text' placeholder='Message'></textarea>
//         <button className='page-button send-email-button'>Send</button>
//       </form>
//     </div>
//   </div>
// )
// }
