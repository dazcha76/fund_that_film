import React, { Component } from 'react';

const logged_status = (WrappedComponent, preText) => {
  class LoggedStatus extends Component {
    componentDidMount(){

    }

    log(message){
      console.log(`${preText} ${message}`);
    }

    render(){
      return <WrappedComponent {...this.props} log={this.log} />
    }
  }

  return LoggedStatus;
}

export default logged_status;