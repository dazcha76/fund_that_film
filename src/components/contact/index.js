import React, { Component } from 'react';
import scss from '../../section/contact.scss';

class Contact extends Component {

  render(){
    return (
      <div className="wrapper contact-us-wrapper">
        <div className="contact-us-container">
          <h1>Contact Us</h1>
          <form className="contact-us-form" onSubmit={this.handleSubmit}>
            <div className="multiple-inputs">
              <input type="text" id="first-name" name="first-name" className="contact_input" placeholder="First Name" />
              <input type="text" id="last-name" name="last-name" className="contact_input" placeholder="Last Name" />
            </div>
            <input type="phone-number" id="phone-number" name="phone-number" className="contact_input" placeholder="Phone Number" />
            <input type="email" id="email" name="email" className="contact_input" placeholder="Email Address" />
            <textarea id="message" name="message" className="contact_text" placeholder="Message"></textarea>
            <button className="page-button send-email-button">Send</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;