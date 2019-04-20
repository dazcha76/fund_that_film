import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className='modal-container'>
      <div className='register-modal'>
        <h2>Would you like to register and save your information?</h2>
        <div className='button-container'>
          <Link to='/register'>
            <button className='page-button'>Yes</button>
          </Link>
          <button className='page-button'>No</button>
        </div>
      </div>
    </div>
  )
}