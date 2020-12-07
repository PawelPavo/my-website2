import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import GoogleFontLoader from 'react-google-font-loader';
import { NavLink } from 'react-router-dom'
import Burger from '../components/burger/Burger'

function Navigation({ checked, handleTheme }) {
    const [open, setOpen] = React.useState(false);

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
                <nav className={`navbar navbar-expand-lg navbar-light fixed-top py-4 ${!checked ? 'bg-white' : 'bg-primary'}`}>
                    {/* <NavLink className="navbar-brand" to="/">
                    <img className=""
                        src={!checked ? `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"}` : `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}`}
                        alt="Pawel_Jaskolski" style={{ height: "65px", width: "auto" }} />
                </NavLink> */}
                    <div className="">
                        <ToggleSwitch checked={checked} handleTheme={handleTheme} id="test" />
                        <Burger className="" open={open} setOpen={setOpen} checked={checked} />
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav navbar-collapse" style={{ fontFamily: "Ubuntu" }}>
                            {/* <li className="nav-item ">
                            <NavLink className={`nav-link nav-text mx-5 ${!checked ? '' : 'text-light'}`} to="/">Home</NavLink>
                        </li> */}
                            <li className="nav-item" type="button" data-toggle="collapse" data-target="#navbarNav">
                                <NavLink className={`nav-link nav-text mx-5 ${!checked ? '' : 'text-light'}`} to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item" type="button" data-toggle="collapse" data-target="#navbarNav">
                                <NavLink className={`nav-link nav-text mx-5 ${!checked ? '' : 'text-light'}`} to="/projects">Projects</NavLink>
                            </li>
                            <li className="nav-item" type="button" data-toggle="collapse" data-target="#navbarNav">
                                <NavLink className={`nav-link nav-text mx-5 ${!checked ? '' : 'text-light'}`} to="/about">About Me</NavLink>
                            </li>
                            <li className="nav-item" type="button" data-toggle="collapse" data-target="#navbarNav">
                                <NavLink className={`nav-link nav-text mx-5 ${!checked ? '' : 'text-light'}`} to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }

    export default Navigation;