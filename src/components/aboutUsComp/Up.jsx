import React from 'react'
import styled from 'styled-components';
import { CgClose } from "react-icons/cg"

function openNav() {
    document.getElementById("up").style.height = "100%";
}
function closeNav() {
    document.getElementById("up").style.height = "0%";
}



function Up({ checked }) {

    return (
        <>
            <UpStyles>
                <div onClick={openNav} className={`${!checked ? 'text-yellow openbtn-light' : 'text-orange openbtn-dark'}`}>
                    <div className="chevron">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 14.5l7-7 7 7" />
                        </svg>
                    </div>
                </div>
                <div id="up" className="overlay">
                    <div className="closebtn text-white" onClick={closeNav}><CgClose /> close</div>
                    <div className={`p-5 overlay-content-Right ${!checked ? 'overlay-content-Right text-off-white' : 'overlay-content-Right text-yellow'}`} style={{ fontFamily: "Ubuntu" }}>
                        <p>In my free time, I enjoy researching and investing in the stock market, while maybe sipping on a Jai Alai, my favorite beer. And in the background, I’ll have a soccer match playing. I also enjoy going out to different restaurants trying to find the best fried calamari with my girlfriend, who created my awesome avatar … by the way!</p>
                    </div>
                </div>
            </UpStyles>
        </>
    )

}

const UpStyles = styled.div`
.overlay {
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(141,86,213);
  background-color: rgba(141,86,213, 0.9);
  overflow-y: hidden;
  transition: 0.5s;
}

.overlay-content-Right {
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
    box-shadow:  18px 18px 70px #202930, -18px -18px 70px #7799b4;
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
export default Up;
