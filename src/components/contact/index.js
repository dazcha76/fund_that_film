import React, { Component } from 'react';
import scss from '../../section/contact.scss';
import { Field, reduxForm } from 'redux-form';
import Forms from '../helpers/forms';

class Contact extends Component {

  // handleContact = value => {
  //   this.props.Contact( values );
  // }
  dummySubmitHandler(){
    console.log('form has been submitted!');
  }

  render(){
    const {handleSubmit, onSubmit } = this.props;
    return (
     <div className='wrapper contact-us-wrapper'>
        <div className='contact-us-container'>
          <h1>Contact Us</h1>
          <form className='contact-us-form' onSubmit={handleSubmit(this.dummySubmitHandler)}>
            <div className='multiple-inputs'>
               <div>
                 <Field type='text' id='firstName' name='firstName' className='contact_input' placeholder='First Name' component={ Forms }/>
               </div>
                  
                  <Field type='text' id='lastName' name='lastName' className='contact_input' placeholder='Last Name' component = { Forms }/>
                  <p></p>
              
                 <Field type='phone-number' id='phoneNumber' name='phoneNumber' className='contact_input' placeholder='Phone Number' component= { Forms }/>
               
               
                <Field type='email' id='email' name='email' className='contact_input' placeholder='Email Address' component={ Forms }/>
              
               <textarea id='message' name='message' className='contact_text' placeholder='Message'></textarea>
               <button className='page-button send-email-button'>Send</button>
           </div>
          </form>
        </div>
      </div>
    
    )
  }
}

function validate({firstName, lastName, phoneNumber, email, message}) {
  console.log(firstName)
  const error = {};

  if(!firstName) {
    error.firstName = 'Please Enter A Valid First Name'
  }

  return (
    error
  )
}












export default reduxForm({
  form: 'contact_validate_form',
  validate,
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
