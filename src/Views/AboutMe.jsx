import React from 'react';
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { AiOutlineQuestion, AiOutlineTool } from "react-icons/ai"
import { DiCode } from "react-icons/di"

function AboutMe(props) {
  return (
    <>
      <div className="container ">
        <TitleText>
          <div className={` d-none d-lg-block ${!props.checked ? 'text-white' : 'text-primary-light'}`}>About Me</div>
        </TitleText>

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

export default AboutMe;