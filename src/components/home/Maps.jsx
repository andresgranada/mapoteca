import React, { useState, useEffect, Fragment } from "react";
import Map from './Map';
import MapDetail from './MapDetail';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Constantes from "../../Constants/Constantes";

const Maps = (props) => {

    const { filtro } = props;
    const [ maps, setMaps ] = useState([]);
    const [idMapToShow, setIdMapToShow] = useState(null);


    useEffect(()=>{
        if (filtro.length >= 0) {
            setMaps(filtro);
        }
    }, [filtro])

    useEffect(async () => {
        const respuesta = await fetch(`${Constantes.RUTA_API}/crud/mapas/obtener_mapas.php`);
        setMaps(await respuesta.json());
    }, [])

    return(
        <div className="maps">
            <Container fluid>
                {
                    !idMapToShow && (
                        <Row>
                            { maps.map((map, i) => {
                                return(
                                    <Col key={i} xs="12" md="4" sm="6" style={{textAlign: "center"}} >
                                        <Map mapInfo={map} setIdMapToShow={setIdMapToShow} />
                                    </Col>
                                )
                            }) }
                        </Row>
                    )
                }
                {
                    idMapToShow && (
                        <Fragment>
                            <FontAwesomeIcon onClick={()=>{setIdMapToShow(null)}} className="backToMaps" icon={faArrowLeft} />
                            <MapDetail idMapToShow={idMapToShow} hideReserve={true} />
                        </Fragment>
                    )
                }
            </Container>
        </div>
    )


}

export default Maps;