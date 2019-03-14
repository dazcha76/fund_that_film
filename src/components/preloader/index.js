import React, { Component } from 'react';

class Preloader extends Component {
    state = {
        active: false,
        isLoading: false
    }
    componentDidMount(){
        setTimeout(() =>{
            let preloader = document.querySelector('.spinner-container');
            preloader.className = 'spinner-container spinner-disappear';
        }, 1000)
    }
    render(){
        return(
            <div>
              <div className='spinner-container'>
                 <div className='spinner'></div>
                </div>
             <div className='spinner-disappear'></div>
            </div>
        )
    }
}

export default Preloader;