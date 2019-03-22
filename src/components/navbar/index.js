import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import person from '../../assets/images/example_person_icon.png';

class Nav extends Component{
    state = {
        active: false,
        commonLinks: [
            {
                text: 'Home',
                to:'/'
            }, 
            {
                text: 'New Project',
                to:'/new_project'
            }, 
           
            {
                text: 'Contact',
                to:'/contact'
            }, 
            {
                text: 'About Us',
                to:'/about'
            },
            {
                text:'Terms & Conditions',
                to:'/terms'
            }

        ],
        loggedLinks: [
            {
                text: 'My Projects',
                to:'/my_projects'
            }
        ]
    }

    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    buildLink(link){
        return (
            <Link to= { link.to} key= { link.to } >
                <li>
                    { link.text }
                </li>
            </Link>
        )
    }

    renderLinks(){
        const logged = true;
        const {commonLinks, loggedLinks} = this.state;

        let activeLinks = [];
        let linkElements = [];

        if(logged){
            activeLinks = [...commonLinks, ...loggedLinks];

            linkElements = activeLinks.map(this.buildLink);

            linkElements.push(
                <li key='/sign_out'>
                  Sign Out      
                </li>
            );
        } else {
            activeLinks = [...commonLinks];

            linkElements = activeLinks.map(this.buildLink)
        }

        return linkElements;
    }

    render(){
        const hamburgerBaseClass = 'hamburger hamburger--spin ';
        const hamburgerActive = 'is-active'
        return(

        <div className='nav-bar-container'>
            <div className='nav-bar'>
     
                <button onClick= { this.toggleClass } className= { this.state.active ? (hamburgerBaseClass + hamburgerActive):hamburgerBaseClass } type='button'>
                    <span className='hamburger-box'>
                        <span className='hamburger-inner'></span>
                    </span>
                </button>

                <h1 className='terms-header about-header'>{this.props.title}</h1>

            </div>
            <div id='slide-out-menu' className = {this.state.active ? 'active' : '' }>
                <button onClick= { this.toggleClass } className= { this.state.active ? (hamburgerBaseClass + hamburgerActive):hamburgerBaseClass } type='button'>
                    <span className='hamburger-box'>
                        <span className='hamburger-inner'></span>
                    </span>
                </button>
                <div className='login-img-container'>
                    <img className='login-img' src= { person }/>
                </div>
                <div className='welcome-login-header'>
                {/* h1  will have to be done dynmically once we are able to create a login system
                that then will be used to pull the users name and email address from the database to the browser */}
                        <h2>Welcome John!</h2> 
                </div>
                <div className='slide-out-menu-content-container'>
                    <div className='slide-out-menu-content'>
                        <hr/>
                        { this.renderLinks() }
                    </div>
                </div>
            </div>
       </div>
      )
    }
  }



export default Nav;
