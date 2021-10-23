import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Maps from './Maps';
import Reserved from './reserved/Reserved';
import Favorites from './favorites/Favorites';
import Sidebar from '../Sidebar';

function Home() {

    const [ itemSelected, setItemSelected ] = useState('showMaps');
    const [ elementSelected, setElementSelected ] = useState(null);

    useEffect(() => {
        setElementSelected(itemSelectedSwitch(itemSelected));
    }, [itemSelected])

    const itemSelectedSwitch = (key) => {
      console.log(key);
        let element;
        switch (key) {
            case 'showMaps':
                element = <Maps />;
                break;
            case 'reserved':
                element = <Reserved />;
                break;
            case 'favorites':
                element = <Favorites />;
                break;
        }

        return element
    }

    const itemsSideBar = [
        {name: 'Ver mapas', click: 'showMaps'},
        {name: 'Mapas reservados', click: 'reserved'},
        {name: 'Mapas favoritos', click: 'favorites'},
        {name: 'Historial', click: 'historial'},
    ]
  return (
    <div>
      <Navbar />
      <Sidebar itemsSideBar={itemsSideBar} setItemSelected={setItemSelected} itemSelected={itemSelected} />
      {elementSelected}
    </div>
  );
}

export default Home;
