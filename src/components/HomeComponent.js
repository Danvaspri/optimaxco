import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardGroup, CardFooter,  CardDeck
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
 
        <CardDeck>
            <Card  onMouseOver={changeBorder} onMouseLeave={changeBack}>
                <CardBody className="text-center" >
                <span className="fa fa-tags"></span>
                <CardTitle>Venta de lentes medicados</CardTitle>
                <CardText>Elaboramos tus formulas con la mejor calidad y las mejores marcas.</CardText>
                </CardBody>
                <Button className="mb-5 ml-5 mr-5">CONOCE MÁS</Button>
            </Card>

       
            <Card  onMouseOver={changeBorder} onMouseLeave={changeBack}>
                <CardBody  className="text-center">
                <span className="fa fa-exchange"></span>
                <CardTitle>Cambio de monturas</CardTitle>
                <CardText>Puedes elegir de entre nuestra gran variedad de 
                    monturas aquella que se ajuste a tus
                     necesidades y gustos.</CardText>
                </CardBody>
              <Button className="mb-5 ml-5 mr-5">CONOCE MÁS</Button>
            </Card>
       
            <Card  onMouseOver={changeBorder} onMouseLeave={changeBack} >
              
                <CardBody className="text-center">
               <span className="fa fa-wrench"></span>
                <CardTitle>Servicio Técnico</CardTitle>
                <CardText>En Optimax Eyewear prestamos el servicio de reparación y remplazo de piezas para gafas y monturas.</CardText>
                
                </CardBody>
                <Button className="mb-5 ml-5 mr-5">CONOCE MÁS</Button>
            </Card>
            </CardDeck>
          
        

      
    </div>
           
    <div className="row row-content ">
        <div className="row col-12">
            <h1>Destacados</h1>
        </div>
        <Button className="btn btn-sm mt-5 mb-5 ml-auto  pt-0 pb-0 col-xs-12 col-md-2 ">Ver todo</Button>
          
    </div>
    </div>
    <div className="row row-content bgGreen">
        
        <div className=" offset-1 col-10 offset-md-5 col-md-6  ">
          
                <h1  >Sobre nosotros</h1> 
                <p >Somos una óptica con más de 15 años de experiencia en el mercado. 
                    Nuestro objetivo es brindar una asesoría completa y personalizada a 
                    nuestros clientes. Ofrecemos soluciones oportunas a las necesidades y 
                    requerimientos de los usuarios con un manejo de precios accesibles. Prometemos
                    un servicio de excelente calidad, procurando en todo momento que tengan la mejor
                    experiencia de compra.</p>

                <p >Si necesitas adquirir nuevos lentes medicados, un cambio de monturas o reparar las
                    que ya tienes, te encantará toda la gama de productos y servicios que ofrecemos 
                    en nuestro establecimiento.</p> 
                    
        </div>
    </div>
    <div className="container text-center pt-5">
        <tittle >¿Qué dicen nuestros clientes?</tittle>
        
        <div className="row row-content">
       
       <CardDeck>
       
            <Card >
              
                <CardBody onMouseOver={changeBorder} onMouseOut={changeBack} >
                    <CardText>"La atención que recibí en Optimax fue muy buena, actualmente
                        llevo 8 meses con las monturas que compré, resultaron de excelente calidad y
                        no he tenido problema alguno. Mi familia y amigos también han comprado ahí y
                        no han presentado ningún inconveniente. Totalmente recomendado."
                    </CardText>
                </CardBody>
                <CardTitle><h5>Sebastián Benavides</h5></CardTitle>
                <CardSubtitle>Cliente frecuente</CardSubtitle>
        
            </Card>
   
            <Card  >
               
                <CardBody>
             
                <CardText>"Recomiendo a Optimax por su excelente servicio, precisión en la
                     formulación de los lentes y la calidad de las monturas ha sido súper buena, 
                     duradera y resistente. Hemos comprado ahí para varios miembros de mi familia y 
                     a todos nos ha ido bien."</CardText>
                
                </CardBody>
                <CardTitle><h5>Katherine Bravo</h5></CardTitle>
                <CardSubtitle>Cliente frecuente</CardSubtitle>
       
            </Card>

            <Card  >
              
                <CardBody>
            
                <CardText>El tiempo entre cuando haces el pedido y están listas 
                    las gafas es muy rápido, llevo casi un año y medio con ellas 
                    y hasta ahora no he tenido problemas, muy buena calidad y gran
                     variedad de monturas, los recomiendo.</CardText>
                </CardBody>
                <CardTitle><h5>Juan Pablo Vargas</h5> </CardTitle>
                <CardSubtitle>Cliente frecuente</CardSubtitle>
         
            </Card>
        
            </CardDeck>

            </div>
        </div>
        <div className="bgDark">
            <h1>¿Te interesan nuestros servicios?</h1>
            <p>Te invitamos a conocer más sobre nosotros y lo que hacemos en nuestra óptica.</p>
      
            <Button>CONOCE MÁS</Button>
        </div>

 </body>   
    );
}

export default Home;