import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Maps from './Maps';
import Reserved from './reserved/Reserved';
import Favorites from './favorites/Favorites';
import Historial from './historial/Historial';
import Sidebar from '../Sidebar';
import ShowProfile from '../ShowProfile';

function Home(props) {
    const { user } = props;
    const [ itemSelected, setItemSelected ] = useState('showMaps');
    const [ elementSelected, setElementSelected ] = useState(null);
    const [ filtro, setFiltro ] = useState({
      tipo: "",
      nombre: ""
    });

    const itemsSideBar = [
        {name: 'Ver mapas', click: 'showMaps'},
        {name: 'Mapas actuales', click: 'reserved'},
        // {name: 'Mapas favoritos', click: 'favorites'},
        {name: 'Historial', click: 'historial'},
    ]
  return (
    <div>
      <Navbar setFiltro={setFiltro} setItemSelected={setItemSelected} />
      <Sidebar itemsSideBar={itemsSideBar} setItemSelected={setItemSelected} itemSelected={itemSelected} />
      
      {
        itemSelected == "showMaps" ? (
          <Maps filtro={filtro}  />
        ) : itemSelected == "reserved" ? (
          <Reserved />
        ) : itemSelected == "favorites" ? (
          <Favorites />
        ) : itemSelected == "historial" ? (
          <Historial user={user} filtro={filtro} />
        ) : itemSelected == "profile" && (
          <ShowProfile />
        )
      }
    </div>
  );
}

export default Home;
