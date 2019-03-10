import React, { Component } from 'react';
import scss from '../../section/newproject.scss';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { sendProjectData } from '../../actions';
import Select from '../helpers/form/drop_down';
import Input from '../helpers/form/input';

const years = [
  { text: '2019', value:'2019'},
  { text:'2020', value: '2020'},
  { text:'2021', value: '2021'},
  { text:'2022', value:'2022'}
]

const mpaa = [
  { text: 'G', value: 'G' },
  { text: 'PG', value: 'PG'},
  { text:'PG-13', value: 'PG-13'}, 
  { text:'R', value:'R'},
  { text:'NC-17', value: 'NC-17'}
]
         
const genre = [
  { text: 'Thriller', value: 'Thriller'},
  { text: 'Psychological Thriller', value:' Psychological Thriller'},
  { text: 'Drama', value:'Drama'}, 
  { text: 'Western', value: 'Western'}, 
  { text: 'Comedy', value:'Comedy'},
  { text: 'Black Comedy', value:'Black Comedy'},
  { text: 'Romance', value: 'Romance'},
  { text: 'Romantic Comedy', value: 'Romantic Comedy'},
  { text: 'Horror', value:'Horror'},  
  { text: 'Action', value: 'Action'}, { text:'Fantasy', value: 'Fantasy'}, 
  { text:'Adventure Film', value: 'Adventure Film'},
  { text: 'Documentary Film', value: 'Documentary Film'}
]

const developmentStage = [
  { text:'Pre-production', value:'Pre-production'},
  { text: 'Production', value: 'Production'},
  { text: 'Post-production', value:'Post Production'},
  { text: 'Distribution', value: 'Distribution'}
]

const yearReleased = ({input, data, valueField, textField})=>
 <DropdownList{...input}
  data= { data }
  valueField= { valuefield }
  textField = {textfield }
  onChange = {input.onChange}/>

const required = value => value ? undefined : 'Field is Required';
  
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
        <div className='new-project-container'>
          <h1>New Project</h1>
          <form className='new-project-form' onSubmit={handleSubmit(this.submitHandler)}>
            <div className='row'>
              <div className='col'>
                <Field type='text' className='user-project-input' name='title' placeholder='Title ' component = {Input} validate={required}/>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <Field type='text' className='input-runtime' name='runtime' placeholder='Runtime' validate={required} component = {Input} />
              </div>
              <div className='col'>
                <Field type='text'  className='logline' name='logline' placeholder='Logline'  validate={required} component = {Input} />
              </div>
            </div>
            <div className='multiple-inputs-fields'>
              <div className='row'>
                <Field name = 'releasedYear' component = { Select } label = 'Year' defaultText = 'Select Year' options={this.buildOptions(years)} validate={required}/>
              </div>
              <div className='row'>
                <Field name = 'genre' component = { Select } label = 'Genre' defaultText = 'Select Genre' options={this.buildOptions(genre)} validate={required}/>
              </div>
              <div className='row'>
                <Field name = 'mpaa' component = { Select } label = 'MPAA' defaultText = 'Select MPAA' options={this.buildOptions(mpaa)} validate={required}/>
              </div>
              <div className='row'>
                <Field name = 'developementStage' component = { Select } label = 'Development Stage' defaultText = 'Stages' options={this.buildOptions(developmentStage)} validate={required}/>
              </div>
            </div>

            <Field component='textarea' type='text' label='Synopsis' id='synopsis' name='synopsis' className='contact_text' placeholder='Synopsis' validate={required}/>

            <div className='film-wrapper'>
              <div className='row'>
                <div className='col'>
                  <label className='sr-only' htmlFor='inlineFormInputName'>Film 1</label>
                  <Field type='text'  className='user-project-input film'  name='film1' placeholder='Film One'  validate={required} component = {Input} />
                </div>
                <div className='col'>
                  <h3 className='film-capture'>Meets</h3>
                </div>
                <div className='col'>
                  <label className='sr-only' htmlFor='inlineFormInputGroupUsername'>Film 2</label>
                  <Field type='text' className='user-project-input film' name='film2' placeholder='Film Two'  validate={required} component = {Input} />
                </div>              
              </div>
           
                <button className='input-submit-button first-button page-button'>Submit</button>
        
                <button type='button' className='input-cancel-button second-button page-button'>Cancel</button>
            </div>
          </form> 
        </div>
      </div>
    )
  }
}

NewProject = reduxForm({  
  form: 'newproject_form',     
  initialValues: {
    title: '', 
    runtime: 0, 
    logline: '', 
    releasedYear: 0, 
    genre: '', 
    mpaa: '', 
    developmentStage:'', 
    synopsis: '', 
    film1: '', 
    film2: ''
  }
})(NewProject);

const mapStateToProps = state => {
  return {
    project_form: state.form
  }
}

export default connect(mapStateToProps, { sendProjectData })(NewProject); 