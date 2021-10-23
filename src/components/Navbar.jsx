import React, { useState, useEffect } from "react";
import { TextField, FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    select: {
        '&:before': {
            borderColor: 'white !important',
        },
        '&:after': {
            borderColor: 'white !important',
        },
        '&:not(.Mui-disabled):hover::before': {
            borderColor: 'white !important',
        },
    },
    icon: {
        fill: 'white !important',
    },
    root: {
        color: 'white !important',
    },
})


const Navbar = () => {
    const classes = useStyles();

    return(
        <div className="navbarClass">
        <div className="logo">
            <h6>Mapoteca Logo</h6>
        </div>
            <div className="filters">
                <FormControl className="filter" variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel style={{color: "white"}} id="demo-simple-select-label">Buscar por:</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                        label="Buscar por"
                        style={{color: "white"}}
                        className={classes.select}
                        inputProps={{
                            classes: {
                                icon: classes.icon,
                                root: classes.root,
                            },
                        }}
                        // onChange={handleChange}
                    >
                        <MenuItem value={10}>Título</MenuItem>
                        <MenuItem value={20}>Empresa</MenuItem>
                        <MenuItem value={30}>Tipo</MenuItem>
                        <MenuItem value={40}>Zona</MenuItem>
                    </Select>
                </FormControl>
                {/* <TextField 
                    className="filter" 
                    id="Search" 
                    label="Buscar mapa" 
                    variant="standard"
                    style={{color: "white"}}
                /> */}
                <div className="inputBuscar">
                    <input type="text" placeholder="Buscar" />
                </div>
            </div>
            
        </div>
    )

}

export default Navbar;