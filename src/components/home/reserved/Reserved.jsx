import React, { useState, useEffect, Fragment } from "react";
import Map from '../Map';
import MapDetail from '../MapDetail';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Constantes from "../../../Constants/Constantes";

const Reserved = () => {

    const [ maps, setMaps ] = useState([]);
    const [mapToShow, setMapToShow] = useState(null);

    useEffect(() => {
        getMaps();
    }, [])
    
    useEffect(() => {
        if (maps.length > 0 && !maps[0].ID) {
            setMaps(maps.map(item => {
                return {
                    ...item, ID: item.ID_Mapa
                }
            }));
        }
        console.log(maps);
    }, [maps])

    const getMaps = async () => {
        const respuesta = await fetch(`${Constantes.RUTA_API}/crud/mapas/mapas_usuario.php?id=${localStorage.getItem("user")}`);
        setMaps(await respuesta.json());
    }

    return(
        <div className="maps">
            <Container fluid>
                {
                    !mapToShow && (
                        <Row>
                            { maps.map((map, i) => {
                                return(
                                    <Col key={i} xs="12" md="4" sm="6" style={{textAlign: "center"}} >
                                        <Map showDate={true} showStatus={true} mapInfo={map} setIdMapToShow={setMapToShow} />
                                    </Col>
                                )
                            }) }
                        </Row>
                    )
                }
                {
                    mapToShow && (
                        <Fragment>
                            <FontAwesomeIcon onClick={()=>{setMapToShow(null)}} className="backToMaps" icon={faArrowLeft} />
                            <MapDetail hideReserve={true} idMapToShow={mapToShow} />
                        </Fragment>
                    )
                }
            </Container>
        </div>
    )


}

export default Reserved;