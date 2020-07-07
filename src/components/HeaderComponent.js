import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar light>
 
            <NavbarBrand href="/"><a id="navbarid">OPTIMAX EYEWEAR</a></NavbarBrand>
       
      </Navbar>

    </React.Fragment>
    );
  }
}

export default Header;