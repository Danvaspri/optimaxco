import React from 'react';
import {
    Media,Button
  } from 'reactstrap';


function Services(props) {
return(
<body>
    <div className="container">
        <div className="row row-content text-center">
            <div className="col-12">       
                    <h1> Servicios</h1>
            </div>
            <div className="row">    
                <img src= 'assets/images/twoGlasses.jpg' className="col-12 col-md-6" alt="Gafas de optimax" />
                <div className="pt-5 ml-md-auto col-12 align-self-center col-md-5">
                    <h4 >Venta de monturas</h4>
                    <p >Si necesitas nuevas monturas puedes elegir entre 
                        gran variedad de marcas y estilos. En caso de que se
                        te haga difícil escoger
                        entre tantas posibilidades, ¡ven a nuestro local y te
                        asesoraremos para que quedes satisfecho/a!</p>
                    <Button>Mira nuestros diseños</Button>
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
                    <img src='assets/images/lentes.jpg' className="col-12 col-md-6" alt="Lentes medicados" />    
            </div>
            <div className="row">
            <img src='assets/images/SquareGlasses.jpg' className="col-12 col-md-6" alt="gafas de muestra" />  
                    <div className="pt-5 ml-md-auto col-12 align-self-center col-md-5">
                        <h4 >Servicio técnico</h4>
                        <p >Prestamos servicio de reparación y remplazo de piezas para gafas y monturas.</p>
                    </div>
                     
            </div>
            </div>
        
        </div>
        
        
  
</body>
);
}
export default Services;