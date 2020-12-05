import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai"
import { IconContext } from "react-icons"
import Fade from 'react-reveal/Fade';

function Home(props) {
    const on = () => {
        document.getElementById("overlay").style.display = "block";
    }
    const off = () => {
        document.getElementById("overlay").style.display = "none";
    }

    return (
        <>
            <Overlay>
                <div className="container">
                    <TitleText>
                        <div className={`d-none d-lg-block ${!props.checked ? 'text-off-white' : 'text-primary-light'}`}>Home</div>
                    </TitleText>
                </div>
                <Fade>
                    <div id="overlay" onClick={off}>
                        <div className="col text-right mt-3">
                            <IconContext.Provider value={{ style: { fontSize: '40px', opacity: "1", filter: "drop-shadow(0.15rem 0.10rem 0.1rem rgba(0, 0, 0, 0.5))" } }}>
                                <small className={` ${!props.checked ? 'text-yellow' : 'text-orange'}`}><AiOutlineClose /></small>
                            </IconContext.Provider>
                        </div>
                        <div id="image">
                            <img src="https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png" alt="my_image" />
                            <div id="caption">title</div>
                        </div>
                    </div>
                </Fade>
                <div style={{ padding: "20px" }}>
                    <button onClick={on}>Turn on overlay effect</button>
                </div>
            </Overlay>
        </>
    );
}

const TitleText = styled.div`
transform: rotate(-90deg);
display: inline-block;
margin-top: 25%;
position: fixed;
font-size: 5rem;
left: -4%;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 2px;
`

const Overlay = styled.div`
#overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  display: none;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}

#image{
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
}

img {
    height: 50vh;
}
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  padding: 10px 0;
  height: 200px;
  font-weight: bold;
  letter-spacing: 2px;
}

`

export default Home;