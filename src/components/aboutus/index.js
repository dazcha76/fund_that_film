
import React, { Component } from 'react';
import Person from './person';
import john from '../../assets/images/john_profile.png';
import danika from '../../assets/images/danika_profile.png';
import diana from '../../assets/images/diana_profile.png';
import christine from '../../assets/images/christine_profile.png';
import { strictEqual } from 'assert';
import { link } from 'react-router-dom';


class CardsContainer extends Component {
    state = { 
        people:  [
          {
              name: 'John Holman',
              image: john,
              title: 'Project Owner',
              linkedin:'https://www.linkedin.com/in/johntheholman/',
              github: 'https://github.com/bearlovesbob',
              portfolio:'http://johntheholman.com/'
          },
          {
            name: 'Diana Curtis',
            image: diana,
            title: 'Backend Developer',
            linkedin:'https://www.linkedin.com/in/diana-curtis/',
            github: 'https://github.com/DianaCurtis',
            portfolio:'dianacurtisdev.com'
          },
          {
            name: 'Danika Quinteros',
            image: danika,
            title: 'Frontend Developer',
            linkedin:'https://www.linkedin.com/in/danikaquinteros/',
            github: 'https://github.com/dazcha76',
            portfolio:'http://www.danikaquinteros.com'
          },
          {
            name: 'Christine Than',
            image: christine,
            title: 'Frontend Developer',
            linkedin:'https://www.linkedin.com/in/christinepthan/',
            github: 'https://github.com/krispthan',
            portfolio:'http://www.christinethan.com'
          },
       ]
    }
        constructor(props){
            super(props);
        }

    buildPersonInfo(person) {
        return (
            <Person key= { person.name } name= { person.name } title={person.title} image={ person.image } linkedin={ person.linkedin }
            github= { person.github } portfolio={ person.portfolio } />
        )
    }
    render(){
        const personCard = this.state.people.map(this.buildPersonInfo);

        return(
            <div className= 'about-us-wrapper'>
                <div className='about-us-container'>
                    <h1 className='about-us-header'>About Us</h1>
                </div>
                <div className= 'card-container'> 
                        { personCard }
                </div>
            </div>

        )
    }
}

export default CardsContainer;
