import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Maps from './Maps';
import MapsReserve from './mapsReserve/MapsReserve';
import Reserved from './mapsReserved/Reserved';
import Users from './users/Users';
import Sidebar from '../Sidebar';

function Admin() {

    const [ itemSelected, setItemSelected ] = useState('maps');
    const [ elementSelected, setElementSelected ] = useState(null);
    const [ filtro, setFiltro ] = useState([]);

    const itemsSideBar = [
        {name: 'Mapas', click: 'maps'},
        {name: 'Mapas prestados', click: 'reserved'},
        {name: 'Reservar', click: 'reserve'},
        {name: 'Usuarios', click: 'users'},
    ]

  return (
    <div>
      <Navbar setFiltro={setFiltro}/>
      <Sidebar itemsSideBar={itemsSideBar} setItemSelected={setItemSelected} itemSelected={itemSelected} />
      
      {
        itemSelected == "maps" ? (
          <Maps filtro={filtro}  />
        ) : itemSelected == "reserve" ? (
          <MapsReserve />
        ) : itemSelected == "reserved" ? (
          <Reserved />
        ) : itemSelected == "users" && (
          <Users />
        )
      }
    </div>
  );
}

export default Admin;
