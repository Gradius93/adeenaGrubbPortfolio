import React, { Component } from "react";

class Redirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentDidMount(){
    window.location = this.state.route.loc;
  }
  render(){
    return (<section>Redirecting...</section>);
  }
}

export default Redirect;
