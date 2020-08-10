import React, { Component } from 'react';


import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
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
                                <NavLink className="nav-link " to='/services'> SERVICIOS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/glasses'> MONTURAS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/about'> SOBRE NOSOTROS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'> CONTACTO</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/signin'> <a className="fa fa-sign-in"></a></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/cart'> <a className="fa fa-cart-plus"></a></NavLink>
                            </NavItem>
                          
                            </Nav>
                          
                        </Collapse>
                     
                       
                    
                </Navbar>
            
            </div>
        );
    }
}

export default Header;