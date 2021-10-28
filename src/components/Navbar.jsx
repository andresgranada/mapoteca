import React, { useState, useEffect } from "react";
import { TextField, FormControl, Select, InputLabel, MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Constantes from "../Constants/Constantes";


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


const Navbar = (props) => {
    const { setFiltro } = props;
    const classes = useStyles();
    const [ filtroType, setFiltroType ] = useState("Titulo");
    const [ filtroName, setFiltroName ] = useState("");

    useEffect(()=>{
        if (filtroName.length >= 0) {
            callFiltro();
        }
    }, [filtroName])

    const callFiltro = async () => {
        const respuesta = await fetch(`${Constantes.RUTA_API}/crud/mapas/obtener_mapas.php?titulo=${filtroType}&nombre=${filtroName}`);
        setFiltro(await respuesta.json());
        // setFiltro(await respuesta.json());
        // const ok = await respuesta.json();
    }

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
                        value={filtroType}
                        label="Buscar por"
                        style={{color: "white"}}
                        className={classes.select}
                        inputProps={{
                            classes: {
                                icon: classes.icon,
                                root: classes.root,
                            },
                        }}
                        onChange={(e)=>{setFiltroType(e.target.value)}}
                    >
                        <MenuItem value="Titulo">Título</MenuItem>
                        <MenuItem value="Empresa">Empresa</MenuItem>
                        <MenuItem value="Tipo">Tipo</MenuItem>
                        <MenuItem value="Zona_Geografica">Zona Geografica</MenuItem>
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
                    <input type="text" value={filtroName} onChange={(e)=>{setFiltroName(e.target.value)}} placeholder="Buscar" />
                </div>
            </div>
            
        </div>
    )

}

export default Navbar;