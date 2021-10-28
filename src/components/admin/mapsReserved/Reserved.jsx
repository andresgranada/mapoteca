import React, { Fragment, useState, useEffect } from 'react';
import Constantes from "../../../Constants/Constantes";
import Table from "./Table";


function Reserved(props) {

  const [ reserved, setReserved ] = useState([]);

  useEffect(()=>{
    getReserved();
  }, [])

    const getReserved = async () => {
        const respuesta = await fetch(`${Constantes.RUTA_API}/crud/reservas/obtener_reservas.php`);
        setReserved(await respuesta.json());
    }

  return (
    <div className="mapsReserved">
      <Table reserved={reserved} />
    </div>
  );
}

export default Reserved;
