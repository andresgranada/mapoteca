import React, { useState, useEffect, Fragment } from "react";
import { Card } from 'react-bootstrap';

const MapDetail = (props) => {

    const { id, name, description, available, img } = props.detail;
    const { hideReserve } = props;

    const [ mapDetail, setMapDetail ] = useState({
        id: id,
        name: name,
        description: description,
        img: img
    });

    return(
        <div className="mapDetail">
            <div className="imageDetail">
                <img src={img} />
            </div>
            <p className="nameDetail">{name}</p>
            <p className="descriptionDetail">{description}</p>
            {
                !hideReserve && (
                    <div className="addCar">Reservar</div>
                )
            }
        </div>
    )


}

export default MapDetail;