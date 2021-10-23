import Map from '../../home/Map';
import React, { useState, useEffect, Fragment } from "react";
import { Container, Col, Row } from 'reactstrap';
import ModalReserve from './ModalReserve';


const MapsReserve = () => {
    const [ maps, setMaps ] = useState([
        {id: '01', name: 'Mapa de Colombia', description: 'Pais Tropical', available: true, img: 'https://webassets.tomtom.com/otf/images/media/54A21F80-6FDC-44EB-8876FC9C915E06E4'},
        {id: '02', name: 'Mapa de Mexico', description: 'Pais con muchas playas', available: true, img: 'https://webassets.tomtom.com/otf/images/media/54A21F80-6FDC-44EB-8876FC9C915E06E4'},
    ]);

    const [ openReserve, setOpenReserve ] = useState(false);
    const [ mapSelected, setMapSelected ] = useState('');

    useEffect(()=>{
        console.log(openReserve);
        console.log(mapSelected);
    },[openReserve])

    return(
        <div className="maps">
            <Container fluid>
                <Row>
                    { maps.map((map, i) => {
                        console.log(map);
                        return(
                            <Col key={i} xs="12" md="4" sm="6" style={{textAlign: "center"}} >
                                <Map mapInfo={map} showReserve={true} setOpenReserve={setOpenReserve} setMapSelected={setMapSelected} />
                                <ModalReserve open={openReserve} setOpen={setOpenReserve} mapName={mapSelected} />
                            </Col>
                        )
                    }) }
                </Row>
            </Container>
        </div>
    )
}

export default MapsReserve;