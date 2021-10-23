import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar = (props) => {

    const { itemsSideBar, setItemSelected, itemSelected } = props;
    const [ collapsed, setCollapsed ] = useState(false);

    return(
        <ProSidebar collapsed={collapsed} style={{display: "inline-block", height: "90vh", verticalAlign: "top", minWidth: "5%", maxWidth: "20%"}}>
            <Menu iconShape="square">
                <MenuItem onClick={()=> {setCollapsed(!collapsed)}}>
                    {
                        collapsed ? (
                            <FontAwesomeIcon icon={faChevronRight} style={{float: "right"}} />
                        ) :
                        (
                            <FontAwesomeIcon icon={faChevronLeft} style={{float: "right"}} />
                        )
                    }
                </MenuItem>
                {
                    itemsSideBar &&
                    itemsSideBar.map((item, i) => {
                        return(
                            <MenuItem active={item.click == itemSelected ? true : false} key={i} onClick={()=> {setItemSelected(item.click)}}>{item.name}</MenuItem>
                        )
                    })
                }
                {/* <SubMenu title="Components" >
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                </SubMenu> */}
            </Menu>
        </ProSidebar>
    )
}

export default Sidebar;