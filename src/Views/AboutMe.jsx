import React from 'react';
import styled from 'styled-components';
import Left from '../components/aboutUsComp/Left';
import Up from '../components/aboutUsComp/Up';
import Right from '../components/aboutUsComp/Right';
import Down from '../components/aboutUsComp/Down';


function AboutMe({ checked }) {
  return (
    <>
      <div className="container ">
        <TitleText>
          <div className={` d-none d-lg-block ${!checked ? 'text-white' : 'text-primary-light'}`}>About Me</div>
        </TitleText>
        <Middle>
          <div id="" className="container" >
            <div className="row-board mt-5">
              <div className="top left"></div>
              <div className="top middle"><Up checked={checked}/> </div>
              <div className="top right"></div>
            </div>
            <div className="row-board">
              <div className="center left"><Left checked={checked} /></div>
              <div className="center middle"></div>
              <div className="center right"><Right checked={checked}/></div>
            </div>
            <div className="row-board">
              <div className="bottom left"></div>
              <div className="bottom middle"><Down checked={checked}/></div>
              <div className="bottom right"></div>
            </div>
          </div>
        </Middle>
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
left: -11%;
font-weight: bold;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 2px;
`

const Middle = styled.div`
#board {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* all 9 cells */
.row-board > div {
  float: left;
    height: 100px;
    width: 100px;
    font-size: 75px;
}

.row-board {
  clear: both;
  margin: 0 auto;
  width: 302px;
}

`

export default AboutMe;