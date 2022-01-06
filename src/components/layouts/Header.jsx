import React from 'react';
import {NavLink } from 'react-router-dom';
import icon from '../../assets/img/logosmall.png';
import free from '../../assets/img/free.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    return (
        <>
            {
				(props.value === '') ? '' :
                <header className="main-header">
                    <a href="https://www.kelltontech.com/" className="logo">
                        <span className="logo-mini bg-white"><img src={icon} alt="Logo" /></span>
                        <span className="logo-title"><img height="45px" src={icon} alt="Icon" width="200px" /></span>
                    </a>
                    <nav className="navbar navbar-static-top">
                        <a href="void(0)" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                            <span className="sr-only">Toggle navigation</span>
                        </a>

                        <div className="navbar-custom-menu">
                            <NavLink style={{paddingRight: "50px", fontSize: "17px"}} exact to="/logout">
                            <FontAwesomeIcon icon={faQuestionCircle }/> &nbsp; Help </NavLink>
                            <NavLink style={{paddingRight: "50px", fontSize: "17px"}} exact to="/logout">
                            <FontAwesomeIcon icon={faRocket }/> &nbsp; Upgrade </NavLink>
                            <NavLink style={{paddingRight: "50px", fontSize: "17px"}} exact to="/logout">
                            <FontAwesomeIcon icon={faUser }/> &nbsp; [Name] </NavLink>
                            <NavLink style={{padding: "7px"}} exact to="/logout"><img height="40px" src={free} alt="Icon" width="70px" /> </NavLink>
                        </div>
                    </nav>
                    <nav className="navbar navbar-static-top">
                        <div className="navbar-custom-menu">
                            <NavLink style={{paddingRight: "789px", fontWeight: "bolder", fontSize: "25px", color: "#000000"}} exact to="/">Flowcode Analytics</NavLink>                        
                            <NavLink style={{paddingRight: "30px", fontWeight: "bolder", fontSize: "17px", color: "#0b43de"}} exact to="/">Today</NavLink>
                            <NavLink style={{paddingRight: "30px", fontWeight: "bolder", fontSize: "17px", color: "#0b43de"}} exact to="/">Filter </NavLink>
                            <NavLink style={{fontSize: "17px", fontWeight: "bolder", color: "#0b43de"}} exact to="/logout">Export </NavLink>
                        </div>
                    </nav>
                </header>
            }
        </>
    );
}

export default Header;