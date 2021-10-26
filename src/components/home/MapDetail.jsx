import React, { useState, useEffect, Fragment } from "react";
import { Card } from 'react-bootstrap';
import Constantes from "../../Constants/Constantes";


const MapDetail = (props) => {

    const { hideReserve, idMapToShow } = props;
    const [mapToShow, setMapToShow] = useState({
        Empresa: "",
        Escala: "",
        ID: null,
        Tipo: "",
        Titulo: "",
        Zona_Geografica: ""
    });


    useEffect(async () => {
        if (idMapToShow) {
            const respuesta = await fetch(`${Constantes.RUTA_API}/crud/obtener_mapa.php?id=${idMapToShow}`);
            setMapToShow(await respuesta.json());
        }
    }, [idMapToShow])

    return(
        <div className="mapDetail">
            <div className="imageDetail">
                <img src="https://webassets.tomtom.com/otf/images/media/54A21F80-6FDC-44EB-8876FC9C915E06E4" />
            </div>
            <p className="nameDetail">{mapToShow.Titulo}</p>
            <p className="descriptionDetail">{mapToShow.Tipo}</p>
            {
                !hideReserve && (
                    <div className="addCar">Reservar</div>
                )
            }
        </div>
    )


}

export default MapDetail;