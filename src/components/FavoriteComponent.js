import React from 'react';
import { Media, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderMenuItem({ glass, deleteFavorite }) {
    return(
        <Media tag="li">
            <Media left middle>
                <Media object src={glass.image} alt={glass.name} />
            </Media>
            <Media body className="ml-5">
                <Media heading>{glass.name}</Media>
                <p>{glass.description}</p>
                <Button outline color="danger" onClick={() => deleteFavorite(glass._id)}>
                    <span className="fa fa-times"></span>
                </Button>
            </Media>
        </Media>
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

        const favorites = props.favorites.favorites.glass.map((glassId) => {

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