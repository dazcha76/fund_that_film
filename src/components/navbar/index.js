import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import person from '../../assets/images/example_person_icon.png';


class Nav extends Component{
    state = {
        active:false,
        linksTo: [
            {
                text: 'Home',
                to:'/'
            }, 
            {
                text: 'New Projects',
                to:'/new_project'
            }, 
            {
                text: 'Comparisons',
                to:'/comparisons'
            }, 
            {
                text: 'Financials',
                to:'/financials'
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

        ]
    }
        constructor(props){
            super(props)
           
        }
    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }
    buildLink = (link) => {
        return (
            <li key= { link.to }   onClick= { this.toggleClass }>
                <Link to= { link.to }> { link.text }</Link>
            </li>
        )
    }
    render(){
        const navLinksTo = this.state.linksTo.map(this.buildLink);
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
                        { navLinksTo }
                    </div>
                </div>
            </div>
       </div>
      )
    }
  }



export default Nav;
