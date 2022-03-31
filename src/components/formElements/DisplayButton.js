import React, { Component } from 'react';
import {Button} from "reactstrap";

export default class DisplayButton extends Component {
  render() {
    return (
      <React.Fragment>
        <Button color="primary" type={this.props.type} className={this.props.className}>{this.props.text}</Button>
      </React.Fragment>
    )
  }
}  
  