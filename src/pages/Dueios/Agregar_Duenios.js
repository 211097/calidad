import React, {useState} from "react";
import "../../assets/stylesheets/Agregar_Mascota.css";

import {Link} from "react-router-dom";

function Agregar_Duenio (){

    const [idmascota, setIdmascota] = useState(0);
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState(0)

    const peticion = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(

            {
                "nombre": nombre,
                "direccion" : direccion,
                "telefono": telefono,
                "idmascota" : idmascota
            }

        )
    }

    const agregar =async () => {
        const data = await fetch("http://localhost:18080/Duenios/add", peticion)
            .then(res => res.json)
            .then((data) => console.log(data))
            .catch((err) => console.error(err))
    }


    return(
        <div>
            <div className="Nav-Bara">  <nav>
                <Link to="/Duenio_Principal" className="Regreso_Add" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Agregar</h2>
            </nav></div>
            <div className="NombreDueño1 mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agregue el nombre</label>
                <input type="email" className="add_IDdueño form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setNombre(event.target.value)}} placeholder="Nombre del Dueño"/>
            </div>
            <div className="Direccion mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agrege la Direccion</label>
                <input type="email" className="add_IDmascota form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setDireccion(event.target.value)}} placeholder="Direccion"/>
            </div>
            <div className="NumTelefoico mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Numero Telefonico</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setTelefono(event.target.value)}} placeholder="Numero Telefonico"/>
            </div>
            <div className="IDMascota mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agregue el ID de la mascota</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setIdmascota(event.target.value)}} placeholder="IDmascota"/>
            </div>
            <div className="IDdueño3 mb-3">

                <button className="Enviar1 btn btn-dark" type="button" onClick={agregar} id="button-addon1">Enviar</button>

            </div>


        </div>
    )
}
    export default Agregar_Duenio;