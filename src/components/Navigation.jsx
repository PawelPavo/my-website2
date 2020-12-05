import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import GoogleFontLoader from 'react-google-font-loader';
import { NavLink } from 'react-router-dom'

function Navigation({ checked, handleTheme }) {

    return (
        <>
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Ubuntu',
                        weights: [400, '400i'],
                    },
                ]}
                subsets={['cyrillic-ext', 'greek']}
            />
            <nav className={`navbar navbar-expand-lg navbar-light sticky-top ${!checked ? 'bg-white' : 'bg-primary'}`}>
                {/* <NavLink className="navbar-brand" to="/">
                    <img className=""
                        src={!checked ? `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"}` : `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}`}
                        alt="Pawel_Jaskolski" style={{ height: "65px", width: "auto" }} />
                </NavLink> */}
                <ToggleSwitch checked={checked} handleTheme={handleTheme} className="mx-auto" />
                <button className={`navbar-toggler ${!checked ? 'bg-off-white' : 'bg-white'}`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav" style={{ fontFamily: "Ubuntu" }}>
                        <li className="nav-item ">
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