import React, {useEffect, useState} from "react";
import "../../assets/stylesheets/Modificar_Mascotas.css";

import {Link} from "react-router-dom";

function Modificar_mascotas (){

    const [idduenio, setIdduenio] = useState(0);
    const [idmascota, setIdmascota] = useState(0);
    const [nombreMascota, setNombreMascota] = useState('');
    const [tipo, setTipo] = useState('');

    const peticion = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(

            {
                "idmascota": idmascota,
                "idduenio": idduenio,
                "tipo": tipo,
                "nombre": nombreMascota
            }

        )
    }

    const modificar =async () => {
        const data = await fetch("http://localhost:18080/mascotas/mod", peticion)
            .then(res => res.json)
            .then((data) => console.log(data))
            .catch((err) => console.error(err))
    }


    return(
        <div>
            <div className="Nav-Bara">  <nav>
                <Link to="/Mascotas_Principal" className="Regreso_Mod" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Modificar</h2>
            </nav></div>
            <div className="IDdueño2 mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agregue el ID</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setIdduenio(event.target.value)}} placeholder="IDdueño"/>
            </div>
            <div className="IDmascota2 mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agregue el ID</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setIdmascota(event.target.value)}}  placeholder="IDmascota"/>
            </div>
            <div className="Tipo2 mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agregue el Tipo</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setTipo(event.target.value)}} placeholder="Tipo de la mascota"/>
            </div>
            <div className="Nombre2 mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agregue el Nombre de la mascota</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setNombreMascota(event.target.value)}} placeholder="Nombre"/>

                <button className="Enviar2 btn btn-dark" onClick={modificar} type="button" id="button-addon1">Enviar</button>
            </div>


        </div>
    )
}
export default Modificar_mascotas;
