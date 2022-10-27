import React from "react";
import CardsPrincipal from "../../Componentes/Duenio/Cards-Principal";
import "../../assets/stylesheets/Mascotas_Principal.css"
import {Link} from "react-router-dom";
import pataMorada from "../../assets/img/Main/pataMorada.png";

function Duenio_Principal (){
    return(
            <div>
                <div className="Nav-Bar">  <nav>
                    <Link to="/" className="inicio"  type="button" id="button-addon1">Inicio</Link>
                      <h2 className="title">Estoy en Dueños</h2>
                    <header id="conteiner">
                        <pictire>
                            <img src={pataMorada} className="logo"/>
                        </pictire>


                        <nav className="nav">
                            <Link to="/Duenio_Principal" className="opciones" type="button" id="button-addon1">Dueño</Link>
                            <Link to="/Mascotas_Principal" className="opciones"  type="button" id="button-addon1">Mascotas</Link>
                            <Link to="/Citas_Principal" className="opciones"  type="button" id="button-addon1">Citas</Link>
                        </nav>
                    </header>
                </nav>


                </div>

                <CardsPrincipal/>
            </div>
        )
}

export default Duenio_Principal;