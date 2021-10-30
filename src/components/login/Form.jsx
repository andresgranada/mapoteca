import React, { Fragment } from 'react';
import { Card, Dropdown, Button, Form } from 'react-bootstrap';
import logo from '../../img/logo2.png';


function FormLogin (props) {

    const { setSignIn, setProfile, setDataLogin, dataLogin, callLogin } = props;

    console.log(dataLogin);

  return (
    <div className="signIn">
        <div className="text-center">
            <img style={{width: "150px"}} src={logo} />
        </div>
        <Form.Group className="mb-3" controlId="user">
            <Form.Label>Usuario</Form.Label>
            <Form.Control onChange={(e)=>{setDataLogin({...dataLogin, user: e.target.value})}} defaultValue={dataLogin.user} type="text" placeholder="Usuario" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control onChange={(e)=>{setDataLogin({...dataLogin, password: e.target.value})}} defaultValue={dataLogin.password} type="password" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group className="mb-3 text-center" controlId="password">
            <select onChange={(e)=>{setProfile(e.target.value)}} name="select">
                <option value="user" selected>Usuario</option>
                <option value="admin">Administrador</option>
            </select>
        </Form.Group>
        <Form.Group className="mb-3" style={{marginTop: "20px", padding: "0 50px"}} controlId="password">
            <Button onClick={()=>{callLogin()}} variant="primary">Entrar</Button>{' '}
            <Button style={{float: "right"}} variant="secondary" onClick={()=>{setSignIn(true)}} >Registrarse</Button>{' '}
        </Form.Group>
    </div>
  );
}

export default FormLogin;