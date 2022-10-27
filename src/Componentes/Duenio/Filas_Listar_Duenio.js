import React from "react";



function Filas_Listar({ name, pet, addres,phonnumber,DuenioID }) {
    return (

        <tr>
            <td scope="row">{name}</td>
            <td> {pet} </td>
            <td> {addres} </td>
            <td> {phonnumber} </td>
            <td> {DuenioID} </td>
        </tr>

    );
}



export default Filas_Listar;