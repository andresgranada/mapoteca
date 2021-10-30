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
    const [ filtro, setFiltro ] = useState({
      tipo: "",
      nombre: ""
    });
    const [ showFiltroUser, setShowFiltroUser ] = useState(false);

    const itemsSideBar = [
        {name: 'Mapas', click: 'maps'},
        {name: 'Reservar', click: 'reserve'},
        {name: 'Mapas prestados', click: 'reserved'},
        {name: 'Usuarios', click: 'users'},
    ]

    useEffect(() => {
      if (itemSelected == "reserved" || itemSelected == "users") {
        setShowFiltroUser(true);
      } else {
        if (showFiltroUser) {
          setShowFiltroUser(false);
        }
      }
    }, [itemSelected])

  return (
    <div>
      <Navbar setFiltro={setFiltro} setItemSelected={setItemSelected} showFiltroUser={showFiltroUser} />
      <Sidebar itemsSideBar={itemsSideBar} setItemSelected={setItemSelected} itemSelected={itemSelected} />
      
      {
        itemSelected == "maps" ? (
          <Maps filtro={filtro}  />
        ) : itemSelected == "reserve" ? (
          <MapsReserve filtro={filtro} />
        ) : itemSelected == "reserved" ? (
          <Reserved filtro={filtro} />
        ) : itemSelected == "users" ? (
          <Users filtro={filtro} />
        ) : itemSelected == "profile" && (
          <ShowProfile />
        )
      }
    </div>
  );
}

export default Admin;
