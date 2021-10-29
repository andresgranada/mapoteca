import React, { Fragment } from 'react';
import { Card, Dropdown, Button, Form } from 'react-bootstrap';


function SignIn (props) {
    const { setSignIn, dataSign, setDataSign, registerUser } = props;

  return (
    <div className="signIn">
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control onChange={(e)=>{setDataSign({...dataSign, Nombre: e.target.value})}} defaultValue={dataSign.Nombre} type="text" placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Primer apellido</Form.Label>
            <Form.Control onChange={(e)=>{setDataSign({...dataSign, ApellidoP: e.target.value})}} defaultValue={dataSign.ApellidoP} type="text" placeholder="Primer apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName2">
            <Form.Label>Segundo apellido</Form.Label>
            <Form.Control onChange={(e)=>{setDataSign({...dataSign, ApellidoM: e.target.value})}} defaultValue={dataSign.ApellidoM} type="text" placeholder="Segundo apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
            <Form.Label>Dirección</Form.Label>
            <Form.Control onChange={(e)=>{setDataSign({...dataSign, Direccion: e.target.value})}} defaultValue={dataSign.Direccion} type="text" placeholder="Dirección" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="user">
            <Form.Label>Usuario</Form.Label>
            <Form.Control onChange={(e)=>{setDataSign({...dataSign, Usuarios: e.target.value})}} defaultValue={dataSign.Usuarios} type="text" placeholder="user" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control onChange={(e)=>{setDataSign({...dataSign, Password: e.target.value})}} defaultValue={dataSign.Password} type="password" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="buttons" style={{marginTop: "20px", padding: "0 50px"}}>
            <Button onClick={registerUser} variant="primary">Registrarse</Button>{' '}
            <Button style={{float: "right"}} onClick={()=>{setSignIn(false)}} variant="secondary">Cancelar</Button>{' '}
        </Form.Group>
    </div>
  );
}

export default SignIn;