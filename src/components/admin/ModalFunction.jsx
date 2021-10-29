import React, { Fragment, useState, useEffect } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import { Button } from 'react-bootstrap';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
  //   border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalFunction = (props) => {

    const { title, acept, open, setOpen } = props;

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography className="text-center" id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <div id="modal-modal-description" sx={{ mt: 2 }} style={{textAlign: "center"}}>
                    <Button onClick={()=>{acept()}} variant="danger">Aceptar</Button>{' '}
                    <Button onClick={handleClose} variant="primary">Cancelar</Button>{' '}
                </div>
            </Box>
        </Modal>
    )
}

export default ModalFunction;
