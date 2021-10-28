import React, { useState, useEffect, Fragment } from "react";
import { Card, Dropdown, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Modal, Box, Typography } from '@mui/material';
import Constantes from "../../../Constants/Constantes";

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

const FormComponent = (props) => {

    const { idFormToShow, setIdFormToShow, getMapas } = props;
    const [mapToShow, setMapToShow] = useState({
        Imagen: "",
        Empresa: "",
        Escala: "",
        ID: null,
        Tipo: "",
        Titulo: "",
        Zona_Geografica: ""
    });

    useEffect(async () => {
        if (idFormToShow && idFormToShow !== "new") {
            const respuesta = await fetch(`${Constantes.RUTA_API}/crud/mapas/obtener_mapa.php?id=${idFormToShow}`);
            setMapToShow(await respuesta.json());
        }
    }, [idFormToShow])

    const guardarMapa = async (evento) => {
        evento.preventDefault();
        if (!mapToShow.ID) {
            const respuesta = await fetch(`${Constantes.RUTA_API}/crud/mapas/crear_mapa.php`, {
                method: "POST",
                body: JSON.stringify(mapToShow),
            });
            const exitoso = await respuesta.json();

            if (exitoso) {
                setIdFormToShow(false);
                getMapas();
            }
        } else {
            const respuesta = await fetch(`${Constantes.RUTA_API}/crud/mapas/actualizar_mapa.php`, {
                method: "PUT",
                body: JSON.stringify(mapToShow),
            });
            const exitoso = await respuesta.json();

            if (exitoso) {
                setIdFormToShow(false);
                getMapas();
            }
        }
    }

    return(
        <div className="form">
            <Form style={{width: "60%", margin: "50px auto"}} onSubmit={guardarMapa}>
                {/* <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Url Imagen</Form.Label>
                    <Form.Control onChange={(e)=>{setMapToShow({...mapToShow, Titulo: e.target.value})}} defaultValue={mapToShow.Titulo} type="text" placeholder="Imagen" />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Título</Form.Label>
                    <Form.Control onChange={(e)=>{setMapToShow({...mapToShow, Titulo: e.target.value})}} defaultValue={mapToShow.Titulo} type="text" placeholder="Título" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="type">
                    <Form.Label>Tipo</Form.Label>
                    <Form.Control onChange={(e)=>{setMapToShow({...mapToShow, Tipo: e.target.value})}} defaultValue={mapToShow.Tipo} type="text" placeholder="Tipo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="company">
                    <Form.Label>Empresa</Form.Label>
                    <Form.Control onChange={(e)=>{setMapToShow({...mapToShow, Empresa: e.target.value})}} defaultValue={mapToShow.Empresa} type="text" placeholder="Empresa" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="scale">
                    <Form.Label>Escala</Form.Label>
                    <Form.Control onChange={(e)=>{setMapToShow({...mapToShow, Escala: e.target.value})}} defaultValue={mapToShow.Escala} type="text" placeholder="Escala" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="zona">
                    <Form.Label>Zona Geografica</Form.Label>
                    <Form.Control onChange={(e)=>{setMapToShow({...mapToShow, Zona_Geografica: e.target.value})}} defaultValue={mapToShow.Zona_Geografica} type="text" placeholder="Zona Geografica" />
                </Form.Group>
                <div className="buttons">
                    <Button type="submit" variant="primary">{!mapToShow.ID ? "Crear" : "Guardar"}</Button>{' '}
                    <Button style={{float: "right"}} onClick={()=> {setIdFormToShow(false)}} variant="danger">Cancelar</Button>{' '}
                </div>
            </Form>
        </div>
    )


}

export default FormComponent;