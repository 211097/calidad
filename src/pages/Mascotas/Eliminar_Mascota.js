import React, {useEffect, useState} from "react";
import "../../assets/stylesheets/Eliminar_Mascota.css";
import {Link} from "react-router-dom";



function Eliminar_Mascota(){

    const peticion = {
        mode: 'cors',
        method: 'GET',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
    

    const [idmascota, setIdmascota] = useState(0);
    
    const eliminar = async() => (
        fetch('http://localhost:18080/mascotas/del/'+idmascota)
            .then(res => res.json)
            .then(res => {alert("Se ha eliminado la mascota con el ID:"+idmascota)})
            .catch((err) => console.error(err))
)

    return(
        <React.Fragment>
            <div className="Nav-Bara">  <nav>
                <Link to="/Mascotas_Principal" className="Regreso_Delete" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Eliminar</h2>
            </nav></div>
            <div className="IDdueño_Delete mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agrege el ID</label>
                <input type="email" className="form-control" onChange={(event) => {setIdmascota(event.target.value)}} id="exampleFormControlInput1"
                       placeholder="IDmascota"/>
            </div>
            <div className={"eliminarContededorBtn"}>
                <button className="Eliminar1 btn btn-dark" type="button" id="button-addon1" onClick={eliminar}>Eliminar</button>
            </div>
        </React.Fragment>
    )
}
export default Eliminar_Mascota;
