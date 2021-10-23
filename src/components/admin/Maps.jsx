import React, { useState, useEffect, Fragment } from "react";
import Map from './map/Map';
import Form from './map/FormComponent';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Maps = () => {

    const [formToShow, setFormToShow] = useState(false);

    const [ maps, setMaps ] = useState([
        {id: '01', name: 'Mapa de Colombia', description: 'Pais Tropical', available: true, img: 'https://webassets.tomtom.com/otf/images/media/54A21F80-6FDC-44EB-8876FC9C915E06E4'},
        {id: '02', name: 'Mapa de Mexico', description: 'Pais con muchas playas', available: true, img: 'https://webassets.tomtom.com/otf/images/media/54A21F80-6FDC-44EB-8876FC9C915E06E4'},
        {id: '03', name: 'Mapa de Chile', description: 'Pais al sur', available: true, img: 'https://webassets.tomtom.com/otf/images/media/54A21F80-6FDC-44EB-8876FC9C915E06E4'},
        {id: '04', name: 'Mapa de Brasil', description: 'Pais Brasil', available: true, img: 'https://webassets.tomtom.com/otf/images/media/54A21F80-6FDC-44EB-8876FC9C915E06E4'},
        {id: '05', name: 'Mapa de Argentina', description: 'Pais Argentina', available: true, img: 'https://webassets.tomtom.com/otf/images/media/54A21F80-6FDC-44EB-8876FC9C915E06E4'},
        {id: '06', name: 'Mapa de Bolivia', description: 'Pais Bolivia', available: true, img: 'https://webassets.tomtom.com/otf/images/media/54A21F80-6FDC-44EB-8876FC9C915E06E4'},
        {id: '07', name: 'Mapa de Colombia', description: 'Pais Tropical', available: true, img: 'https://webassets.tomtom.com/otf/images/media/54A21F80-6FDC-44EB-8876FC9C915E06E4'},
        {id: '08', name: 'Mapa de Mexico', description: 'Pais con muchas playas', available: true, img: 'https://webassets.tomtom.com/otf/images/media/54A21F80-6FDC-44EB-8876FC9C915E06E4'},
        {id: '09', name: 'Mapa de Chile', description: 'Pais al sur', available: true, img: 'https://webassets.tomtom.com/otf/images/media/54A21F80-6FDC-44EB-8876FC9C915E06E4'},
        {id: '10', name: 'Mapa de Brasil', description: 'Pais Brasil', available: true, img: 'https://webassets.tomtom.com/otf/images/media/54A21F80-6FDC-44EB-8876FC9C915E06E4'},
        {id: '11', name: 'Mapa de Argentina', description: 'Pais Argentina', available: true, img: 'https://webassets.tomtom.com/otf/images/media/54A21F80-6FDC-44EB-8876FC9C915E06E4'},
        {id: '12', name: 'Mapa de Bolivia', description: 'Pais Bolivia', available: true, img: 'https://webassets.tomtom.com/otf/images/media/54A21F80-6FDC-44EB-8876FC9C915E06E4'},
    ]);

    return(
        <div className="maps">
            <Container fluid>
                {
                    formToShow == false && (
                        <Row>
                            { maps.map((map, i) => {
                                return(
                                    <Col key={i} xs="12" md="4" sm="6" style={{textAlign: "center"}} >
                                        <Map mapInfo={map} setFormToShow={setFormToShow} />
                                    </Col>
                                )
                            }) }
                        </Row>
                    )
                }
                {
                    formToShow && (
                        <Fragment>
                            <div className="mapForm">
                                <FontAwesomeIcon onClick={()=>{setFormToShow(false)}} className="backToMaps" icon={faArrowLeft} />
                                <Form detail={maps[maps.findIndex(item => item.id == formToShow)]} />
                            </div>
                        </Fragment>
                    )
                }
            </Container>
            {
                formToShow == false && (
                    <div>
                        <FontAwesomeIcon onClick={()=>{setFormToShow("new")}} icon={faPlusCircle} className="addItem"/>
                    </div>
                )
            }
        </div>
    )


}

export default Maps;