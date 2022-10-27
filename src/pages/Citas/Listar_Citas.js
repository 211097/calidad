import React, {useEffect, useState} from "react";
import "../../assets/stylesheets/Listar_Mascotas.css";
import {Link} from "react-router-dom";
import Filas_Listar from "../../Componentes/Citas/Filas_Listar_Citas";

function Listar_Duenio(){
    const [listar, setListar] = useState([]);


    const obtenerDatos = async ()=>{
        const data = await fetch('http://localhost:18080/citas/list');
        const Citas = await data.json()
        setListar(Citas);
    }


    useEffect(() => {
        obtenerDatos()
    });
    return(
        <React.Fragment>
            <div className="Nav-Bara">  <nav>
                <Link to="/Citas_Principal" className="Regreso_List" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Mostrar</h2>
            </nav></div>
            <p class="text-center fs-1">Citas Agregadas Recientemente</p>
            <div className="Table">
                <table className="table" class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Citas ID</th>
                        <th scope="col">Tipo de Servicio</th>
                        <th scope="col">Motivo de Cita</th>
                        <th scope="col">ID Medicamento</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listar.map(Cita => (

                        <Filas_Listar Fecha={Cita.fechas} cita={Cita.idcitas} servicio={Cita.tipoServicio} Motivo={Cita.motivoCita} medicamentoID={Cita.idmedicamento}/>
                    ))}

                    </tbody>
                </table>

            </div>
        </React.Fragment>
    )
}
export default Listar_Duenio;