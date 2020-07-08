import React, { Component } from 'react';


import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar light expand="md"  >
                 
                <NavbarBrand className="mr-auto" href="/"><a>Optimax Eyewear</a></NavbarBrand>
                   
                        <NavbarToggler  onClick={this.toggleNav} />
                       
                           <Collapse isOpen={this.state.isNavOpen} navbar>
                          
                            <Nav navbar  className="ml-auto"> 
                            <NavItem >
                                <NavLink className="nav-link "  to='/home'> INICIO</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link " to='/aboutus'> SERVICIOS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'> MONTURAS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'> SOBRE NOSOTROS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'> CONTACTO</NavLink>
                            </NavItem>
                          
                            </Nav>
                          
                        </Collapse>
                     
                       
                    
                </Navbar>
            
            </div>
        );
    }
}

export default Header;