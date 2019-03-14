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
              <div class='spinner-container'>
                 <div class='spinner'></div>
                </div>
             <div class='spinner-disappear'></div>
            </div>
        )
    }
}

export default Preloader;