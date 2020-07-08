import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardGroup, CardFooter
  } from 'reactstrap';
function Home(props) {
    function changeBorder(e) {
        e.target.style.borderColor = '#23a455';
      }
      function changeBack(e) {
        e.target.style.borderColor = '';
      }
    
    return(
  
<body>
<div className=" bg">
    <h1 >Más por tus ojos</h1>
</div>

<div className="container">
<div className="row col-12"><h1>Servicios</h1></div>
    <div className="row row-content">
    <CardGroup onMouseOver={changeBorder} onMouseOut={changeBack} className="text-center pr-5 pl-5 mr-5 ml-5">

        
            <Card className=" col-11" >
              
                <CardBody onMouseOver={changeBorder} onMouseOut={changeBack} >
                <span className="fa fa-tags"></span>
                <CardTitle>Venta de lentes medicados</CardTitle>
                <CardText>Elaboramos tus formulas con la mejor calidad y las mejores marcas.</CardText>
                </CardBody>
                <Button className="mb-5 ml-5 mr-5">CONOCE MÁS</Button>
            </Card>
        
       
            <Card className="  col-11" >
               
                <CardBody>
                <span className="fa fa-exchange"></span>
                <CardTitle>Cambio de monturas</CardTitle>
                <CardText>Puedes elegir de entre nuestra gran variedad de monturas aquella que se ajuste a tus necesidades y gustos.</CardText>
                
                </CardBody>
              <Button className="mb-5 ml-5 mr-5">CONOCE MÁS</Button>
            </Card>
        
      
            <Card  className=" col-11" >
              
                <CardBody>
               <span className="fa fa-wrench"></span>
                <CardTitle>Servicio Técnico</CardTitle>
                <CardText>En Optimax Eyewear prestamos el servicio de reparación y remplazo de piezas para gafas y monturas.</CardText>
                
                </CardBody>
                <Button className="mb-5 ml-5 mr-5">CONOCE MÁS</Button>
            </Card>
        

        </CardGroup>
    </div>
           
            
        </div>
 
 </body>



    
    );
}

export default Home;