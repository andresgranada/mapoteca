import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Maps from './Maps';
import MapsReserve from './mapsReserve/MapsReserve';
import Reserved from './mapsReserved/Reserved';
import Users from './users/Users';
import Sidebar from '../Sidebar';
import ShowProfile from '../ShowProfile';

function Admin() {

    const [ itemSelected, setItemSelected ] = useState('maps');
    const [ filtro, setFiltro ] = useState([]);

    const itemsSideBar = [
        {name: 'Mapas', click: 'maps'},
        {name: 'Mapas prestados', click: 'reserved'},
        {name: 'Reservar', click: 'reserve'},
        {name: 'Usuarios', click: 'users'},
    ]

  return (
    <div>
      <Navbar setFiltro={setFiltro} setItemSelected={setItemSelected} />
      <Sidebar itemsSideBar={itemsSideBar} setItemSelected={setItemSelected} itemSelected={itemSelected} />
      
      {
        itemSelected == "maps" ? (
          <Maps filtro={filtro}  />
        ) : itemSelected == "reserve" ? (
          <MapsReserve />
        ) : itemSelected == "reserved" ? (
          <Reserved />
        ) : itemSelected == "users" ? (
          <Users />
        ) : itemSelected == "profile" && (
          <ShowProfile />
        )
      }
    </div>
  );
}

export default Admin;
