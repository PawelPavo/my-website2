import React from 'react';
import styled from 'styled-components';

function Home(props) {
    return (
        <>
            <Overlay>
                <div className="container">
                    <TitleText>
                        <div className={`d-none d-lg-block ${!props.checked ? 'text-off-white' : 'text-primary-light'}`}>Home</div>
                    </TitleText>
                </div>
                <div className="container">

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
left: -5%;
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