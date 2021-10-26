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
            <p style={{textAlign: "center", fontSize: "20px"}}><span style={{fontWeight: 700}}>Título:</span> {mapToShow.Titulo}</p>
            <p style={{textAlign: "center", fontSize: "20px"}}><span style={{fontWeight: 700}}>Tipo:</span> {mapToShow.Tipo}</p>
            <p style={{textAlign: "center", fontSize: "20px"}}><span style={{fontWeight: 700}}>Empresa:</span> {mapToShow.Empresa}</p>
            <p style={{textAlign: "center", fontSize: "20px"}}><span style={{fontWeight: 700}}>Escala:</span> {mapToShow.Escala}</p>
            <p style={{textAlign: "center", fontSize: "20px"}}><span style={{fontWeight: 700}}>Zona Geografica:</span> {mapToShow.Zona_Geografica}</p>
            {
                !hideReserve && (
                    <div className="addCar">Reservar</div>
                )
            }
        </div>
    )


}

export default MapDetail;