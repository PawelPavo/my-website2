import React from 'react';
import styled from 'styled-components';
import Left from '../components/aboutUsComp/Left';
import Up from '../components/aboutUsComp/Up';
import Right from '../components/aboutUsComp/Right';
import Down from '../components/aboutUsComp/Down';
import DownPage from '../components/aboutUsComp/DownPage';


function AboutMe({ checked }) {
  return (
    <>
      <div className="container min-vh-100">
        <TitleText>
          <div className={` row d-none d-lg-block ${!checked ? 'text-white' : 'text-primary-light'}`}>About Me</div>
        </TitleText>
        <Middle>
          <div id="about" className="min-vh-100 d-flex justify-content-center align-items-center" style={{marginTop:"-25px"}}>
            <div className="row justify-content-center">
              <div className="col-auto">
                <div className="box"><Up checked={checked} /> </div>
              </div>
              <div className="row justify-content-around">
                <div className="col-auto">
                  <div className="box"><Left checked={checked} /></div>
                </div>
                <div className="col-auto">
                  <div className="box"><Right checked={checked} /></div>
                </div>
              </div>
              <div className="col-auto">
                <div className="box"><Down checked={checked} /></div>
              </div>
            </div>
          </div>
        </Middle>
      </div>
      <DownPage checked={checked} />
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
.box {
    height: 100px;
    width: 100px;
}

`

export default AboutMe;