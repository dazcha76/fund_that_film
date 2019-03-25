import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { Field, reduxForm, clearFields } from 'redux-form';
import Select from '../helpers/form/drop_down';
import Input from '../helpers/form/input';
import Disclaimer from '../footer/disclaimer';
import Nav from '../navbar/index';
import { sendProjectData, getProjectTitle } from '../../actions';
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

  submitHandler = async (values) => {
    console.log("VALUES:", values)
    // if(values.developmentStage !== 'default'){
      this.props.getProjectTitle(values.title),
      await this.props.sendProjectData(values);
      this.setState({toComparables: true})
    // }
    return values;
  }
  
  render(){
    const {handleSubmit, onSubmit, clearFields } = this.props;

    if (this.state.toComparables === true) {
      return <Redirect to='/comparisons' />
    }

    return (  
      <div className='new-project-wrapper'>
        <div className='new-project-filter'></div>
        <div className='new-project-container'>
          <Nav/>
          <div className='new-project-form-box'>
            <form className='new-project-form' onSubmit={handleSubmit(this.submitHandler)}>
              <h1>Enter Project Information</h1>
     
              <div>
                <p id='title-label'>Movie Title: <i className="fas fa-question-circle"><span className="tooltiptext">Enter the name of your movie</span></i></p>
                <Field type='text' className='user-project-input' id="title" name='title' placeholder='Title ' component = {Input} validate={required}/>
              </div>
   
              <div className='multiple-inputs-fields'>
                  <div className='two-input-grouping'>
                    <p id='runtime-label'>Estimated Runtime: <i className="fas fa-question-circle"><span className="tooltiptext">Enter the estimated runtime in minutes</span></i></p>
                    <Field type='text' className='input-runtime' name='runtime' placeholder='Estimated Runtime (minutes)' validate={[required, number]} component = {Input} />
                  </div>
                  <div className='two-input-grouping'>
                    <p id='logline-label'>Logline: <i className="fas fa-question-circle"><span className="tooltiptext">Enter the logline for your movie</span></i></p>
                    <Field type='text'  className='logline' name='logline' placeholder='Logline'  validate={required} component = {Input} />
                  </div>
              </div>
              <div className='multiple-inputs-fields'>
                <div className='four-input-grouping'>
                  <p id='title-label'>Estimated Year of Release: <i className="fas fa-question-circle"><span className="tooltiptext">Enter the year you expect to release the movie</span></i></p>
                  <Field name = 'releasedYear' component = { Select } label = 'Estimated Year of Release:' defaultText = 'Select Year' options={this.buildOptions(years)} validate={required}/>
                </div>
                <div className='four-input-grouping'>
                  <p id='title-label'>Genre: <i className="fas fa-question-circle"><span className="tooltiptext">Enter the genre of your movie</span></i></p>
                  <Field name = 'genre' component = { Select } label = 'Genre:' defaultText = 'Select Genre' options={this.buildOptions(genre)} validate={required}/>
                </div>
                <div className='four-input-grouping'>
                  <p id='title-label'>MPAA Rating: <i className="fas fa-question-circle"><span className="tooltiptext">Enter the target MPAA rating of your movie</span></i></p>
                  <Field name = 'mpaa' component = { Select } label = 'Target MPAA Rating:' defaultText = 'Select MPAA' options={this.buildOptions(mpaa)} validate={required}/>
                </div>
                <div className='four-input-grouping'>
                  <p id='title-label'>Production Stage: <i className="fas fa-question-circle"><span className="tooltiptext">Enter the production stage your movie is currently in</span></i></p>
                  <Field name = 'developmentStage' component = { Select } label = 'Current Production Stage:' defaultText = 'Select Stage' options={this.buildOptions(developmentStage)} validate={required}/>
                </div>
              </div>

              <p id='synopsis-label'>Synopsis: <i className="fas fa-question-circle"><span className="tooltiptext">Enter a brief summary of what your movie is about</span></i></p>
              <Field component='textarea' type='text' id='synopsis' name='synopsis' placeholder='Synopsis' validate={ required } />

            <div className='multiple-inputs-fields'>
              <div className='film-input-grouping'>
                <p id='film1-label'>Film 1:</p>
                <Field type='text'  className='user-project-input film'  name='film1' placeholder='Film One'  validate= {required } component = {Input} />
              </div>
              <div className='meets-container'>
                <h4 className='meets'>Meets</h4><i className="fas fa-question-circle"><span className="tooltiptext">Enter the names of two movies that if combined would be an accurate description of your movie</span></i>
              </div>
              <div className='film-input-grouping'>
                <p id='film2-label'>Film 2:</p>
                <Field type='text' className='user-project-input film' name='film2' placeholder='Film Two'  validate={required} component = {Input} />
              </div>              
            </div>
            <div className="user-input-button-container">
              <button onClick={clearFields} type='button' className='new-project-form-button'>Clear</button>
              <button className='new-project-form-button'>Submit</button>
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
    releasedYear: 'default',
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

export default connect(mapStateToProps, { sendProjectData, getProjectTitle })(NewProject); 

