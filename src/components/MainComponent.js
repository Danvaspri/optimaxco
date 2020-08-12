
import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
       
import GlassDetail from './GlassDetailComponent';
import Favorites from './FavoriteComponent';
import GlassComponent from './GlassesComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, postFeedback, fetchGlasses, fetchComments, loginUser, logoutUser, fetchFavorites, googleLogin, postFavorite, deleteFavorite } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



const mapStateToProps = state => {
  return {
    glasses: state.glasses,
    comments: state.comments,
    favorites: state.favorites,
    auth: state.auth
  
  }
}

 
const mapDispatchToProps = dispatch => ({
  postComment: (glassId, rating, author, comment) => dispatch(postComment(glassId, rating, author, comment)),
  fetchGlasses: () => { dispatch(fetchGlasses())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  postFeedback: (feedback) => dispatch(postFeedback(feedback)),
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  fetchFavorites: () => dispatch(fetchFavorites()),
  googleLogin: () => dispatch(googleLogin()),
  postFavorite: (glassId) => dispatch(postFavorite(glassId)),
  deleteFavorite: (glassId) => dispatch(deleteFavorite(glassId))

});



class Main extends Component {

  
  componentDidMount() {
    this.props.fetchGlasses();
    this.props.fetchComments();
    this.props.fetchFavorites();
 
    
  }
  componentWillUnmount() {
    this.props.logoutUser();
  }
  render() {

    const HomePage = () => {
      return(
        <Home glass={this.props.glasses.glasses.filter((glass) => glass.featured)[0]}
          glassesLoading={this.props.glasses.isLoading}
          glassesErrMess={this.props.glasses.errMess}
    
        />
      );
    }
 
    const AboutPage=()=>{
      return(
        <About/>
      )
    }
 
    const GlassWithId = ({match}) => {
      return(
        (this.props.auth.isAuthenticated && this.props.favorites.favorites)
        ?
        <GlassDetail glass={this.props.glasses.glasses.filter((glass) => glass._id === match.params.glassId)[0]}
          isLoading={this.props.glasses.isLoading}
          errMess={this.props.glasses.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.glass === match.params.glassId)}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
          favorite={this.props.favorites.favorites.glasses.some((glass) => glass === match.params.glassId)}
          postFavorite={this.props.postFavorite}
          />
        :
        <GlassDetail glass={this.props.glasses.glasses.filter((glass) => glass._id === match.params.glassId)[0]}
        isLoading={this.props.glasses.isLoading}
        errMess={this.props.glasses.errMess} 
        comments={this.props.comments.comments.filter((comment) => comment.glass === match.params.glassId)}
        commentsErrMess={this.props.comments.errMess}
        postComment={this.props.postComment}
        favorite={false}
        postFavorite={this.props.postFavorite}
        />
      );
    }


    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Component {...props} />
          : <Redirect to={{
              pathname: '/home',
              state: { from: props.location }
            }} />
      )} />
    );
    return (
      <div>
        <Header auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser}
          googleLogin={this.props.googleLogin}
          />   
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path='/aboutus' component={AboutPage}/>
              <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
              <Route exact path="/glasses" component={() => <GlassComponent glasses={this.props.glasses} />} />
              <Route path="/glasses/:glassId" component={(GlassWithId)} />
              <PrivateRoute exact path="/favorites" component={() => <Favorites favorites={this.props.favorites} glasses={this.props.glasses} deleteFavorite={this.props.deleteFavorite} />} />
             <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));