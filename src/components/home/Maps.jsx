import React, { useState, useEffect, Fragment } from "react";
import Map from './Map';
import MapDetail from './MapDetail';
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Maps = () => {

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

    const [mapToShow, setMapToShow] = useState(null);

    return(
        <div className="maps">
            <Container fluid>
                {
                    !mapToShow && (
                        <Row>
                            { maps.map((map, i) => {
                                console.log(map);
                                return(
                                    <Col key={i} xs="12" md="4" sm="6" style={{textAlign: "center"}} >
                                        <Map mapInfo={map} setMapToShow={setMapToShow} />
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
                            <MapDetail detail={maps[maps.findIndex(item => item.id == mapToShow)]} />
                        </Fragment>
                    )
                }
            </Container>
        </div>
    )


}

export default Maps;