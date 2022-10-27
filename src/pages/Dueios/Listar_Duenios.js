import React, {useEffect, useState} from "react";
import "../../assets/stylesheets/Listar_Mascotas.css";
import {Link} from "react-router-dom";
import Filas_Listar from "../../Componentes/Duenio/Filas_Listar_Duenio";

function Listar_Duenio(){
    const [listar, setListar] = useState([]);


    const obtenerDatos = async ()=>{
        const data = await fetch('http://localhost:18080/Duenios/list');
        const Duenio = await data.json()
        setListar(Duenio);
    }


    useEffect(() => {
        obtenerDatos()
    });
    return(
        <React.Fragment>
            <div className="Nav-Bara">  <nav>
                <Link to="/Duenio_Principal" className="Regreso_List" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Mostrar</h2>
            </nav></div>
            <p class="text-center fs-1">Dueños Agregados Recientemente</p>
            <div className="Table">
                <table className="table" class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">IDmascota</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">IDdueño</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listar.map(Duenio => (

                        <Filas_Listar name={Duenio.nombre} pet={Duenio.idmascota} addres={Duenio.direccion} phonnumber={Duenio.telefono} DuenioID={Duenio.idduenio}/>
                    ))}

                    </tbody>
                </table>

            </div>
        </React.Fragment>
    )
}
export default Listar_Duenio;