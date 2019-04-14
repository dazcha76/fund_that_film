import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewProjectFirstPage from './firstpage';
import NewProjectSecondPage from './secondpage';

class NewProject extends Component {
  state = {
    page: 1
  }

  nextPage = (values) => {
    console.log("PAGE 1 VALUES:", values)
    this.setState({ page: this.state.page + 1 });

  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div>
        <h1 className='new-project-title'>Enter Project Information</h1>
        {page === 1 && <NewProjectFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <NewProjectSecondPage
            previousPage={this.previousPage}
            onSubmit={this.onSubmit}
          />
        )}
      </div>
    )
  }
}

NewProject.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default NewProject;


// import React, { Component } from 'react';
// import {Link, Redirect} from 'react-router-dom';
// import { Field, reduxForm, reset } from 'redux-form';
// import Select from '../helpers/form/drop_down';
// import Input from '../helpers/form/input';
// import Autosuggest from './autosuggest';
// import Disclaimer from '../footer/disclaimer';
// import Nav from '../navbar/index';
// import { sendProjectData, getProjectTitle } from '../../actions';
// import { connect } from 'react-redux';

// const years = [
//   { text: '2019', value: '2019' },
//   { text: '2020', value: '2020' },
//   { text: '2021', value: '2021' },
//   { text: '2022', value: '2022' }
// ]

// const mpaa = [
//   { text: 'G', value: 'G' },
//   { text: 'PG', value: 'PG' },
//   { text: 'PG-13', value: 'PG-13' }, 
//   { text: 'R', value: 'R' },
//   { text: 'NC-17', value: 'NC-17' }
// ]
         
// const genre = [
//   { text: 'Action', value: 'Action' },
//   { text: 'Adventure', value: 'Adventure' },
//   { text: 'Animation', value: 'Animation' },
//   { text: 'Comedy', value: 'Comedy' },
//   { text: 'Crime', value: 'Crime' },
//   { text: 'Documentary', value: 'Documentary' },
//   { text: 'Drama', value: 'Drama' }, 
//   { text: 'Family', value: 'Family' },
//   { text: 'Fantasy', value: 'Fantasy' }, 
//   { text: 'History', value: 'History' },
//   { text: 'Horror', value: 'Horror' },
//   { text: 'Musical', value: 'Musical' },
//   { text: 'Mystery', value: 'Mystery' },
//   { text: 'Romance', value: 'Romance' },
//   { text: 'Science Fiction', value: 'Science Fiction'},
//   { text: 'Thriller', value: 'Thriller' },
//   { text: 'War', value: 'War' },
//   { text: 'Western', value: 'Western' }
// ]

// const developmentStage = [
//   { text: 'Pre-Production', value: 'Pre-Production' },
//   { text: 'Production', value: 'Production' },
//   { text: 'Post-Production', value:'Post-Production' },
//   { text: 'Distribution', value: 'Distribution' }
// ]

// const yearReleased = ({input, data, valueField, textField})=>
// <DropdownList {...input}
//   data={ data }
//   valueField={ valueField }
//   textField={textField }
//   onChange={input.onChange}
// />

// const required = value => value ? undefined : 'Field is Required';
// const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
  
// class NewProject extends Component {
//   state = {
//     toComparables: false
//   }

//   buildOptions(data){
//     return data.map(({text, value}) => <option key={value} value={value}>{text}</option> );
//   }

//   submitHandler = async (values) => { 
//     console.log("VALUES", values)
//     if(values.developmentStage !== 'default'){
//       this.props.getProjectTitle(values.title),
//       await this.props.sendProjectData(values);
//       this.setState({toComparables: true})
//     }
//     return values;
//   }
  
//   render(){
//     const {handleSubmit, onSubmit, pristine, reset, submitting } = this.props;

//     if (this.state.toComparables === true) {
//       return <Redirect to='/comparisons' />
//     }

//     return (  
//       <div className='new-project-wrapper'>
//         <Nav/>
//         <div className='new-project-container'>
//             <form className='new-project-form' onSubmit={handleSubmit(this.submitHandler)}>
//               <h1 className='new-project-title'>Enter Project Information</h1>
//               <div>
//                 <p id='title-label'>Movie Title: <i className='fas fa-question-circle'><span className='tooltiptext'>Enter the working title of your movie</span></i></p>
//                 <Field type='text' className='user-project-input' id='title' name='title' placeholder='Title ' component = {Input} validate={required}/>
//               </div>
//               <div className='multiple-inputs-fields'>
//                   <div className='two-input-grouping'>
//                     <p id='runtime-label'>Estimated Runtime: <i className='fas fa-question-circle'><span className='tooltiptext'>Enter the estimated runtime in minutes</span></i></p>
//                     <Field type='text' className='input-runtime' name='runtime' placeholder='Estimated Runtime (minutes)' validate={[required, number]} component = {Input} />
//                   </div>
//                   <div className='two-input-grouping'>
//                     <p id='logline-label'>Logline: <i className='fas fa-question-circle'><span className='tooltiptext logline-tooltip'>Describe the core conflict of the story in one sentence</span></i></p>
//                     <Field type='text'  className='logline' name='logline' placeholder='Logline'  validate={required} component = {Input} />
//                   </div>
//               </div>
//               <div className='multiple-inputs-fields'>
//                 <div className='four-input-grouping'>
//                   <p id='title-label'>Year of Release: <i className='fas fa-question-circle'><span className='tooltiptext year-tooltip'>Enter the year you expect to release the movie</span></i></p>
//                   <Field name = 'releasedYear' component = { Select } label = 'Estimated Year of Release:' defaultText = 'Select Year' options={this.buildOptions(years)}/>
//                 </div>
//                 <div className='four-input-grouping'>
//                   <p id='title-label'>Genre: <i className='fas fa-question-circle'><span className='tooltiptext'>Enter the genre of your movie</span></i></p>
//                   <Field name = 'genre' component = { Select } label = 'Genre:' defaultText = 'Select Genre' options={this.buildOptions(genre)} validate={required}/>
//                 </div>
//                 <div className='four-input-grouping'>
//                   <p id='title-label'>MPAA Rating: <i className='fas fa-question-circle'><span className='tooltiptext'>Enter the target MPAA rating of your movie</span></i></p>
//                   <Field name = 'mpaa' component = { Select } label = 'Target MPAA Rating:' defaultText = 'Select MPAA' options={this.buildOptions(mpaa)} validate={required}/>
//                 </div>
//                 <div className='four-input-grouping'>
//                   <p id='title-label'>Production Stage:<i className='fas fa-question-circle'>
//                     <span className='tooltiptext production-tooltip'>
//                       <span className='definition'>Pre-Production: Planning the schedule, budget, location and cast</span>
//                       <span className='definition'>Production: Filming has started</span>
//                       <span className='definition'>Post-Production: Reviewing the footage and assembling the movie</span>
//                       <span className='definition'>Distribution: Getting your film to cinemas, television networks and online platforms</span>
//                     </span></i></p>
//                   <Field name = 'developmentStage' component = { Select } label = 'Current Production Stage:' defaultText = 'Select Stage' options={this.buildOptions(developmentStage)} validate={required}/>
//                 </div>
//               </div>
//               <p id='synopsis-label'>Synopsis: <i className='fas fa-question-circle'><span className='tooltiptext synopsis-tooltip'>Enter a brief summary of what your movie is about</span></i></p>
//               <Field component='textarea' type='text' id='synopsis' name='synopsis' placeholder='Synopsis' validate={ required } />
//             <div className='multiple-inputs-fields'>
//               <div className='film-input-grouping'>
//                 <p id='film1-label'>Film 1: <i className='fas fa-question-circle'><span className='tooltiptext'>Your movie can be compared to:</span></i></p>
                
//                  <Field component={Autosuggest} name='film1' placeholder='Film 1' />

//               </div>
//               <div className='meets-container'>
//                 <h4 className='meets'>Meets</h4>
//               </div>
//               <div className='film-input-grouping'>
//                 <p id='film2-label'>Film 2: <i className='fas fa-question-circle'><span className='tooltiptext'>It can also be compared to:</span></i></p>

//                 <Field component={Autosuggest} name='film2' placeholder='Film 2' />

//               </div>              
//             </div>
//             <div className='user-input-button-container'>
//               <button onClick={reset} type='button' disabled={pristine || submitting} className='new-project-clear-button page-button'>Clear</button>
//               <button type='submit' className='new-project-submit-button page-button'>Submit</button>
//             </div> 
//           </form> 
//           </div>
//         <Disclaimer/>
//       </div>
//     )
//   }
// }

// NewProject = reduxForm({  
//   form: 'newproject_form',     
//   initialValues: { 
//     releasedYear: 'default',
//     mpaa: 'default',
//     genre: 'default',
//     developmentStage: 'default'
//   }
// })(NewProject);

// const mapStateToProps = state => {
//   return {
//     project_form: state.form
//   }
// }

// export default connect(mapStateToProps, { 
//   sendProjectData, 
//   getProjectTitle
// })(NewProject); 

