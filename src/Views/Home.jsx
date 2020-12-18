import React from 'react';
import styled from 'styled-components';
import GoogleFontLoader from 'react-google-font-loader';
import { Link } from 'react-router-dom'
import { FiSend } from 'react-icons/fi';

function Home({ checked }) {

    return (
        <PageStyle>
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Raleway',
                        weights: [200, '400i', 400],
                    },
                    {
                        font: 'Roboto',
                        weights: [100, '400i', 900],
                    },
                ]}
                subsets={['cyrillic-ext', 'greek']}
            />
            <div className="min-vh-100 d-flex justify-content-center align-items-center home">
                <div className="justify-content-center">
                    <div className="row justify-content-center">
                        <div className="col-auto text-white text-center">
                            <h1 className="font-weight-lighter name-box">Hello, I am <span className="name">Pawel Jaskolski</span>
                                <div className="">I'm a full-stack web developer.</div>
                            </h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto my-auto">
                            <Link to={process.env.PUBLIC_URL + '/projects'} className="">
                                <button type="button" className="border btn btn-md-lg btn-outline-orange rounded-pill px-5 py-3 blurrybtn">View My Work </button>
                            </Link>
                        </div>
                        <div className="col-auto my-auto">
                            <Link to={process.env.PUBLIC_URL + '/contact'} className="">
                                <button type="button" className="border btn btn-md-lg btn-outline-orange rounded-pill px-5 py-3 blurrybtn">Contact Me <FiSend /> </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </PageStyle>
    );
}

const PageStyle = styled.div`
.home {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1578532009320-10258506d6c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    animation: blink 2s linear 1;
}

.name-box {
    font-family: 'Raleway';
}
.name{
    color: #E36C4E;
    font-weight: 400;
    letter-spacing: 2px;
}

.blurrybtn {
    color: white;
    transition: 0.3s;
	background-color: rgba(227, 108, 78, .25);
    backdrop-filter: blur(0);
    letter-spacing: 2px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 15%;
}
.blurrybtn:hover {
	box-shadow: rgba(0, 0, 0, .9);	
	background-color: rgba(255, 255, 255, .8);
    backdrop-filter: blur(0);
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
    color: black;
    transform: translate(0, -5px);
}

`



export default Home;