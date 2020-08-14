import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { fetchGlasses } from '../redux/ActionCreators';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isSigninOpen:false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleSignin = this.toggleSignin.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignin = this.handleSignin.bind(this);
        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    toggleSignin() {
        this.setState({
            isSigninOpen: !this.state.isSigninOpen
        });
    }
    handleSignin(event) {
        this.toggleSignin();
        this.props.SigninUser({ email: this.email.value, password: this.password.value});
        event.preventDefault();

    }
    handleLogin(event) {
        this.toggleModal();
        this.props.loginUser({email: this.email.value, password: this.password.value});
        event.preventDefault();

    }

    handleGoogleLogin(event) {
        this.toggleModal();
        this.props.googleLogin();
        event.preventDefault();
    }

    handleLogout() {
        this.props.logoutUser();
    }

    render() {
        return(
            <React.Fragment>
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
                                <NavLink className="nav-link" to='/glasses'> MONTURAS</NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink className="nav-link" to="/favorites">
                                        <span className="fa fa-heart fa-lg"></span> My Favorites
                                    </NavLink>
                                </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'> SOBRE NOSOTROS</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'> CONTACTO</NavLink>
                            </NavItem>
                            <NavItem>
                                { !this.props.auth.isAuthenticated ?
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                        {this.props.auth.isFetching ?
                                            <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                            : null
                                        }
                                    </Button>
                                        :
                                        <div>
                                        <div className="navbar-text mr-3">{this.props.auth.user.displayName}</div>
                                        <Button outline onClick={this.handleLogout}>
                                            <span className="fa fa-sign-out fa-lg"></span> Logout
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        </div>
                                    }

                                </NavItem>
                            </Nav>
                           
                          
                        </Collapse>
                     
                       
                    
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <Button className="col-10 offset-1 mt-2"color="danger" onClick={this.handleGoogleLogin}><span className="fa fa-google fa-lg"></span> Login with Google</Button>
                <Button className="col-10 offset-1 mt-2" onClick={ this.toggleSignin}>¿Aún no estás registrado? Crea tu cuenta!</Button>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="text" id="email" name="email"
                                    innerRef={(input) => this.email = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button className="float-right" type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                        <p></p>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isSigninOpen} toggle={this.toggleSignin}>
                    <ModalHeader toggle={this.toggleSignin}>Sign in</ModalHeader>
                   <ModalBody>
                        <Form onSubmit={this.handleSignin}>
                    
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="text" id="email" name="email"
                                    innerRef={(input) => this.email = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button className="float-right" type="submit" value="submit" color="primary">Sign in</Button>
                        </Form>
                        <p></p>
                    </ModalBody>
                </Modal>
            
            </div>
            </React.Fragment>
        );
    }
}

export default Header;