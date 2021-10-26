import React, { useState, useEffect, Fragment } from "react";
import Map from './map/Map';
import Form from './map/FormComponent';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Constantes from "../../Constants/Constantes";


const Maps = () => {

    const [idFormToShow, setIdFormToShow] = useState(false);

    const [ maps, setMaps ] = useState([]);

    useEffect(async () => {
        getMapas();
    }, [])

    const getMapas = async () => {
        const respuesta = await fetch(`${Constantes.RUTA_API}/crud/obtener_mapas.php`);
        setMaps(await respuesta.json());
    }

    return(
        <div className="maps">
            <Container fluid>
                {
                    !idFormToShow && (
                        <Row>
                            { maps.map((map, i) => {
                                return(
                                    <Col key={i} xs="12" md="4" sm="6" style={{textAlign: "center"}} >
                                        <Map getMapas={getMapas} mapInfo={map} setIdFormToShow={setIdFormToShow} />
                                    </Col>
                                )
                            }) }
                        </Row>
                    )
                }
                {
                    idFormToShow && (
                        <Fragment>
                            <div className="mapForm">
                                <FontAwesomeIcon onClick={()=>{setIdFormToShow(false)}} className="backToMaps" icon={faArrowLeft} />
                                <Form getMapas={getMapas} idFormToShow={idFormToShow} setIdFormToShow={setIdFormToShow} />
                            </div>
                        </Fragment>
                    )
                }
            </Container>
            {
                !idFormToShow && (
                    <div>
                        <FontAwesomeIcon onClick={()=>{setIdFormToShow("new")}} icon={faPlusCircle} className="addItem"/>
                    </div>
                )
            }
        </div>
    )


}

export default Maps;