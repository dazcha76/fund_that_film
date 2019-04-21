import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../actions';

class Register extends Component {
  handleClick = () => {
    this.props.register(false)
  }

  render(){
    return (
      <div className='modal-container'>
        <div className='register-modal'>
          <h2>Would you like to register and save your information?</h2>
          <div className='button-container'>
            <Link to='/register'>
              <button className='page-button'>Yes</button>
            </Link>
            <button className='page-button' onClick={this.handleClick}>No</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    register: state.session.register
  }
} 

export default connect(mapStateToProps, {
  register
})(Register);