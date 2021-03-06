import React from 'react';
import { Card, CardImg,CardBody,CardText, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderGlass({glass}) {
    
    
  if (glass!= null) {
     return (
       
          
                 <div className="col-12">
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
function RenderMenuItem ({glass}) {
  return (
  
          <Link to={`/glasses/${glass._id}`}>
          
          <RenderGlass glass={glass} />
                
          </Link>
    
  );
}
const Glasses = (props) => {

  const monturas = props.glasses.glasses.map((glass) => {
      return (
          <div className="col-12 col-md-4"  key={glass._id}>
              <RenderMenuItem glass={glass}  />
          </div>
      );
  });
  if (props.glasses.isLoading) {
      return(
          <div className="container">
              <div className="row">            
                  <Loading />
              </div>
          </div>
      );
  }
  else if (props.glasses.errMess) {
      return(
          <div className="container">
              <div className="row"> 
                  <div className="col-12">
                      <h4>{props.glasses.errMess}</h4>
                  </div>
              </div>
          </div>
      );
  }
  else{
      return (
      <div className="container">
          <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Monturas</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>Monturas</h3>
                  <hr />
              </div>                
          </div>
          <div className="row row-content">
              
              {monturas}
          </div>
      </div>
  );}
}

export default Glasses;