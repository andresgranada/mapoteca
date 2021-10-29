import React, { Fragment, useState, useEffect } from 'react';
import Constantes from "../../../Constants/Constantes";
import Table from "./Table";
import ModalFunction from "../ModalFunction";


function Reserved(props) {

  const [ reserved, setReserved ] = useState([]);
  const [ openReserve, setOpenReserve ] = useState(false);
  const [ titleModalFunction, setTitleModalFunction ] = useState("");
  const [ openModalFunction, setOpenModalFunction ] = useState(false);
  const [ aceptModalFunction, setAceptModalFunction ] = useState(()=>{});


  useEffect(()=>{
    getReserved();
  }, [])

  const getReserved = async () => {
      const respuesta = await fetch(`${Constantes.RUTA_API}/crud/reservas/obtener_reservas.php`);
      setReserved(await respuesta.json());
  }

  const sendData = (data) => {
    if (data) {
      setTitleModalFunction("¿Estás seguro de actualizar la reserva?");
      setOpenModalFunction(true);
      setAceptModalFunction(() => () => actualizarReserva(data));
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
      }
    }
  }

  return (
    <div className="mapsReserved">
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
      />
    </div>
  );
}

export default Reserved;
