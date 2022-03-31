import React, { Component } from 'react'
import { Label, Input } from 'reactstrap';
export default class DisplaySelect extends Component {
  render() {

    let options = this.props.data.map( (name) => {
        return (
          <option name={name.text} key={name.text}>{name.text}</option>
        )
    });
    // bd-highlight
    // className="w-100"
    return (
      <React.Fragment>
        <Label for={this.props.name} className="w-100 justify-content-start">{this.props.labelText}</Label>
        <Input type="select" name={this.props.name} id={this.props.name} onChange={this.props.onChange} className="form-control w-100" value={this.props.defaultValue}>
          { options }
        </Input>
      </React.Fragment>
    )
  }
} 
