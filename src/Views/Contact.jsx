import React from 'react';
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { GoLocation } from "react-icons/go"
import { FiMail, FiInstagram } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';


function Home({ checked }) {


    return (
        <>
            <div className="container">
                <TitleText>
                    <div className={`d-none d-lg-block ${!checked ? 'text-off-white' : 'text-primary-light'}`}>Contact</div>
                </TitleText>
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div className=" text-center border-0 rounded-0">
                                <div className="border-0 mt-4">
                                    <IconStyle>
                                        <IconContext.Provider value={{ style: { fontSize: '75px', opacity: "1" } }}>
                                            <small className={`drop-shadow ${!checked ? 'text-yellow' : 'text-orange'}`}><GoLocation /></small>
                                        </IconContext.Provider>
                                    </IconStyle>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Fort Lauderdale, FL</h5>
                                    <h6 className={`${!checked ? 'text-muted' : ''}`}>Want to connect about a project or just to chat... let me know.</h6>
                                </div>
                                <IconStyle>
                                    <IconContext.Provider value={{ style: { fontSize: '30px', opacity: "1" } }}>
                                        <div className="row justify-content-center border border-bottom-0 border-left-0 border-right-0 py-3">
                                            <h2 className="mr-5 icon">
                                                <a href="https://www.instagram.com/pifpavchio/" target="_blank" className={`drop-shadow-2 ${!checked ? 'text-primary' : 'text-orange'}`}><FiInstagram /></a>
                                            </h2>
                                            <h2 className="mx-5 icon">
                                                <a href="mailto:pjpavo@gmail.com?subject=I found your website and now..." target="_blank" className={`drop-shadow-2 ${!checked ? 'text-primary' : 'text-orange'}`}><FiMail /></a>
                                            </h2>
                                            <h2 className="ml-5 icon">
                                                <a href="https://www.linkedin.com/in/pawel-jaskolski-995323b3/" target="_blank" className={`drop-shadow-2 ${!checked ? 'text-primary' : 'text-orange'}`}><AiOutlineLinkedin /></a>
                                            </h2>
                                        </div>
                                    </IconContext.Provider>
                                </IconStyle>

                            </div>
                        </div>
                        <div className="col-md-5 order-sm-first" style={{ marginTop: "5%", filter: "grayscale(100%)" }}>
                            <iframe width="100%" height="450px" className="" title="map" src="https://maps.google.com/maps?q=Fort&Lauderdalet=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" allowFullScreen ></iframe>
                        </div>
                    </div>
                </div>
            </div>
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

const IconStyle = styled.div`
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

`

export default Home;