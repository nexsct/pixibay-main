import React, {Component} from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
  



  class NavComponent extends Component {
    constructor(props) {
      super(props);
      this.state =  { isOpen : false }
     
    }




    render() {
      return (
        <div>
        <Navbar color="dark" expand="md">
          <NavbarBrand href="/">PIXABAY-REACTJS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      )
    }

  }

  export default NavComponent;
  