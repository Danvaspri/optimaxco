import React from 'react';
import {
    Media,Button
  } from 'reactstrap';

function About(props) {
return(
<body>
    <div className="container">
        <div className="row row-content">
            <div className="row">
                <h1>Nuestra historia</h1>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6 align-self-center">
                    <h1>OPTIMAX</h1>
                    <p>Inició en septiembre del 2005 con la idea de tener un negocio 
                       familiar como apoyo económico.

                    Inicialmente comenzamos con la línea de gafas deportivas.
                    Luego con base a las recomendaciones de los clientes empezamos
                    a buscar capacitaciones y asesorías de proveedores y laboratorios
                    especialistas en productos, calidad de lentes, monturas y lo
                    mejor en trámite de pedidos y venta de fórmulas.Nuestro lema es:</p>
                </div>
                <div className="col-12 col-sm-6">
                    <h1>" Atención personalizada
para cada gusto,
para cada necesidad
y para cada presupuesto. "</h1>


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