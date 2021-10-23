import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Maps from './Maps';
import MapsReserve from './mapsReserve/MapsReserve';
import Sidebar from '../Sidebar';

function Admin() {

    const [ itemSelected, setItemSelected ] = useState('maps');
    const [ elementSelected, setElementSelected ] = useState(null);

    const itemsSideBar = [
        {name: 'Mapas', click: 'maps'},
        {name: 'Mapas prestados', click: 'borrowed'},
        {name: 'Reservar', click: 'reserve'},
    ]

    useEffect(() => {
        console.log(itemSelected);
        setElementSelected(itemSelectedSwitch(itemSelected));
    }, [itemSelected])

    const itemSelectedSwitch = (key) => {
        let element;
        switch (key) {
            case 'maps':
                element = <Maps />;
                break;
            case 'reserve':
                element = <MapsReserve />;
                break;
        }

        return element
    }

  return (
    <div>
      <Navbar />
      <Sidebar itemsSideBar={itemsSideBar} setItemSelected={setItemSelected} itemSelected={itemSelected} />
      {elementSelected}
    </div>
  );
}

export default Admin;
