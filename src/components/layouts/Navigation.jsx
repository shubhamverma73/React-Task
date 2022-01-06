import React from 'react';
import {NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser  } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle  } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faBarcode } from '@fortawesome/free-solid-svg-icons';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import '../../assets/css/skin-purple.css';
import '../../assets/css/skin-blue.css';
import '../../assets/css/skin-green.css';
import '../../assets/iCheck/square/green.css';

const Navigation = () => {

    return (    
        <>
            <div>
                <aside className="main-sidebar">
                    <section className="sidebar bg-img">

                        <div className="user-panel">
                            <div className="pull-left image">
                                <p></p>
                            </div>
                            <div className="pull-left info" style={{paddingBottom: "5px"}}>
                                <p className="user_name"><FontAwesomeIcon style={{color: "blue"}} icon={faPlusCircle }/>&nbsp; 
                                Create &nbsp;<FontAwesomeIcon icon={faAngleDown }/> </p>
                            </div>
                        </div>
                        <hr/>

                        <ul className="sidebar-menu text-left">
                            <span style={{paddingLeft: "15px"}}>Codes & Pages</span>
                            <li className="menu-alignment">
                                <NavLink className="nav-link" exact to="/"><FontAwesomeIcon icon={faUser }/>&nbsp; Flowcode </NavLink>
                            </li>
                            <li className="menu-alignment">
                                <NavLink className="nav-link" exact to="/rso"><FontAwesomeIcon icon={faUser }/>&nbsp; Flowpages </NavLink>
                            </li>
                            <li className="menu-alignment">
                                <NavLink className="nav-link" exact to="/ticket"><FontAwesomeIcon icon={faFolder }/>&nbsp; Folders <FontAwesomeIcon icon={faAngleDown }/></NavLink>
                            </li>                            
                        </ul>
                        <hr/>
                        <ul className="sidebar-menu text-left">
                            <span style={{paddingLeft: "15px"}}>Tools</span>
                            <li className="menu-alignment">
                                <NavLink className="nav-link" exact to="/"><FontAwesomeIcon icon={faBarcode }/>&nbsp; Analytics </NavLink>
                            </li>
                            <li className="menu-alignment">
                                <NavLink className="nav-link" exact to="/rso"><FontAwesomeIcon icon={faFileImage }/>&nbsp; Tamplates </NavLink>
                            </li>
                            <li className="menu-alignment">
                                <NavLink className="nav-link" exact to="/ticket"><FontAwesomeIcon icon={faVideo }/>&nbsp; Video Tools </NavLink>
                            </li>                            
                        </ul>
                    </section>
                </aside>
            </div>
        </>
    );
}

export default Navigation;