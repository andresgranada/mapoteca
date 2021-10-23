import React, { useState, useEffect, Fragment } from "react";
import { Card, Dropdown, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Modal, Box, Typography } from '@mui/material';

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

    if (props.detail) {
        const { id, name, description, available, img } = props.detail;
    }

    return(
        <div className="form">
            <Form style={{width: "60%", margin: "50px auto"}}>
                <div style={{width: "100%", textAlign: "center"}}>
                    <img style={{width: "50%"}} src={props.detail && props.detail.img ? props.detail.img : ""} />
                </div>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control defaultValue={props.detail && props.detail.name ? props.detail.name : ""} type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control defaultValue={props.detail && props.detail.description ? props.detail.description : ""} as="textarea" rows={4} placeholder="Descripción" />
                </Form.Group>
            </Form>
        </div>
    )


}

export default FormComponent;