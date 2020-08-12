import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
     Label,  Row, Col  } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

import { FadeTransform, Fade, Stagger } from 'react-animation-components';


    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);

    class CommentForm extends Component {

        constructor(props) {
            super(props);
    
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            
            this.state = {
              isNavOpen: false,
              isModalOpen: false
            };
        }
    
        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
        }
    
        handleSubmit(values) {
            this.toggleModal();
            this.props.postComment(this.props.glassId, values.rating, values.comment);
        }
    
        render() {
            return(
            <div>
               
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
              
                 
               <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" id="rating" className="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                            <Label htmlFor="comment">Comment</Label>
                            <Control.textarea model=".comment" id="comment"
                                        rows="6" className="form-control" />
                            </Col>
                        </Row>
                        <Button type="submit" className="bg-primary">
                            Submit
                        </Button>
                    </LocalForm>
                </ModalBody>
               </Modal>
            
            </div>
            );
        }
    
    }
            
        
              

    function RenderGlass({glass}) {
    
    
         if (glass!= null) {
            return (
              
                 
                        <div className="col-12 col-sm-5">
                            <FadeTransform
                                in
                                transformProps={{
                                    exitTransform: 'scale(0.5) translateY(-50%)'
                                }}>
                            <Card>
                                <CardImg top src={ glass.image} alt={glass.name} />
                                <CardBody>
                                    <CardTitle>{glass.name}</CardTitle>
                                    <CardText>{glass.description}</CardText>
                                </CardBody>
                            </Card>
                            </FadeTransform>
                        </div>
                   
                
            )
        }
        else {
            return (<div></div>)
        }
    }
    function RenderComments({comments, postComment, glassId}) {
        if (comments == null) {
            return (<div></div>)       
        }
        else {
         return (
            
                    <div className="col-12 col-sm-5">
                        <h4> Comments </h4>
                        <ul className='list-unstyled'>
                        <Stagger in>
                        {comments.map((comment) => {
                            return (
                                <Fade in>
                                <li key={comment._id}>
                                <p>{comment.comment}</p>
                                <p>-{comment.author.name} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.updatedAt.toDate())))}</p>
                                </li>
                                </Fade>
                            );
                        })}
                        </Stagger>
                        </ul>   
                        <CommentForm 
                        glassId={glassId} postComment={postComment} />
                    </div>
           
        )
    }}
    

    const  GlassDetail = (props) => {
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
    
    
        else if (props.glass!= null) {
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/glasses">Monturas</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.glass.name}</BreadcrumbItem>
                    </Breadcrumb>
                </div>    
                <div className="col-12">
                    <h3>{props.glass.name}</h3>
                    <hr/>
                </div>                
                <div className="row">    
                    <RenderGlass glass={props.glass} />
                    <RenderComments comments={props.comments}
                            postComment={props.postComment} glassId={props.glass._id}/>    
                </div>
            </div>
        ); }

      
        else if(props.glass == null) {
            return (<div></div>)
        }
        
    
          
    }
export default GlassDetail;
        
