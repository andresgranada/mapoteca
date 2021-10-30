import React, { Fragment, useState, useEffect } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import { Button, Form } from 'react-bootstrap';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
  //   border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const updateUser = (props) => {

    const { actualizar, open, setOpen, data, setData } = props;

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div id="modal-modal-description" sx={{ mt: 2 }} style={{textAlign: "center"}}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Cédula</Form.Label>
                    <Form.Control onChange={(e)=>{setData({...data, Cedula: e.target.value})}} defaultValue={data.Cedula} type="text" placeholder="Cédula" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control onChange={(e)=>{setData({...data, Nombre: e.target.value})}} defaultValue={data.Nombre} type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Primer apellido</Form.Label>
                    <Form.Control onChange={(e)=>{setData({...data, ApellidoP: e.target.value})}} defaultValue={data.ApellidoP} type="text" placeholder="Primer apellido" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName2">
                    <Form.Label>Segundo apellido</Form.Label>
                    <Form.Control onChange={(e)=>{setData({...data, ApellidoM: e.target.value})}} defaultValue={data.ApellidoM} type="text" placeholder="Segundo apellido" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control onChange={(e)=>{setData({...data, Direccion: e.target.value})}} defaultValue={data.Direccion} type="text" placeholder="Dirección" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="user">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control onChange={(e)=>{setData({...data, Usuarios: e.target.value})}} defaultValue={data.Usuarios} type="text" placeholder="user" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control onChange={(e)=>{setData({...data, Password: e.target.value})}} defaultValue={data.Password} type="password" placeholder="Contraseña" />
                </Form.Group>
                    <Button onClick={()=>{actualizar()}} variant="danger">Aceptar</Button>{' '}
                    <Button onClick={handleClose} variant="primary">Cancelar</Button>{' '}
                </div>
            </Box>
        </Modal>
    )
}

export default updateUser;
