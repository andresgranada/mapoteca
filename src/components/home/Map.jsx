import React, { useState, useEffect, Fragment } from "react";
import { Card } from 'react-bootstrap';

const Map = (props) => {

    const [ showItems, setShowItems ] = useState(false);

    const { ID, Titulo, TIPO, ZONA_GEOGRAFICA, EMPRESA, URL_Imagen } = props.mapInfo;
    const { setIdMapToShow, hideReserve, showReserve, setOpenReserve, setMapSelected, hideDetalle } = props;

    const toggle = () => {
        setShowItems(!showItems);
    }

    console.log(URL_Imagen);

    return(
        <div className="mapCard">
            <Card style={{textAlign: "center"}} onMouseOver={toggle} onMouseOut={toggle}>
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