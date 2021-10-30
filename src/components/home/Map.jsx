import React, { useState, useEffect, Fragment } from "react";
import { Card } from 'react-bootstrap';

const Map = (props) => {

    const [ showItems, setShowItems ] = useState(false);

    const { ID, Titulo, TIPO, ZONA_GEOGRAFICA, EMPRESA, URL_Imagen, Fecha_Prestamo, Estatus, Disponible } = props.mapInfo;
    const { setIdMapToShow, hideReserve, showReserve, setOpenReserve, setMapSelected, hideDetalle, showDisable } = props;

    const toggle = () => {
        setShowItems(!showItems);
    }

    console.log(Disponible);

    return(
        <div className="mapCard" style={{position: "relative"}}>
            {   
                    Disponible <= 0 && (
                        <h3 style={{top: "20%", right: "20%", position: "absolute"}}>Mapa reservado</h3>
                    )
            }
            <Card style={{textAlign: "center"}} className={`${Disponible <= 0 && showDisable ? "disableDiv" : ""}`} onMouseOver={toggle} onMouseOut={toggle}>
                <div className="hoverMap"></div>
                {
                    !hideDetalle && (
                        <div className="detailMap" onClick={()=> {setIdMapToShow(ID)}} >Ver detalle</div>
                    )
                }
                {
                    showReserve && (
                        <div onClick={()=>{setOpenReserve(true); setMapSelected(props.mapInfo)}} className="addCar">Reservar</div>
                    )
                }
                <Card.Img variant="top" src={URL_Imagen} />
                <Card.Body>
                <Card.Title>{Titulo}</Card.Title>
                </Card.Body>
            </Card>
            <br />
        </div>
    )


}

export default Map;