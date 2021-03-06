import React from 'react';
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { GoLocation } from "react-icons/go"
import { FiMail, FiInstagram } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';


function Home({ checked }) {


    return (
        <>
            <PageStyle>
                <div className="container ">
                    <TitleText>
                        <div className={` d-none d-lg-block ${!checked ? 'text-white' : 'text-primary-light'}`}>Contact</div>
                    </TitleText>
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div className=" text-center border-0 rounded-0">
                                    <div className="border-0">
                                        <IconContext.Provider value={{ style: { fontSize: '75px', opacity: "1" } }}>
                                            <div className="fade_effect">
                                                <small className={`container_img drop-shadow ${!checked ? 'text-yellow' : 'text-orange'}`}><GoLocation /></small>
                                            </div>
                                        </IconContext.Provider>
                                    </div>
                                    <div className="card-body custom_effects">
                                        <h5 className="slide-1 card-title">Fort Lauderdale, FL</h5>
                                        <h6 className={` slide-2 ${!checked ? 'text-muted' : ''}`}>Want to connect about a project or just to chat... let me know.</h6>
                                    </div>
                                    <hr class="my-4"/>
                                    <IconContext.Provider value={{ style: { fontSize: '30px', opacity: "1" } }}>
                                        <div className="row justify-content-center">
                                            <h2 className="col icon slide-1">
                                                <a href="https://www.instagram.com/pifpavchio/" rel="noreferrer" target="_blank" className={`drop-shadow-2 ${!checked ? 'text-primary' : 'text-orange'}`}><FiInstagram /></a>
                                            </h2>
                                            <h2 className="col icon slide-2">
                                                <a href="mailto:pjpavo@gmail.com?subject=I found your website and now..." rel="noreferrer" target="_blank" className={`drop-shadow-2 ${!checked ? 'text-primary' : 'text-orange'}`}><FiMail /></a>
                                            </h2>
                                            <h2 className="col icon slide-3">
                                                <a href="https://www.linkedin.com/in/pawel-jaskolski-995323b3/" rel="noreferrer" target="_blank" className={`drop-shadow-2 ${!checked ? 'text-primary' : 'text-orange'}`}><AiOutlineLinkedin /></a>
                                            </h2>
                                        </div>
                                    </IconContext.Provider>
                                </div>
                            </div>
                            <div className="col-md-5 order-md-first" style={{ marginTop: "5%", filter: "grayscale(100%)" }}>
                                <iframe width="100%" height="450px" className="" title="map" src="https://maps.google.com/maps?q=Fort&Lauderdalet=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" allowFullScreen ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </PageStyle>
        </>
    );
}

const TitleText = styled.div`
transform: rotate(-90deg);
display: inline-block;
margin-top: 25%;
position: fixed;
font-size: 5rem;
left: -10%;
font-weight: bold;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 2px;
`

const PageStyle = styled.div`
.drop-shadow {
    filter: drop-shadow(0.15rem 0.15rem 0.1rem rgba(0, 0, 0, 0.5));
}

.drop-shadow-2 {
    filter: drop-shadow(0.15rem 0.10rem 0.1rem rgba(0, 0, 0, 0.5));

}

.icon {
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.icon:hover {
    transform: scale(1.3);
    filter: drop-shadow(0.15rem 0.15rem 0.1rem rgba(0, 0, 0, 0.5));
    opacity: 1;
}

.custom_effects {
  overflow: hidden;
  height: auto;
}

.slide-1 {
  transform: translateY(1000px);
  animation: slideUp 1.5s ease-in-out forwards .5s;
  position: relative;
    overflow: hidden;
}

.slide-2 {
    transform: translateY(1000px);
    animation: slideUp 1.5s ease forwards 0.75s;
    position: relative;
    overflow: hidden;
}

.slide-3 {
  transform: translateY(1000px);
  animation: slideUp 1.5s ease-in-out forwards 1s;
  position: relative;
    overflow: hidden;
}

.fade_effect{
  animation: blink 3s linear infinite;
}

@keyframes blink{
0%{opacity: 0.1;}
25%{opacity: .5;}
50%{opacity: 1;}
75%{opacity: .5;}
100%{opacity: 0.1;}
}

@keyframes slideIn {
  0% {
    transform: translateX(500px) scale(.2);
  }
  100% {
    transform: translateX(0px) scale(1);
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(1000px);
  }
  100% {
    transform: translateY(0px);
  }
}


`

export default Home;