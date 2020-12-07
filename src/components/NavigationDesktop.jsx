import React from 'react';
import styled from 'styled-components';
import ToggleSwitch from './ToggleSwitch';
import GoogleFontLoader from 'react-google-font-loader';
import Burger from './burger/Burger'
import { NavLink } from 'react-router-dom'

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
            <nav className={`navbar navbar-expand-lg navbar-light sticky-top py-4 ${!checked ? 'bg-white' : 'bg-primary'}`}>
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
                    <Test>
                        <ul className="navbar-nav " style={{ fontFamily: "Ubuntu" }}>
                            {/* <li className="nav-item ">
                            <NavLink className={`nav-link nav-text mx-5 ${!checked ? '' : 'text-light'}`} to="/">Home</NavLink>
                        </li> */}
                            <li className="nav-item ">
                                <NavLink className={` left nav-link nav-text mx-5 ${!checked ? 'menu-underline2' : 'text-light menu-underline'}`} to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={` left nav-link nav-text mx-5 ${!checked ? 'menu-underline2' : 'text-light menu-underline'}`} to="/projects">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={` left nav-link nav-text mx-5 ${!checked ? 'menu-underline2' : 'text-light menu-underline'}`} to="/about">About Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={` left nav-link nav-text mx-5 ${!checked ? 'menu-underline2' : 'text-light menu-underline'}`} to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </Test>
                </div>
            </nav>
        </>
    );
}

const Test = styled.div`
.menu-underline.left {
    position: relative !important;
}

.menu-underline.left:before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0px;
  background-color: #e9edf1;
  visibility: hidden;
  transition: all 0.5s ease-in-out;
}

.menu-underline.left:hover:before {
    visibility: visible;
    width: 100%;
}

.menu-underline2.left {
    position: relative !important;
}

.menu-underline2.left:before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0px;
  background-color: #4b6172;
  visibility: hidden;
  transition: all 0.5s ease-in-out;
}

.menu-underline2.left:hover:before {
    visibility: visible;
    width: 100%;
}

`

export default Navigation;