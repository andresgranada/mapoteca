import Map from '../../home/Map';
import React, { useState, useEffect, Fragment } from "react";
import { Container, Col, Row } from 'reactstrap';
import ModalReserve from './ModalReserve';
import Constantes from "../../../Constants/Constantes";



const MapsReserve = () => {
    const [ maps, setMaps ] = useState([]);

    const [ openReserve, setOpenReserve ] = useState(false);
    const [ mapSelected, setMapSelected ] = useState('');

    useEffect(()=>{
        getMapas();
    },[])

    const getMapas = async () => {
        const respuesta = await fetch(`${Constantes.RUTA_API}/crud/mapas/obtener_mapas.php`);
        setMaps(await respuesta.json());
    }

    const sendData = async (data) => {
        if (data) {
            delete data.ID;
            const respuesta = await fetch(`${Constantes.RUTA_API}/crud/reservas/reservar.php`, {
                method: "POST",
                body: JSON.stringify(data),
            });
            const exitoso = await respuesta.json();

            if (exitoso) {
                setOpenReserve(false);
            }
        }
    }

    return(
        <div className="maps">
            <Container fluid>
                <ModalReserve open={openReserve} setOpen={setOpenReserve} mapName={mapSelected} sendData={sendData} />
                <Row>
                    { maps.map((map, i) => {
                        console.log(map);
                        return(
                            <Col key={i} xs="12" md="4" sm="6" style={{textAlign: "center"}} >
                                <Map mapInfo={map} showReserve={true} setOpenReserve={setOpenReserve} setMapSelected={setMapSelected} />
                            </Col>
                        )
                    }) }
                </Row>
            </Container>
        </div>
    )
}

export default MapsReserve;