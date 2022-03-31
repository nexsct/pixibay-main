import React, { Component } from 'react'
import { FormGroup, Label, Input } from 'reactstrap';


export default class DisplayInputs extends Component {
  render() {
    return (
      <FormGroup>
        <Label for={this.props.name}>{this.props.labelText}</Label>
        <Input type="text" name={this.props.name} id={this.props.name} onChange={this.props.onChange} className="w-100"/>
      </FormGroup>
    )
  }
}
 
