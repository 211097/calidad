import React, {useState} from "react";
import "../../assets/stylesheets/Eliminar_Mascota.css";
import {Link} from "react-router-dom";


function Eliminar_Duenio(){

    const [idduenio, setIdduenio] = useState(0);

    const eliminar = async() => (
        fetch('http://localhost:18080/Duenios/del/'+idduenio)
            .then(res => res.json)
            .then(res => {alert("Se ha eliminado el Dueño con el ID:"+idduenio)})
            .catch((err) => console.error(err))
    )


    return(
        <React.Fragment>
            <div className="Nav-Bara">  <nav>
                <Link to="/Duenio_Principal" className="Regreso_Delete" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Eliminar</h2>
            </nav></div>
            <div className="IDdueño_Delete mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agrege el ID</label>
                <input type="email" className="form-control" onChange={(event) => {setIdduenio(event.target.value)}} id="exampleFormControlInput1"
                       placeholder="IDdueño"/>
            </div>
            <div className={"eliminarContededorBtn"}>
                <button className="Eliminar1 btn btn-dark" type="button" onClick={eliminar} id="button-addon1">Eliminar</button>
            </div>

        </React.Fragment>
    )
}
export default Eliminar_Duenio;