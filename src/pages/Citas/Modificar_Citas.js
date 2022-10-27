import React, {useState} from "react";
import "../../assets/stylesheets/Modificar_Mascotas.css";

import {Link} from "react-router-dom";

function Modificar_Citas (){

    const [idcitas, setIdcitas] = useState(0);
    const [idmedicamento, setIdmedicamento] = useState(0);
    const [fechas, setFechas] = useState('');
    const [motivocita, setMotivocita] = useState('');
    const [tipoServicio, setTipoServicio] = useState('')

    const peticion = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(

            {
                "idcitas": idcitas,
                "fechas": fechas,
                "tipoServicio": tipoServicio,
                "motivoCita": motivocita,
                "idmedicamento": idmedicamento
            }

        )
    }

    const modificar =async () => {
        const data = await fetch("http://localhost:18080/citas/mod", peticion)
            .then(res => res.json)
            .then((data) => console.log(data))
            .catch((err) => console.error(err))
    }


    return(
        <div>
            <div className="Nav-Bara">  <nav>
                <Link to="/Citas_Principal" className="Regreso_Add" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Modificar</h2>
            </nav></div>
            <div className="NombreDueño1 mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">ID Citas</label>
                <input type="email" className="add_IDdueño form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setIdcitas(event.target.value)}}  placeholder="Citas ID"/>
            </div>
            <div className="Direccion mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Fechas</label>
                <input type="email" className="add_IDmascota form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setFechas(event.target.value)}}  placeholder="2/1/2022"/>
            </div>
            <div className="NumTelefoico mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">ID Medicamento</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setIdmedicamento(event.target.value)}} placeholder="023123"/>
            </div>
            <div className="IDMascota mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Tipo de Servicio</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setTipoServicio(event.target.value)}} placeholder="Corta Uñas"/>
            </div>
            <div className="IDdueño3 mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Motivo Cita</label>
                <input type="email" className="add_IDdueño form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setMotivocita(event.target.value)}} placeholder="lele pancha"/>

                <button className="Enviar1 btn btn-dark" onClick={modificar} type="button" id="button-addon1">Enviar</button>

            </div>


        </div>
    )
}
export default Modificar_Citas;