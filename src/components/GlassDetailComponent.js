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
            this.state = {
                inModalOpen:false
              };
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        
        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
              });
        }
    
        handleSubmit(values) {
            this.props.postComment(this.props.glassId, values.rating, values.author, values.comment);

        }

        render(){
            return(
           
                <div className="container">
                        <Button outline onClick={this.toggleModal}>
                                            <span className="fa fa-pencil fa-lg"></span> Submit Comment
                        </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="rating" md={2}>Rating</Label>
                        <Col md={10}>
                            <Control.select model=".rating" id="rating" name="rating" 
                                placeholder="Rating" 
                                className="form-control"
                                validators={{
                                    required
                                }}>    
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>      
                            </Control.select>        
                            <Errors
                                className="text-danger"
                                model=".rating"
                                show="touched"
                                messages={{
                                    required: 'Required. '
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="author" md={2}>Your Name</Label>
                        <Col md={10}>
                            <Control.text model=".author" id="author" name="author"
                                placeholder="Put Your Name Here"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                />
                            <Errors
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    required: 'Required. ',
                                    minLength: 'Must be greater than 2 characters. ',
                                    maxLength: 'Must be 15 characters or less. '
                                }}
                            />
                        </Col>
                    </Row>
                
                            
                    <Row className="form-group">
                        <Label htmlFor="comment" md={2}>Comment</Label>
                        <Col md={10}>
                            <Control.textarea model=".comment" id="comment" name="comment"
                                rows="6"
                                className="form-control" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size:10, offset: 2}}>
                            <Button type="submit" color="primary">
                            Submit
                            </Button>
                        </Col>
                    </Row>
                </LocalForm>
                </ModalBody>
                </Modal>
            </div>
            )
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
                                <CardImg top src={baseUrl + glass.image} alt={glass.name} />
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
                                <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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
                            postComment={props.postComment} glassId={props.glass.id}/>    
                </div>
            </div>
        ); }

      
        else if(props.glass == null) {
            return (<div></div>)
        }
        
    
          
    }
export default GlassDetail;
        
