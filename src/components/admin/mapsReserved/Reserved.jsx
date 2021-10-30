import React, { Fragment, useState, useEffect } from 'react';
import Constantes from "../../../Constants/Constantes";
import Table from "./Table";
import ModalFunction from "../ModalFunction";
import { notify_error, notify_succes } from "../../../Constants/Alerts";
import { ToastContainer, toast } from 'react-toastify';


function Reserved(props) {

  const { filtro } = props;

  const [ reserved, setReserved ] = useState([]);
  const [ openReserve, setOpenReserve ] = useState(false);
  const [ titleModalFunction, setTitleModalFunction ] = useState("");
  const [ openModalFunction, setOpenModalFunction ] = useState(false);
  const [ aceptModalFunction, setAceptModalFunction ] = useState(()=>{});


  useEffect(()=>{
    getReserved();
  }, [])
  
  useEffect(()=>{
    if (reserved.length > 0 && reserved.filter(item => item.Estatus !== "A tiempo").length > 0) {
      setReserved(reserved.filter(item => item.Estatus == "A tiempo").map(element => element));
    }
  }, [reserved])

  const getReserved = async () => {
      const respuesta = await fetch(`${Constantes.RUTA_API}/crud/reservas/obtener_reservas.php`);
      setReserved(await respuesta.json());
  }

  useEffect(()=>{
    if (filtro) {
      getUsersFiltro();
    }
  }, [filtro])

  const getUsersFiltro = async () => {
    const respuesta = await fetch(`${Constantes.RUTA_API}/crud/reservas/obtener_reservas.php?titulo=${filtro.tipo}&nombre=${filtro.nombre}`);
    setReserved(await respuesta.json());
  } 

  const sendData = (data) => {
    if (data) {
      setTitleModalFunction("¿Estás seguro de actualizar la reserva?");
      setOpenModalFunction(true);
      setAceptModalFunction(() => () => actualizarReserva(data));
    }
  }
  
  const entregadoPregunta = (data) => {
    if (data) {
      setTitleModalFunction("¿Mapa entregado?");
      setOpenModalFunction(true);
      setAceptModalFunction(() => () => entregado(data));
    }
  }

  const deleteReservedQuestion = (id) => {
    if (id) {
      setTitleModalFunction("¿Estás seguro de eliminar la reserva?");
      setOpenModalFunction(true);
      setAceptModalFunction(() => () => deleteReserved(id));
    }
  }

  const deleteReserved = async (id) => {
    const respuesta = await fetch(`${Constantes.RUTA_API}/crud/reservas/eliminar_reserva.php?id=${id}`);
    const ok = await respuesta.json();
    if (ok) {
      getReserved();
      setOpenModalFunction(false);
    }
}

  const entregado = async (data) => {
    if (data) {
      const respuesta = await fetch(`${Constantes.RUTA_API}/crud/reservas/actualizar_reserva.php`, {
        method: "PUT",
        body: JSON.stringify({...data, Estatus: "Entregado", ID_mapa: data.ID_libro, ID_usuario: data.Clave_Usuario, Fecha_devolucion: data.Fecha_Devolucion}),
      });
      const exitoso = await respuesta.json();
  
      if (exitoso) {
        notify_succes("Mapa entregado");
        getReserved();
        setOpenModalFunction(false);
      }
    }
  }

  const actualizarReserva = async (data) => {
    if (data) {
      const respuesta = await fetch(`${Constantes.RUTA_API}/crud/reservas/actualizar_reserva.php`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
      const exitoso = await respuesta.json();
  
      if (exitoso) {
        getReserved();
        setOpenReserve(false);
        setOpenModalFunction(false);
        notify_succes("La reserva se actualiza correctamente");
      }
    }
  }

  return (
    <div className="mapsReserved">
      <ToastContainer />
      <ModalFunction 
        title={titleModalFunction} 
        open={openModalFunction} 
        acept={aceptModalFunction} 
        setOpen={setOpenModalFunction} 
      />
      <Table 
        reserved={reserved} 
        sendData={sendData} 
        openReserve={openReserve} 
        setOpenReserve={setOpenReserve}
        deleteReservedQuestion={deleteReservedQuestion}
        entregadoPregunta={entregadoPregunta}
      />
    </div>
  );
}

export default Reserved;
