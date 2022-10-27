import React from "react";
import pataMorada from "../assets/img/Main/pataMorada.png"
import "../assets/stylesheets/Principal.css";
import {Link} from "react-router-dom";

function principal(){
    return(
        <div>
            <header id="conteiner">
                <img src={pataMorada} className="logo"/>

                <nav className="nav">
                    <Link to="/Duenio_Principal" className="opciones" type="button" id="button-addon1">Dueño</Link>
                    <Link to="/Mascotas_Principal" className="opciones"  type="button" id="button-addon1">Mascotas</Link>
                    <Link to="/Citas_Principal" className="opciones"  type="button" id="button-addon1">Citas</Link>
                </nav>
            </header>

            <div className="cover-container">
                <h1>Bienvenidos!</h1>
            </div>
        </div>
    )
}
export default principal;