import React, { useState, useEffect } from "react";
import { Card, Dropdown, Button, Form } from 'react-bootstrap';
import Constantes from "../Constants/Constantes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { notify_error, notify_succes } from "../Constants/Alerts";
import { ToastContainer, toast } from 'react-toastify';


const ShowProfile = (props) => {

    const [ disable , setDisable ] = useState(true);
    const [ data, setData ] = useState({
        ID: "",
        Nombre: "",
        ApellidoP: "",
        ApellidoM: "",
        Direccion: "",
        Usuarios: "",
        Password: ""
    });

    useEffect(()=>{
        if (localStorage.getItem("loggedInAdmin")) {
            getAdmin();
        }
        if (localStorage.getItem("loggedInUser")) {
            getUser();
        }
    }, [])

    const getUser = async () => {
        const respuesta = await fetch(`${Constantes.RUTA_API}/crud/usuarios/obtener_usuario.php?id=${localStorage.getItem("user")}`);
        setData(await respuesta.json());
    }
    
    const getAdmin = async () => {
        const respuesta = await fetch(`${Constantes.RUTA_API}/crud/usuarios/obtener_admin.php?id=${localStorage.getItem("user")}`);
        setData(await respuesta.json());
    }
    
    const updateUser = async () => {
        const respuesta = await fetch(`${Constantes.RUTA_API}/crud/usuarios/actualizar_usuario.php`, {
            method: "PUT",
            body: JSON.stringify(data),
        });
        const exitoso = await respuesta.json();

        if (exitoso) {
            setDisable(true);
            notify_succes("El usuario se actualiza correctamente");
        }
    }
    
    const updateAdmin = async () => {
        const respuesta = await fetch(`${Constantes.RUTA_API}/crud/usuarios/actualizar_admin.php`, {
            method: "PUT",
            body: JSON.stringify(data),
        });
        const exitoso = await respuesta.json();

        if (exitoso) {
            setDisable(true);
            notify_succes("Los datos son actualizados correctamente");
        }
    }

    return (
        <div className="showProfile">
            <ToastContainer />
            <div className="profileTitle">
                <h3 style={{display: "inline-block"}}>Perfil</h3>
                <FontAwesomeIcon 
                    style={{marginLeft: "15px", cursor: "pointer"}} 
                    onClick={()=>{setDisable(false)}} 
                    icon={faEdit} 
                />
            </div>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control readOnly={disable} onChange={(e)=>{setData({...data, Nombre: e.target.value})}} defaultValue={data.Nombre} type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Primer apellido</Form.Label>
                <Form.Control readOnly={disable} onChange={(e)=>{setData({...data, ApellidoP: e.target.value})}} defaultValue={data.ApellidoP} type="text" placeholder="Primer apellido" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName2">
                <Form.Label>Segundo apellido</Form.Label>
                <Form.Control readOnly={disable} onChange={(e)=>{setData({...data, ApellidoM: e.target.value})}} defaultValue={data.ApellidoM} type="text" placeholder="Segundo apellido" />
            </Form.Group>
            {
                !localStorage.getItem("loggedInAdmin") && (
                    <Form.Group className="mb-3" controlId="address">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control readOnly={disable} onChange={(e)=>{setData({...data, Direccion: e.target.value})}} defaultValue={data.Direccion} type="text" placeholder="Dirección" />
                    </Form.Group>
                )
            }
            <Form.Group className="mb-3" controlId="user">
                <Form.Label>Usuario</Form.Label>
                <Form.Control readOnly={disable} onChange={(e)=>{setData({...data, Usuarios: e.target.value})}} defaultValue={data.Usuarios} type="text" placeholder="user" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control readOnly={disable} onChange={(e)=>{setData({...data, Password: e.target.value})}} defaultValue={data.Password} type="password" placeholder="Contraseña" />
            </Form.Group>
            {
                !disable && (
                    <div className="buttons mb-3">
                        <Button style={{float: "left"}} onClick={localStorage.getItem("loggedInUser") ? updateUser : updateAdmin} variant="primary">Actualizar</Button>{' '}
                        <Button style={{float: "right"}} onClick={()=> {setDisable(true)}} variant="secondary">Cancelar</Button>{' '}
                    </div>
                )
            }
        </div>
    )
}

export default ShowProfile;