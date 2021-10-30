import React, { Fragment, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';


function Table(props) {

    const { users, sendData, openUser, setOpenUser, deleteUserQuestion, data, setData } = props;
    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Cédula</th>
                        <th>Nombre</th>
                        <th>Primer apellido</th>
                        <th>Segundo apellido</th>
                        <th>Dirección</th>
                        <th>Usuario</th>
                        <th>Contraseña</th>
                        <th>Funciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.Cedula}</td>
                                    <td>{item.Nombre}</td>
                                    <td>{item.ApellidoP}</td>
                                    <td>{item.ApellidoM}</td>
                                    <td>{item.Direccion}</td>
                                    <td>{item.Usuarios}</td>
                                    <td className="userPassword">{item.Password}</td>
                                    <td>
                                        <FontAwesomeIcon 
                                            style={{marginLeft: "5px", color:"#8b8b2d", cursor: "pointer"}} 
                                            onClick={()=>{setOpenUser(true); setData(item)}} 
                                            icon={faEdit} />
                                        {/* <FontAwesomeIcon 
                                            style={{marginLeft: "5px", color:"green", cursor: "pointer"}} 
                                            onClick={()=>{setUserSelected({...item, Titulo: item.Nombre_mapa})}} 
                                            icon={faCheckSquare} /> */}
                                        <FontAwesomeIcon 
                                            style={{marginLeft: "5px", color:"red", cursor: "pointer"}} 
                                            onClick={()=>{deleteUserQuestion(item.ID); setData(item)}} 
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
