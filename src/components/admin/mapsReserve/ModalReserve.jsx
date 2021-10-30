import React, { Fragment, useState, useEffect } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import Select2 from "react-select2-wrapper";
import { Card, Dropdown, Button } from 'react-bootstrap';
import Constantes from "../../../Constants/Constantes";

import {
    Row,
    Col,
    Collapse,
    FormGroup,
    Label,
    ButtonGroup,
    Input,
} from 'reactstrap';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalReserve = (props) => {

    const { open, setOpen, mapName, sendData, mapEdit } = props;
    const [ maps, setMaps ] = useState();
    const [ users, setUsers ] = useState([]);
    const [ date, setDate ] = useState("");
    const [ mapSelected, setMapSelected ] = useState({
        Imagen: "",
        Empresa: "",
        Escala: "",
        ID: null,
        Tipo: "",
        Titulo: "",
        Zona_Geografica: "",
        ID_mapa: ""
    });
    const [ userSelected, setUserSelected ] = useState({
        ApellidoM: "",
        ApellidoP: "",
        Direccion: "",
        ID: null,
        Nombre: "",
        Password: "",
        Usuarios: ""
    });

    const handleClose = () => {
        setUserSelected({
            ApellidoM: "",
            ApellidoP: "",
            Direccion: "",
            ID: null,
            Nombre: "",
            Password: "",
            Usuarios: ""
        });
        setOpen(false);
    }

    useEffect(()=>{
        getMaps();
        getUsers();
    }, [])
    
    useEffect(()=>{
        if (mapName) {
            setMapSelected({...mapName, ID_mapa: mapName.ID});
        }
    }, [mapName])
    
    
    useEffect(()=>{
        if (mapEdit) {
            console.log(mapEdit);
            setMapSelected({...mapEdit, ID_mapa: mapEdit.ID_libro});
            setUserSelected({...userSelected, ID: mapEdit.Clave_Usuario});
            setDate(mapEdit.Fecha_Devolucion);
        }
    }, [mapEdit])

    const getMaps = async () => {
        const respuesta = await fetch(`${Constantes.RUTA_API}/crud/mapas/obtener_mapas.php`);
        setMaps(await respuesta.json());
    }
    
    const getUsers = async () => {
        const respuesta = await fetch(`${Constantes.RUTA_API}/crud/usuarios/obtener_usuarios.php`);
        setUsers(await respuesta.json());
    }

    const handleChange = (e) => {
        setDate(e.target.value);
    }

    const saveData = async () => {
        if (userSelected.ID && date) {
            sendData({
                ID: mapEdit && mapEdit.ID ? mapEdit.ID : null,
                ID_mapa: mapSelected.ID_mapa,
                ID_usuario: userSelected.ID,
                Fecha_devolucion: date,
            });
        } else {
            alert("Completar todos los campos");
        }
    }

    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            id="Modal"
        >
            <Box sx={style} tabIndex="none">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Mapa: {mapSelected.Titulo}
                </Typography>
                <div id="modal-modal-description" sx={{ mt: 2 }}>
                    <FormGroup className="form-group-float" style={{marginBottom: "10px"}}>
                        <Label
                            htmlFor="usuario"
                        >
                            Usuario
                        </Label>

                        <Select2
                            name="usuario"
                            id="usuario"
                            value={userSelected.ID}
                            onChange={(e) => {
                              if (userSelected && userSelected.ID !== e.target.value) {
                                setUserSelected({...userSelected, ID: e.target.value})
                              }
                            }}
                            options={{ placeholder: "Usuario" }}
                            className="form-control"
                            data={users && users.map(item => {
                                return {id: item.ID, text: `${item.ID} - ${item.Nombre}`}
                            })}
                        />
                    </FormGroup>
                    {/* <FormGroup className="form-group-float" style={{marginBottom: "10px"}}>
                        <Label
                            htmlFor="mapa"
                        >
                            Mapa
                        </Label>

                        <Select2
                            name="mapa"
                            id="mapa"
                            value={mapSelected.ID_mapa}
                            onChange={(e) => {
                              if (mapSelected && mapSelected.ID_mapa !== e.target.value) {
                                setMapSelected({...mapSelected, ID_mapa: e.target.value})
                              }
                            }}
                            options={{ placeholder: "Mapa" }}
                            className="form-control"
                            data={maps && maps.map(item => {
                                return {id: item.ID, text: item.Titulo}
                            })}
                        />
                    </FormGroup> */}
                    <FormGroup className="form-group-float" style={{marginBottom: "20px"}}>
                        <Label
                            htmlFor="mapa"
                        >
                            Fecha de devolución
                        </Label>

                        <Input
                        type="date"
                        name="date"
                        value={date}
                        onChange={handleChange}
                        />
                    </FormGroup>
                    
                    <div>
                        <Button onClick={saveData} variant="primary">Aceptar</Button>{' '}
                        <Button onClick={handleClose} variant="danger">Cancelar</Button>{' '}
                    </div>
                </div>
            </Box>
        </Modal>
    );
}

export default ModalReserve;