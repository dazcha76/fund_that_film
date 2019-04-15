import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../helpers/form/input';
import Nav from '../navbar/index';
import Disclaimer from '../footer/disclaimer';

const required = value => value ? undefined : 'Field is Required';
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

class NewProjectFirstPage extends Component {
  render(){
    const { handleSubmit } = this.props;

    return (
      <div className='main-container'>
        <Nav/>
        <form className='new-project-form' onSubmit={handleSubmit}>
          <div>
            <p className='label'>Movie Title: <i className='fas fa-question-circle'><span className='tooltiptext'>Enter the working title of your movie</span></i></p>
            <Field name='title' type='text' component={Input} label='Title' className='user-project-input' id='title' validate={required}/>
          </div>

          <div className='multiple-inputs-fields'>
            <div className='two-input-grouping'>
              <p className='label'>Estimated Runtime: <i className='fas fa-question-circle'><span className='tooltiptext'>Enter the estimated runtime in minutes</span></i></p>
              <Field name='runtime' type='number' component={Input} label='Estimated Runtime (minutes)' className='input-runtime' validate={required}/>
            </div>
            <div className='two-input-grouping'>
              <p className='label'>Logline: <i className='fas fa-question-circle'><span className='tooltiptext logline-tooltip'>Describe the core conflict of the story in one sentence</span></i></p>
              <Field name='logline' type='text' component={Input} label='Logline' className='logline' validate={required}/>
            </div>
          </div>

          <div>
            <p className='label'>Synopsis: <i className='fas fa-question-circle'><span className='tooltiptext synopsis-tooltip'>Enter a brief summary of what your movie is about</span></i></p>
            <Field name='synopsis' type='text' component='textarea' label='Synopsis' id='synopsis' validate={required}/>
          </div>

          <div>
            <button type="submit" className="next page-button">
              Next
            </button>
          </div>
        </form>
        <Disclaimer/>
      </div>
    )
  }
}

export default reduxForm({
  form: 'newproject_form',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  // validate
})(NewProjectFirstPage);