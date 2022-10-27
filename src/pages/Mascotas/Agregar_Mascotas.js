import React, {useState} from "react";
import "../../assets/stylesheets/Agregar_Mascota.css";

import {Link} from "react-router-dom";

function Agregar_Mascotas (){


    const [idduenio, setIdduenio] = useState(0);
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
                "idduenio": idduenio,
                "tipo": tipo,
                "nombre": nombreMascota
            }

        )
    }
    
    const agregar =async () => {
        const data = await fetch("http://localhost:18080/mascotas/add", peticion)
            .then(res => res.json)
            .then((data) => console.log(data))
            .catch((err) => console.error(err))
    }
    
    return(
        <div>
            <div className="Nav-Bara">  <nav>
                <Link to="/Mascotas_Principal" className="Regreso_Add" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Agregar</h2>
            </nav></div>
            <div className="IDdueño mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agregue el ID</label>
                <input type="email" className="add_IDdueño form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setIdduenio(event.target.value)}} placeholder="IDdueño"/>
            </div>
            <div className="IDmascota mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agregue el Tipo</label>
                <input type="email" className="add_IDmascota form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setTipo(event.target.value)}} placeholder="Tipo de la mascota"/>
            </div>
            <br/><br/><br/><br/>
            <div className="Nombre mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agregue el Nombre de la mascota</label>
                <input type="email" className="add_Name form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setNombreMascota(event.target.value)}} placeholder="Nombre"/>

                <button className="Enviar1 btn btn-dark" onClick={agregar} type="button" id="button-addon1">Enviar</button>

            </div>


        </div>
    )
}
    export default Agregar_Mascotas;
