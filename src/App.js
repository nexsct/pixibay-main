import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import {Container} from 'reactstrap';
import Footer from "./components/Footer";
import AboutThisProject  from "./components/AboutThisProject";
import DisplaySearch  from "./components/DisplaySearch";
import Error404 from "./components/Error404";


class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
            <Container fluid={true} >
              <Switch>
                        <Route exact component={AboutThisProject}   path="/about" />
                        <Route exact component={DisplaySearch}      path="/" />
                        <Route component={Error404}/>
              </Switch>
            </Container>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
