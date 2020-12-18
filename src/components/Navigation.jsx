import React from 'react';
import styled from 'styled-components';
import ToggleSwitch from './ToggleSwitch';
import GoogleFontLoader from 'react-google-font-loader';
import { NavLink } from 'react-router-dom'
import { CgMenuRight, CgClose } from "react-icons/cg"


function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function Navigation({ checked, handleTheme }) {
    return (
        <>
            <NavLayout>
                <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Ubuntu',
                            weights: [400, '400i'],
                        },
                    ]}
                    subsets={['cyrillic-ext', 'greek']}
                />
                <div id="navBar" className="row justify-content-between pt-3 px-4 fixed-top" >
                    {/* <div className="col-auto my-auto">
                        <ToggleSwitch checked={checked} handleTheme={handleTheme} />
                    </div> */}
                    <div className="col-auto text-end openbtn"
                        style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}><CgMenuRight /> open
                    </div>
                </div>
                <div id="myNav" className="overlay">
                    <div className="overlay-content" style={{ fontFamily: "Ubuntu" }}>
                        <NavLink onClick={closeNav} className={` left nav-link nav-text mx-5 ${!checked ? 'menu-underline2' : 'text-light menu-underline'}`} to={process.env.PUBLIC_URL + '/home'}>Home</NavLink>
                        <NavLink onClick={closeNav} className={` left nav-link nav-text mx-5 ${!checked ? 'menu-underline2' : 'text-light menu-underline'}`} to={process.env.PUBLIC_URL  + '/projects'}>Projects</NavLink>
                        <NavLink onClick={closeNav} className={` left nav-link nav-text mx-5 ${!checked ? 'menu-underline2' : 'text-light menu-underline'}`} to={process.env.PUBLIC_URL + '/about'}>About Me</NavLink>
                        <NavLink onClick={closeNav} className={` left nav-link nav-text mx-5 ${!checked ? 'menu-underline2' : 'text-light menu-underline'}`} to={process.env.PUBLIC_URL + '/contact'}>Contact</NavLink>
                    </div>
                </div>
            </NavLayout>
        </>
    );
}

const NavLayout = styled.div`
.overlay {
  height: 0;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: white;
  display: block;
  transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
  color: #E36C4E;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 30px;
  transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.closebtn:hover {
    opacity: 0.60;
}

.openbtn {
    color: white;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.openbtn:hover {
    opacity: 0.90;
    color: #E36C4E;
}

@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
  font-size: 40px;
  top: 15px;
  right: 35px;
  }
}

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