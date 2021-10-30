import React, { useState, useEffect } from 'react';
import SignIn from './SignIn';
import FormLogin from './Form';
import Constantes from "../../Constants/Constantes";
import { notify_error, notify_succes } from "../../Constants/Alerts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login (props) {

  const { setLoggedInAdmin,  setLoggedInUser, setUser } = props;
  const [ signIn, setSignIn ] = useState(false);
  const [ profile, setProfile ] = useState("user");
  const [ dataLogin, setDataLogin ] = useState({
    user: "",
    password: ""
  });
  const [ dataSign, setDataSign ] = useState({
    Cedula:"",
    Nombre: "",
    ApellidoP: "",
    ApellidoM: "",
    Direccion: "",
    Usuarios: "",
    Password: ""
  });

  const callLogin = async () => {

    if (!dataLogin.user || !dataLogin.password) {
      notify_error("Favor completar todos los campos");
      return;
    }

    if (profile == "user") {
      callUser();

      return;
    }

    callAdmin();
  }

  useEffect(() => {
    if (localStorage.getItem("loggedInAdmin")) {
      setLoggedInAdmin(true);
    }

    if (localStorage.getItem("loggedInUser")) {
      setLoggedInUser(true);
    }
  }, [])

  const callAdmin = async () => {
    const respuesta = await fetch(`${Constantes.RUTA_API}/crud/usuarios/loginAdmin.php`, {
      method: "POST",
      body: JSON.stringify(dataLogin),
    });
    const exitoso = await respuesta.json();

    if (exitoso) {
      setUser(exitoso.ID);
      setLoggedInAdmin(true);
      setLoggedInUser(false);
      localStorage.setItem("loggedInAdmin", true);
      localStorage.setItem("user", exitoso.ID);
    } else {
      notify_error("Usuario o contraseña incorrectos");
      return;
    }
  }
  
  const callUser = async () => {
    const respuesta = await fetch(`${Constantes.RUTA_API}/crud/usuarios/loginUsuario.php`, {
      method: "POST",
      body: JSON.stringify(dataLogin),
    });
    const exitoso = await respuesta.json();

    if (exitoso) {
      setUser(exitoso.ID);
      setLoggedInAdmin(false);
      setLoggedInUser(true);
      localStorage.setItem("loggedInUser", true);
      localStorage.setItem("user", exitoso.ID);
    } else {
      notify_error("Usuario o contraseña incorrectos");
      return;
    }
  }
  
  const registerUser = async () => {
    const respuesta = await fetch(`${Constantes.RUTA_API}/crud/usuarios/CrearUsuario.php`, {
      method: "POST",
      body: JSON.stringify(dataSign),
    });
    const exitoso = await respuesta.json();

    if (exitoso) {
      setSignIn(false);
      notify_succes("El usuario se crea correctamente");
    }
  }

  return (
    <div className="login">
      <ToastContainer />
      {
        signIn ? (
          <SignIn 
            setSignIn={setSignIn} 
            setDataSign={setDataSign} 
            dataSign={dataSign}
            registerUser={registerUser}
          />
        ) : (
          <FormLogin 
            setSignIn={setSignIn} 
            setProfile={setProfile}
            dataLogin={dataLogin}
            setDataLogin={setDataLogin}
            callLogin={callLogin}
          />
        )
      }
    </div>
  );
}

export default Login;
