import React from 'react';
import {
    Media,Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,  CardGroup, CardFooter,  CardDeck
  } from 'reactstrap';

 
function About(props) {
return(
<body>
    <div className="container">
    
                   
                 
              
        
            <div className="row">
                <div className="offset-2 col-8 offset-md-0 col-sm-6 align-self-center">
                    <h1>OPTIMAX</h1>
                    <p>Inició en septiembre del 2005 con la idea de tener un negocio 
                       familiar como apoyo económico.

                    Inicialmente comenzamos con la línea de gafas deportivas.
                    Luego con base a las recomendaciones de los clientes empezamos
                    a buscar capacitaciones y asesorías de proveedores y laboratorios
                    especialistas en productos, calidad de lentes, monturas y lo
                    mejor en trámite de pedidos y venta de fórmulas.</p><p>Nuestro lema es:</p>
                </div>
                <div className="col-12 col-sm-6">
                    <h1>" Atención personalizada
para cada gusto,
para cada necesidad
y para cada presupuesto. "</h1>


                </div>
               
            </div>
        
        
        </div>
   
    
        
  
    <div className=" banner">
    <img src='https://firebasestorage.googleapis.com/v0/b/optimaxserver-a6107.appspot.com/o/images%2FRoundGlasses.JPG?alt=media&token=0ed973f0-6396-4572-887b-99ff80b6719c' alt="round glasses" />
    <div className="content align-self-center">
        <div className="row  ">
            <div className="  textwhite ">
            <CardDeck className="col-12 ">
            <Card className="d-none d-sm-block" >
                <CardBody className="text-center" >
                <span className="fa fa-check"></span>
                <CardTitle >Experiencia</CardTitle>
                <CardText className="d-none d-md-block"  >Tenemos más de 15 años de experiencia
                     para ofrecerte servicios de la mejor calidad
                      y cumplir tus expectativas.</CardText>
                </CardBody>
            </Card>
            <Card >
                <CardBody  className="text-center">
                <span className="fa fa-check"></span>

                <CardTitle className="col-12 ">Trato al cliente</CardTitle>
                <CardText className="d-none d-md-block">Uno de los pilares fundamentales de nuestra empresa
                     es el trato adecuado a nuestros clientes y así establecer
                      confianza y respeto.</CardText>
                </CardBody>
            </Card>
            <Card   >
                <CardBody className="text-center">
                <span className="fa fa-check"></span>
                <CardTitle className="col-12 ">Excelente calidad</CardTitle>
                <CardText className="d-none d-md-block">Creemos que vale la pena invertir
                     en tus ojos, por eso manejamos las mejores
                      marcas de lentes y monturas.</CardText>
                </CardBody>
            </Card>
            </CardDeck>
            </div>
        </div>
    </div>
    </div>
    <div className="container">
        <div className="row row-content text-center">
            <div className="col-12">       
                    <h1> Servicios</h1>
            </div>
            <div className="row">    
                <img src= 'https://firebasestorage.googleapis.com/v0/b/optimaxserver-a6107.appspot.com/o/images%2FtwoGlasses.jpg?alt=media&token=d3ba0b32-3263-4da7-adc1-803f2b7acca3' className="col-12 col-md-6" alt="Gafas de optimax" />
                <div className="pt-5 ml-md-auto col-12 align-self-center col-md-5">
                    <h4 >Venta de monturas</h4>
                    <p >Si necesitas nuevas monturas puedes elegir entre 
                        gran variedad de marcas y estilos. En caso de que se
                        te haga difícil escoger
                        entre tantas posibilidades, ¡ven a nuestro local y te
                        asesoraremos para que quedes satisfecho/a!</p>
                    <Button href="/glasses">Mira nuestros diseños</Button>
                </div>
            </div>
            <div className="row">
                    <div className="pt-5 ml-md-auto col-12 align-self-center col-md-5">
                        <h4 >Venta de lentes medicados</h4>
                        <p >Elaboramos tus fórmulas con la mejor calidad y las
                             mejores marcas en lentes monofocales, bifocales, 
                             progresivos, lentes para descanso fotocromáticos,
                              y transitions.
                            También manejamos lentes progresivos y con bloqueador azul.</p>
                    </div>
                    <img src='https://firebasestorage.googleapis.com/v0/b/optimaxserver-a6107.appspot.com/o/images%2Flentes.jpg?alt=media&token=9cc3d5b9-fe58-4b0f-9572-bb53aa8a56e0' className="col-12 col-md-6" alt="Lentes medicados" />    
            </div>
            <div className="row">
            <img src='https://firebasestorage.googleapis.com/v0/b/optimaxserver-a6107.appspot.com/o/images%2FSquareGlasses.jpg?alt=media&token=b148fa5b-818d-47be-a9f7-d77b6a62c728' className="col-12 col-md-6" alt="gafas de muestra" />  
                    <div className="pt-5 ml-md-auto col-12 align-self-center col-md-5">
                        <h4 >Servicio técnico</h4>
                        <p >Prestamos servicio de reparación y remplazo de piezas para gafas y monturas.</p>
                    </div>
                     
            </div>
            </div>
        
        </div>
        
    <div className="row row-content bgGreen">
        <div className="row">

            <div className="col-12 col-md-6 offset-md-3 align-self-center text-center textwhite">
                <h1>¿Por qué somos diferentes?</h1>
                <p>Nos importa mucho que quedes a gusto con la compra que realices,
                pues creemos que invertirle a tus ojos es muy importante, más 
                que cualquier otra cosa, por eso te brindamos una asesoría
                personalizada para que elijas una montura teniendo en cuenta 
                tus gustos y características físicas.</p>
            </div>
        </div>
    </div> 
    
  
</body>
);
}
export default About;
