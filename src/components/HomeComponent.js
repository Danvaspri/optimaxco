import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardGroup, CardFooter
  } from 'reactstrap';
function Home(props) {
    function changeBorder(e) {
        e.target.style.borderColor = '#61CE70';
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
           
    <div className="row row-content ">
        <div className="row col-12">
            <h1>Destacados</h1>
        </div>
        <Button className="btn btn-sm mt-5 mb-5  ml-auto pt-0 pb-0 ">Ver todo</Button>
          
    </div>
    </div>
    <div className="row row-content bgGreen">
        <div className="row ">
          
               
                <div className="col-6   ml-auto">
                <h1 >Sobre nosotros</h1> 
                <p>Somos una óptica con más de 15 años de experiencia en el mercado. 
                    Nuestro objetivo es brindar una asesoría completa y personalizada a 
                    nuestros clientes. Ofrecemos soluciones oportunas a las necesidades y 
                    requerimientos de los usuarios con un manejo de precios accesibles. Prometemos
                    un servicio de excelente calidad, procurando en todo momento que tengan la mejor
                    experiencia de compra.</p>

                <p>Si necesitas adquirir nuevos lentes medicados, un cambio de monturas o reparar las
                    que ya tienes, te encantará toda la gama de productos y servicios que ofrecemos 
                    en nuestro establecimiento.</p> 
            </div>
        </div>
    </div>
    <div className="row offset-3">
        <h1>¿Qué dicen nuestros clientes?</h1>
        </div>
        <div>
        <CardGroup onMouseOver={changeBorder} onMouseOut={changeBack} className="text-center pr-5 pl-5 mr-5 ml-5">

        
            <Card className=" col-11" >
              
                <CardBody onMouseOver={changeBorder} onMouseOut={changeBack} >
           
                <CardText>Elaboramos tus formulas con la mejor calidad y las mejores marcas.</CardText>
                </CardBody>
                <CardTitle>HOLA</CardTitle>
        
            </Card>
        
       
            <Card className="  col-11" >
               
                <CardBody>
             
                <CardText>Puedes elegir de entre nuestra gran variedad de monturas aquella que se ajuste a tus necesidades y gustos.</CardText>
                
                </CardBody>
       
            </Card>
        
      
            <Card  className=" col-11" >
              
                <CardBody>
            
                <CardText>En Optimax Eyewear prestamos el servicio de reparación y remplazo de piezas para gafas y monturas.</CardText>
                
                </CardBody>
         
            </Card>
        

        </CardGroup>
        </div>
    
  


 
 </body>



    
    );
}

export default Home;