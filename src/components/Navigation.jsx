import React from 'react';
import '../App.scss';
import ToggleSwitch from './ToggleSwitch';
import { NavLink } from 'react-router-dom'

function Navigation({ checked, handleTheme }) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-light sticky-top ${!checked ? 'bg-off-white': 'bg-primary-light' }`}>
                <NavLink className="navbar-brand" to="/">
                    <img className=""
                        src={!checked ? `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"}` : `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}`}
                        alt="Pawel_Jaskolski" style={{ height: "65px", width: "auto" }} />
                </NavLink>
                <ToggleSwitch checked={checked} handleTheme={handleTheme} className="mx-auto"/>
                <button className={`navbar-toggler ${!checked ? '' : 'bg-white'}`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav font-weight-light mx-auto" style={{ fontSize: "1.2rem" }}>
                        <li className="nav-item">
                            <NavLink className={`nav-link nav-text mx-5 ${!checked ? '' : 'text-light'}`} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link nav-text mx-5 ${!checked ? '' : 'text-light'}`} to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link nav-text mx-5 ${!checked ? '' : 'text-light'}`} to="/about">About Me</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link nav-text mx-5 ${!checked ? '' : 'text-light'}`} to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navigation;