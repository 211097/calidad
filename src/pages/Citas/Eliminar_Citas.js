import React, {useState} from "react";
import "../../assets/stylesheets/Eliminar_Mascota.css";
import {Link} from "react-router-dom";


function Eliminar_Citas(){

    const [idcita, setIdcita] = useState(0);

    const eliminar = async() => (
        fetch('http://localhost:18080/citas/del/'+idcita)
            .then(res => res.json)
            .then(res => {alert("Se ha eliminado la Cita con el ID:"+idcita)})
            .catch((err) => console.error(err))
    )


    return(
        <React.Fragment>
            <div className="Nav-Bara">  <nav>
                <Link to="/Citas_Principal" className="Regreso_Delete" class="btn btn-outline-dark text-white" type="button" id="button-addon1">Regresar</Link>
                <h2 className="title">Eliminar</h2>
            </nav></div>
            <div className="IDdueño_Delete mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Agrege el ID</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setIdcita(event.target.value)}} placeholder="ID Cita"/>
            </div>
            <div className={"eliminarContededorBtn"}>
                <button className="Eliminar1 btn btn-dark" onClick={eliminar} type="button" id="button-addon1">Eliminar</button>
            </div>

        </React.Fragment>
    )
}
export default Eliminar_Citas;