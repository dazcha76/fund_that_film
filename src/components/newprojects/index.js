import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Select from '../helpers/form/drop_down';
import Input from '../helpers/form/input';
import Disclaimer from '../footer/disclaimer';

import { sendProjectData } from '../../actions';
import { connect } from 'react-redux';

const years = [
  { text: '2019', value: '2019' },
  { text: '2020', value: '2020' },
  { text: '2021', value: '2021' },
  { text: '2022', value: '2022' }
]

const mpaa = [
  { text: 'G', value: 'G' },
  { text: 'PG', value: 'PG' },
  { text: 'PG-13', value: 'PG-13' }, 
  { text: 'R', value: 'R' },
  { text: 'NC-17', value: 'NC-17' }
]
         
const genre = [
  { text: 'Action', value: 'Action' },
  { text: 'Adventure', value: 'Adventure' },
  { text: 'Animation', value: 'Animation' },
  { text: 'Comedy', value: 'Comedy' },
  { text: 'Crime', value: 'Crime' },
  { text: 'Documentary', value: 'Documentary' },
  { text: 'Drama', value: 'Drama' }, 
  { text: 'Family', value: 'Family' },
  { text: 'Fantasy', value: 'Fantasy' }, 
  { text: 'History', value: 'History' },
  { text: 'Horror', value: 'Horror' },
  { text: 'Music', value: 'Music' },
  { text: 'Mystery', value: 'Mystery' },
  { text: 'Romance', value: 'Romance' },
  { text: 'Science Fiction', value: 'Science Fiction'},
  { text: 'Thriller', value: 'Thriller' },
  { text: 'War', value: 'War' },
  { text: 'Western', value: 'Western' }
]

const developmentStage = [
  { text: 'Pre-Production', value: 'Pre-Production' },
  { text: 'Production', value: 'Production' },
  { text: 'Post-Production', value:'Post-Production' },
  { text: 'Distribution', value: 'Distribution' }
]

const yearReleased = ({input, data, valueField, textField})=>
<DropdownList {...input}
data={ data }
valueField={ valueField }
textField={textField }
onChange={input.onChange}
/>

const required = value => value ? undefined : 'Field is Required';
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
  
class NewProject extends Component {
  state = {
    toComparables: false,
  }

  buildOptions(data){
    return data.map(({text, value}) => <option key={value} value={value}>{text}</option> );
  }

  submitHandler = (values) => {
    console.log('project form has been submitted with value: ', values);
    this.props.sendProjectData(values).then(() => this.setState(() => ({
        toComparables: true
      })));
    return values;
  }
  
  render(){
    const {handleSubmit, onSubmit } = this.props;

    if (this.state.toComparables === true) {
      return <Redirect to='/comparisons' />
    }

    return (
      <div className='new-project-wrapper'>
      <div className='new-project-filter'></div>
        <div className='new-project-container'>
          <div className='new-project-form-box'>
          <form className='new-project-form' onSubmit={handleSubmit(this.submitHandler)}>
          <h1>Enter New Project</h1>
            <div className='row'>
              <div className='col'>
                <Field type='text' className='user-project-input' name='title' placeholder='Title ' component = {Input} validate={required}/>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <Field type='text' className='input-runtime' name='runtime' placeholder='Runtime (minutes)' validate={[required, number]} component = {Input} />
              </div>
              <div className='col'>
                <Field type='text'  className='logline' name='logline' placeholder='Logline'  validate={required} component = {Input} />
              </div>
            </div>
            <div className='multiple-inputs-fields'>
              <div className='row'>
                <Field name = 'releasedYear' component = { Select } label = 'Year' defaultText = 'Select Year' options={this.buildOptions(years)}/>
              </div>
              <div className='row'>
                <Field name = 'genre' component = { Select } label = 'Genre' defaultText = 'Select Genre' options={this.buildOptions(genre)}/>
              </div>
              <div className='row'>
                <Field name = 'mpaa' component = { Select } label = 'MPAA' defaultText = 'Select MPAA' options={this.buildOptions(mpaa)}/>
              </div>
              <div className='row'>
                <Field name = 'developmentStage' component = { Select } label = 'Development Stage' defaultText = 'Stages' options={this.buildOptions(developmentStage)}/>
              </div>
            </div>

            <Field component='textarea' type='text' id='synopsis' name='synopsis' className='contact_text' placeholder='Synopsis' validate={ required } component ={ Input }/>

            <div className='film-wrapper'>
              <div className='row'>
                <div className='col'>
                  <label className='sr-only' htmlFor='inlineFormInputName'>Film 1</label>
                  <Field type='text'  className='user-project-input film'  name='film1' placeholder='Film One'  validate= {required } component = {Input} />
                </div>
                <div className='col'>
                  <h3 className='film-capture'>Meets</h3>
                </div>
                <div className='col'>
                  <label className='sr-only' htmlFor='inlineFormInputGroupUsername'>Film 2</label>
                  <Field type='text' className='user-project-input film' name='film2' placeholder='Film Two'  validate={required} component = {Input} />
                </div>              
              </div>
                <div className="user-input-button-container">
                <button className='new-project-form-button'>Submit</button>
                <button type='button' className='new-project-form-button'>Cancel</button>
                </div> 
            </div>
          </form> 
          </div>
        </div>
        <Disclaimer/>
      </div>
     
    )
  }
}

const year = new Date();

NewProject = reduxForm({  
  form: 'newproject_form',     
  initialValues: { 
    releasedYear: year.getFullYear(),
    mpaa: 'default',
    genre: 'default',
    developmentStage: 'default'
  }
})(NewProject);

const mapStateToProps = state => {
  return {
    project_form: state.form
  }
}

export default connect(mapStateToProps, { sendProjectData })(NewProject); 