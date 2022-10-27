import React from "react";

import "../../assets/stylesheets/Card.css";
import {Link} from "react-router-dom";

function Card({  title, Boton,Direccion }) {
    return (
        <div className="Card-Complete  ">
        <div className="card text-center  bg-dark animate__animated animate__fadeInUp">

            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <div>
                    <Link to={Direccion} className="btn btn-secondary">{Boton}</Link>
                </div>

            </div>
        </div>
        </div>
    );
}



export default Card;
