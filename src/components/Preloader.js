import React, { Component } from 'react'
import { Col, Spinner } from 'reactstrap';

export default class Preloader extends Component {
  render() {
    return (
        <Col className="textAlignCenter w-100 pt-5">
             <Spinner type="grow" color="primary" />
             <Spinner type="grow" color="primary" />
             <Spinner type="grow" color="primary" />
             <Spinner type="grow" color="primary" />
             <Spinner type="grow" color="primary" />
        </Col>
    )
  }
}


