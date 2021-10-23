import React, { Fragment, useState, useEffect } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import Select2 from "react-select2-wrapper";
import { Card, Dropdown, Button } from 'react-bootstrap';

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

const ModalReserve = (props) => {

    const { open, setOpen, mapName } = props;

    const users = [
        {codigo: "1234567893", name: "Maiguel", age: 21},
        {codigo: "1152713422", name: "Jairo Andres Granada", age: 23},
        {codigo: "1374832445", name: "Angie Paola", age: 17},
        {codigo: "5643677334", name: "Gustavo", age: 32},
        {codigo: "9087656565", name: "Andres Vasco", age: 25},
    ]

    const handleClose = () => {
        setOpen(false);
    }

    const options = {
        placeholder: "Select"
    };

    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Mapa: {mapName}
                </Typography>
                <div id="modal-modal-description" sx={{ mt: 2 }}>
                    <div className="col form-group form-group-float">              
                        <label                
                            className="form-group-float-label animate"                
                            htmlFor="id_tipo_red_serv"              
                        >                
                            Usuario             
                        </label>              
                        <Select2
                            name="id_tipo_red_serv"
                            id="id_tipo_red_serv"
                            value={users[0].codigo}
                            // onSelect={1}
                            options={{
                                placeholder: "test",                
                            }}                
                            className="form-control"                
                            data={                  
                                users.map((item, i) => {
                                    return{
                                        id: item.codigo,
                                        text: item.name
                                    }
                                })
                            }                
                        />            
                    </div>
                    <div>
                        <Button variant="primary">Aceptar</Button>{' '}
                        <Button onClick={handleClose} variant="danger">Cancelar</Button>{' '}
                    </div>
                </div>
            </Box>
        </Modal>
    );
}

export default ModalReserve;