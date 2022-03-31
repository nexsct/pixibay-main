import React, { Component } from 'react'
import { Row, Col, Fade} from "reactstrap";

export default class AboutUs extends Component {
  render() {
    return (
    <Fade>
    <Row>
      <Col xs={12} className="mt-5">
          <h1>About this project</h1>

          This was my first project in ReactJS!
          <br /><br />

          This project is using ReactJS to fetch images from PIXABAY free API<br /><br />

          This project was bootstrapped with <a href="https://github.com/facebook/create-react-app" terget="_blank" rel="noopener noreferrer">
          Create React App
          </a>  and the following modules are used:<br />
          react-router<br />
          react-router-dom<br />
          react-photo-gallery<br />
          reactstrap<br />
          <br />


          Tags:<br />
          <a title="ReactJS" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a>  <br />
          <a title="React Router" href="https://www.npmjs.com/package/react-router" target="_blank" rel="noopener noreferrer">React Router</a><br />
          <a title="Reactstrap" href="https://reactstrap.github.io/" target="_blank" rel="noopener noreferrer">Reactstrap</a><br />
          <a title="React Photo Gallery" href="http://neptunian.github.io/react-photo-gallery/" target="_blank" rel="noopener noreferrer">React Photo Gallery</a><br />
                  

          I use Pixabay free API to fetch data and display image in list.<br /><br />


          <br />
          You can find source code on <a href="https://github.com/tibor-markucz/pixabay-reactjs" target="_blank" rel="noopener noreferrer" title="ReactJS - pixabay-com API">GITHUB</a>


        </Col>
    </Row>

    </Fade>
    )
  }
}
