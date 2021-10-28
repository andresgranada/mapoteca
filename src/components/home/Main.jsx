import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Maps from './Maps';
import Reserved from './reserved/Reserved';
import Favorites from './favorites/Favorites';
import Sidebar from '../Sidebar';

function Home() {

    const [ itemSelected, setItemSelected ] = useState('showMaps');
    const [ elementSelected, setElementSelected ] = useState(null);
    const [ filtro, setFiltro ] = useState([]);

    const itemsSideBar = [
        {name: 'Ver mapas', click: 'showMaps'},
        {name: 'Mapas reservados', click: 'reserved'},
        {name: 'Mapas favoritos', click: 'favorites'},
        {name: 'Historial', click: 'historial'},
    ]
  return (
    <div>
      <Navbar setFiltro={setFiltro} />
      <Sidebar itemsSideBar={itemsSideBar} setItemSelected={setItemSelected} itemSelected={itemSelected} />
      
      {
        itemSelected == "showMaps" ? (
          <Maps filtro={filtro}  />
        ) : itemSelected == "reserved" ? (
          <Reserved />
        ) : itemSelected == "favorites" && (
          <Favorites />
        )
      }
    </div>
  );
}

export default Home;
