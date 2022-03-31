import React, { Component } from 'react'
import { Row, Col } from "reactstrap";

export default class Error404 extends Component {
  render() {
    return (
      <Row className="error404">
        <Col sm={12} >
          <h1>dimension 404 not found</h1>
          <h2>Page not found!</h2>
          <a href="/" title="Back to homepage">Back to homepage</a>

          <a href="https://www.imdb.com/title/tt5798078/" target="_blank" rel="noopener noreferrer" title="Dimension 404" className="dimension404">or check <b>Dimension 404</b> anthology series</a>
        </Col>
      </Row>
    )
  }
}
