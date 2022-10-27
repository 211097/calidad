import React from "react";


function Filas_Listar_Mascota({ Duenioid, Raza, nombre,Mascotaid }) {
    return (

        <tr>            <td scope="row">{Duenioid}</td>
            <td> {Raza} </td>
            <td> {nombre} </td>
            <td> {Mascotaid} </td></tr>

    );
}



export default Filas_Listar_Mascota;