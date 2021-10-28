import React, { useState, useEffect, Fragment } from "react";
import { Card, Dropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Modal, Box, Typography } from '@mui/material';
import Constantes from "../../../Constants/Constantes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

<ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    {/* Same as */}
<ToastContainer />

const Map = (props) => {

    const [ showItems, setShowItems ] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { ID, Titulo, TIPO, ZONA_GEOGRAFICA, EMPRESA } = props.mapInfo;
    const { setIdFormToShow, getMapas } = props;

    const toggle = () => {
        setShowItems(!showItems);
    }

    const eliminarMapa = async () => {
        const respuesta = await fetch(`${Constantes.RUTA_API}/crud/mapas/eliminar_mapa.php?id=${ID}`);
        const ok = await respuesta.json();
        if (ok) {
            handleClose();
            getMapas();
        }
    }

    const ModalComponent = () => {
        return (
            // <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    ¿Estás seguro de eliminar el mapa?
                    </Typography>
                    <div id="modal-modal-description" sx={{ mt: 2 }} style={{textAlign: "center"}}>
                        <Button onClick={eliminarMapa} variant="danger">Aceptar</Button>{' '}
                        <Button onClick={handleClose} variant="primary">Cancelar</Button>{' '}
                    </div>
                </Box>
            </Modal>
        )
    }

    return(
        <div className="mapCard">
            <ModalComponent />
            <Card style={{textAlign: "center"}} onMouseOver={toggle} onMouseOut={toggle}>
                <div className="hoverMap"></div>
                <Dropdown style={{position: "absolute", right: 0}}>
                    <Dropdown.Toggle id="dropdown-basic">
                        <FontAwesomeIcon icon={faCog}/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {/* <Dropdown.Item href="#/action-3"><FontAwesomeIcon icon={faPencilAlt}/></Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><FontAwesomeIcon icon={faTrashAlt}/></Dropdown.Item> */}
                        <Dropdown.Item onClick={()=>{setIdFormToShow(ID)}} >Actualizar</Dropdown.Item>
                        <Dropdown.Item onClick={handleOpen} >Eliminar</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Card.Img variant="top" src="https://webassets.tomtom.com/otf/images/media/54A21F80-6FDC-44EB-8876FC9C915E06E4" />
                <Card.Body>
                <Card.Title>{Titulo}</Card.Title>
                </Card.Body>
            </Card>
            <br />
        </div>
    )


}

export default Map;