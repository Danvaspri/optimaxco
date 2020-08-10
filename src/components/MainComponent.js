import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Services from './ServicesComponent'
import Glasses from './GlassesComponent';
import GlassDetail from './GlassDetailComponent';
import { COMMENTS } from '../shared/comments';
import {GLASSES} from '../shared/glasses';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { postComment, fetchGlasses, fetchComments, postFeedback } from '../redux/ActionCreators';

import { actions } from 'react-redux-form';
import { GLASSES_FAILED } from '../redux/ActionTypes';




const mapStateToProps = state => {
  return {
    glasses: state.glasses,
    comments: state.comments,
  
  }
}

 
const mapDispatchToProps = dispatch => ({
  postComment: (glassId, rating, author, comment) => dispatch(postComment(glassId, rating, author, comment)),
  fetchGlasses: () => { dispatch(fetchGlasses())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),

});



class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      glasses: GLASSES,
      comments: COMMENTS

  
    };
  }
  componentDidMount() {
    this.props.fetchGlasses();
    this.props.fetchComments();
 
    
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
    const GlassesPage=()=>{
      return(
        <Glasses/>
      )
    }
    const GlassWithId = ({match}) => {
      return(
        <GlassDetail glass={this.props.glasses.glasses.filter((glass) => glass.id === parseInt(match.params.glassId,10))[0]}
        isLoading={this.props.glasses.isLoading}
        errMess={this.props.glasses.errMess}
        comments={this.props.comments.comments.filter((comment) => comment.glassId === parseInt(match.params.glassId,10))}
        commentsErrMess={this.props.comments.errMess}
        postComment={this.props.postComment}
      />
      );
    };


  
    return (
      <div>
      <Header/>
      <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/services' component={ServicePage}/>
              <Route exact path='/about' component={AboutPage}/>
              <Route exact path='/glasses' component={() => <Glasses glasses={this.props.glasses} />} />
                  <Route path='/glasses/:glassId' component={GlassWithId} />
              <Redirect to="/home" />
         
           
          </Switch>
          <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));