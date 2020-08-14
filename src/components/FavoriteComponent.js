import React from 'react';
import { Card, CardImg,CardBody,CardText, 
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Media} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { FadeTransform} from 'react-animation-components';

function RenderMenuItem({ glass, deleteFavorite }) {
    return(
        <div className="col-4">
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
                <Button outline color="danger" onClick={() => deleteFavorite(glass._id)}>
                    <span className="fa fa-times"></span>
                </Button>
            </CardBody>
        </Card>
        </FadeTransform>
    </div>
    );
}

const Favorites = (props) => {

    if (props.favorites.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.favorites.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.favorites.errMess}</h4>
                </div>
            </div>
        )
    }
    else if (props.favorites.favorites) {

        const favorites = props.favorites.favorites.glasses.map((glassId) => {

            let glass = props.glasses.glasses.filter((glass) => glass._id === glassId)[0];
            return (
                <div key={glass._id} className="col-12 mt-5">
                    <RenderMenuItem glass={glass} deleteFavorite={props.deleteFavorite} />
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>My Favorites</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>My Favorites</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <Media list>
                        {favorites}
                    </Media>
                </div>
            </div>
        );
    }
    else {
        return(
            <div className="container">
                <div className="row">
                    <h4>You have no favorites</h4>
                </div>
            </div>
        )
    }
}

export default Favorites;