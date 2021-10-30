import React, { useState, useEffect, Fragment } from "react";
import Map from '../Map';
import { Container, Col, Row } from 'reactstrap';
import Constantes from "../../../Constants/Constantes";


const Historial = (props) => {
    const { user, filtro } = props;
    const [ maps, setMaps ] = useState([]);

    useEffect(() => {
        getMapas();
    }, [])


    const getMapas = async () => {
        const respuesta = await fetch(`${Constantes.RUTA_API}/crud/usuarios/historial_usuario.php?id=${localStorage.getItem("user")}`);
        setMaps(await respuesta.json());
    }

    useEffect(()=>{
        if (filtro) {
            getMapasFiltro();
        }
    }, [filtro])

    const getMapasFiltro = async () => {
        const respuesta = await fetch(`${Constantes.RUTA_API}/crud/usuarios/historial_usuario.php?id=${localStorage.getItem("user")}&titulo=${filtro.tipo}&nombre=${filtro.nombre}`);
        setMaps(await respuesta.json());
    } 

    return (
        <div className="maps">
            <Container>
                <Row>
                    {
                        maps.length <= 0 && (
                            <div style={{width: "100%", textAlign: "center"}}>
                                <h1>No tienes mapas registrado</h1>
                            </div>
                        )
                    }
                    { maps && maps.map((map, i) => {
                        console.log(map);
                        return(
                            <Col key={i} xs="12" md="4" sm="6" style={{textAlign: "center"}} >
                                <Map getMapas={getMapas} mapInfo={map} hideDetalle={true} />
                            </Col>
                        )
                    }) }
                </Row>
            </Container>
        </div>
    )
}

export default Historial;