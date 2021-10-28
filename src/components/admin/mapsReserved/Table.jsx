import React, { Fragment, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import ModalReserve from '../mapsReserve/ModalReserve';


function Table(props) {

    const { reserved } = props;
    const [ openReserve, setOpenReserve ] = useState(false);
    const [ reservedSelected, setReservedSelected ] = useState({});
    return (
        <Fragment>
            <ModalReserve open={openReserve} setOpen={setOpenReserve} mapEdit={reservedSelected} />
            <table>
                <thead>
                    <tr>
                        <th>ID usuario</th>
                        <th>Nombre usuario</th>
                        <th>Nombre mapa</th>
                        <th>Fecha préstamo</th>
                        <th>Fecha devolución</th>
                        <th>Estado</th>
                        <th>Funciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reserved && reserved.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.Clave_Usuario}</td>
                                    <td>{item.Nombre_usuario} {item.Apellido_usuario}</td>
                                    <td>{item.Nombre_mapa}</td>
                                    <td>{item.Fecha_Prestamo}</td>
                                    <td>{item.Fecha_Devolucion}</td>
                                    <td>{item.Estatus}</td>
                                    <td>
                                        <FontAwesomeIcon 
                                            style={{marginLeft: "5px", color:"#8b8b2d", cursor: "pointer"}} 
                                            onClick={()=>{setOpenReserve(true); setReservedSelected({...item, Titulo: item.Nombre_mapa})}} 
                                            icon={faEdit} />
                                        <FontAwesomeIcon 
                                            style={{marginLeft: "5px", color:"green", cursor: "pointer"}} 
                                            onClick={()=>{setReservedSelected({...item, Titulo: item.Nombre_mapa})}} 
                                            icon={faCheckSquare} />
                                        <FontAwesomeIcon 
                                            style={{marginLeft: "5px", color:"red", cursor: "pointer"}} 
                                            onClick={()=>{setReservedSelected({...item, Titulo: item.Nombre_mapa})}} 
                                            icon={faTrashAlt} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Fragment>
    );
}

export default Table;
