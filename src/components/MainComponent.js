import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Services from './ServicesComponent'



class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
  
    };
  }

  render() {


    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    const ServicePage=()=>{
      return(
        <Services/>
      )
    }
    const AboutPage=()=>{
      return(
        <About/>
      )
    }


  
    return (
      <div>
      <Header/>
      <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/services' component={ServicePage}/>
              <Route exact path='/about' component={AboutPage}/>
              <Redirect to="/home" />
         
           
          </Switch>
          <Footer/>
      </div>
    );
  }
}

export default Main;