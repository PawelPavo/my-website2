import React from 'react'
import styled from 'styled-components';
import { CgClose } from "react-icons/cg"

function openNav() {
    document.getElementById("left").style.width = "100%";
}
function closeNav() {
    document.getElementById("left").style.width = "0%";
}

function Left({ checked }) {

    return (
        <LeftStyles>
            <div onClick={openNav} className={`${!checked ? 'text-yellow openbtn-light' : 'text-orange openbtn-dark'}`}>
                <div className="chevron">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
            </div>
            <div id="left" className="overlay">
                <div className="closebtn text-off-white" onClick={closeNav}><CgClose /> close</div>
                <div className={`p-5 overlay-content-left ${!checked ? 'overlay-content-left text-off-white' : 'overlay-content-left text-yellow'}`} style={{ fontFamily: "Ubuntu" }}>
                    Hello, My name is Pawel and I am a software developer with a background in healthcare administration. I am originally from Poland but immigrated to the US when I was 10 years old and lived in cities such as New York, West Palm Beach and Fort Lauderdale.
                </div>
            </div>
        </LeftStyles>
    )

}

const LeftStyles = styled.div`
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(74,124,172);
  background-color: rgba(74,124,172, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content-left {
  position: relative;
  top: 25%;
  margin-top: 30px;
  letter-spacing: 2px;
  font-size: 17px;
  border-bottom: solid 1px;
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
//LIGHT Buttom
.openbtn-light {
    border-radius: 80px;
    background: linear-gradient(145deg, #fdffff, #d4d7dc);
    box-shadow:  22px 22px 46px #636466, -22px -22px 46px #ffffff;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.openbtn-light:hover {
    transform: scale(0.96);
    background: linear-gradient(145deg, #fdffff, #d4d7dc);
    box-shadow:  22px 22px 16px #636466, -22px -22px 16px #ffffff;
}

//DARK button
.openbtn-dark {
    border-radius: 80px;
    background: linear-gradient(145deg, #50687a, #445767);
    box-shadow:  -18px -18px 70px #202930, -18px -18px 70px #7799b4;
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.openbtn-dark:hover {
    transform: scale(0.96);
    background: linear-gradient(145deg, #50687a, #445767);
    box-shadow:  22px 22px 16px #202930, -22px -22px 46px #7799b4;
}

.chevron {
    filter: drop-shadow(0.10rem 0.10rem 0.1rem rgba(0, 0, 0, 0.5));
}

@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
  font-size: 40px;
  top: 15px;
  right: 35px;
  }
}

`

export default Left;