import React, { useState, useEffect } from 'react';
import SignIn from './SignIn';
import FormLogin from './Form';
import Constantes from "../../Constants/Constantes";


function Login (props) {

  const { setLoggedInAdmin,  setLoggedInUser, setUser } = props;
  const [ signIn, setSignIn ] = useState(false);
  const [ profile, setProfile ] = useState("user");
  const [ dataLogin, setDataLogin ] = useState({
    user: "",
    password: ""
  });
  const [ dataSign, setDataSign ] = useState({
    Nombre: "",
    ApellidoP: "",
    ApellidoM: "",
    Direccion: "",
    Usuarios: "",
    Password: ""
  });

  const callLogin = async () => {
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
    }
  }

  return (
    <div className="login">
      {
        signIn ? (
          <SignIn setSignIn={setSignIn} setDataSign={setDataSign} dataSign={dataSign} />
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
