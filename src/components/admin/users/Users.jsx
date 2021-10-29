import React, { Fragment, useState, useEffect } from 'react';
import Constantes from "../../../Constants/Constantes";
import Table from "./Table";
import ModalFunction from "../ModalFunction";
import UpdateUser from "./UpdateUser";


function Users(props) {

  const [ users, setUsers ] = useState([]);
  const [ openUser, setOpenUser ] = useState(false);
  const [ titleModalFunction, setTitleModalFunction ] = useState("");
  const [ openModalFunction, setOpenModalFunction ] = useState(false);
  const [ aceptModalFunction, setAceptModalFunction ] = useState(()=>{});

  const [ data, setData ] = useState({
    Nombre: "",
    ApellidoP: "",
    ApellidoM: "",
    Direccion: "",
    Usuarios: "",
    Password: ""
  });


  useEffect(()=>{
    getUsers();
  }, [])

  const getUsers = async () => {
      const respuesta = await fetch(`${Constantes.RUTA_API}/crud/usuarios/obtener_usuarios.php`);
      setUsers(await respuesta.json());
  }

  const deleteUserQuestion = (id) => {
    if (id) {
      setTitleModalFunction("¿Estás seguro de eliminar el usuario?");
      setOpenModalFunction(true);
      setAceptModalFunction(() => () => deleteUser(id));
    }
  }

  const deleteUser = async (id) => {
    const respuesta = await fetch(`${Constantes.RUTA_API}/crud/usuarios/eliminar_usuario.php?id=${id}`);
    const ok = await respuesta.json();
    if (ok) {
      getUsers();
      setOpenModalFunction(false);
    }
}

  const actualizarUsuario = async () => {
    if (data) {
      const respuesta = await fetch(`${Constantes.RUTA_API}/crud/usuarios/actualizar_usuario.php`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
      const exitoso = await respuesta.json();
  
      if (exitoso) {
        getUsers();
        setOpenUser(false);
        setOpenModalFunction(false);
      }
    }
  }

  return (
    <div className="mapsReserved">
        <UpdateUser setData={setData} data={data} open={openUser} setOpen={setOpenUser} actualizar={actualizarUsuario} />
        <ModalFunction 
            title={titleModalFunction} 
            open={openModalFunction} 
            acept={aceptModalFunction} 
            setOpen={setOpenModalFunction} 
        />
        <Table 
            users={users} 
            openUser={openUser} 
            setOpenUser={setOpenUser}
            deleteUserQuestion={deleteUserQuestion}
            setData={setData} 
            data={data}
        />
    </div>
  );
}

export default Users;