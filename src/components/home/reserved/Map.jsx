import React, { useState, useEffect, Fragment } from "react";
import { Card } from 'react-bootstrap';

const Map = (props) => {

    const [ showItems, setShowItems ] = useState(false);

    const { id, name, description, available, img } = props.mapInfo;
    const { setMapToShow } = props;

    console.log(name);

    const toggle = () => {
        setShowItems(!showItems);
    }

    return(
        <div className="mapCard">
            <Card style={{textAlign: "center"}} onMouseOver={toggle} onMouseOut={toggle}>
                <div className="hoverMap"></div>
                <div className="detailMap" onClick={()=> {setMapToShow(id)}} >Ver detalle</div>
                <div className="addCar">No reservar</div>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
            <br />
        </div>
    )


}

export default Map;