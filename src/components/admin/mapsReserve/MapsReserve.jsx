import Map from '../../home/Map';
import React, { useState, useEffect, Fragment } from "react";
import { Container, Col, Row } from 'reactstrap';
import ModalReserve from './ModalReserve';
import Constantes from "../../../Constants/Constantes";
import { notify_error, notify_succes } from "../../../Constants/Alerts";
import { ToastContainer, toast } from 'react-toastify';

const MapsReserve = (props) => {

    const { filtro } = props;

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

    useEffect(()=>{
        if (filtro) {
            getMapasFiltro();
        }
    }, [filtro])

    const getMapasFiltro = async () => {
        const respuesta = await fetch(`${Constantes.RUTA_API}/crud/mapas/obtener_mapas.php?titulo=${filtro.tipo}&nombre=${filtro.nombre}`);
        setMaps(await respuesta.json());
    } 

    const sendData = async (data) => {
        if (data) {
            delete data.ID;
            const respuesta = await fetch(`${Constantes.RUTA_API}/crud/reservas/reservar.php`, {
                method: "POST",
                body: JSON.stringify({...data, Titulo: mapSelected.Titulo}),
            });
            const exitoso = await respuesta.json();

            if (exitoso == "mapa reservado") {
                notify_error("El mapa se encuentra reservado");
                return;
            }
            
            if (exitoso == "Supero el limite") {
                notify_error("El usuario ya superó el límite de reservas");
                return;
            }

            if (exitoso) {
                notify_succes("La reserva se crea correctamente");
                setOpenReserve(false);
                getMapas();
            }
        }
    }

    return(
        <div className="maps">
            <ToastContainer />
            <Container fluid>
                <ModalReserve open={openReserve} setOpen={setOpenReserve} mapName={mapSelected} sendData={sendData} />
                <Row>
                    { maps.map((map, i) => {
                        console.log(map);
                        return(
                            <Col key={i} xs="12" md="4" sm="6" style={{textAlign: "center"}} >
                                <Map showDisable={true} mapInfo={map} showReserve={true} setOpenReserve={setOpenReserve} setMapSelected={setMapSelected} />
                            </Col>
                        )
                    }) }
                </Row>
            </Container>
        </div>
    )
}

export default MapsReserve;