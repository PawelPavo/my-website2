import React from 'react';
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { AiOutlineQuestion, AiOutlineTool } from "react-icons/ai"
import { DiCode } from "react-icons/di"

function AboutMe(props) {
    return (
        <PageStyles>
            <div className="min-vh-100 container mb-5" style={{ marginTop: "100px" }}>
                <div className="row justify-content-center">
                    <TitleText>
                        <div className={`d-none d-lg-block ${!props.checked ? 'text-off-white' : 'text-primary-light'}`}>About Me</div>
                    </TitleText>
                </div>
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-8 my-auto text-justify custom_effects">
                            <p className={` slide-1 ${!props.checked ? 'text-muted' : ''}`}>
                                Hello, My name is Pawel and I am a software developer with a background in healthcare administration. I was always interested in how the software works and the code behind it. I decided that I wanted to shift my focus onto a new career path and dedicated my time to becoming a software developer.
                                </p>
                            <div className="text-right">
                                <p className="slide-2">
                                    <a
                                        className={`resume ${!props.checked ? 'text-yellow' : 'text-orange'}`}
                                        href="https://news-api.s3.us-east-2.amazonaws.com/Pawel+SoftDev+Resume+August+20+AWS.pdf"
                                        target="_blank" rel="noreferrer">
                                        My Resume
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center container_img">
                            <IconContext.Provider value={{ style: { fontSize: '200px', opacity: "1" } }}>
                                <small className={`drop-shadow ${!props.checked ? 'text-yellow' : 'text-orange'}`}><DiCode /></small>
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-8 my-auto text-justify custom_effects">
                            <p className={`slide-3 ${!props.checked ? 'text-muted' : ''}`}>
                                I am an avid problem solver. I won’t give up until the problem in front of me is solved. I believe this quality is what makes me an excellent software developer. Not only do I want to find answers, but it’s important to me that I get a full understanding of what I am trying to solve.
                                </p>
                        </div>
                        <div className="col-md-4 text-center container_img order-md-first">
                            <IconContext.Provider value={{ style: { fontSize: '200px', opacity: "1" } }}>
                                <small className={`drop-shadow ${!props.checked ? 'text-yellow' : 'text-orange'}`}><AiOutlineQuestion /></small>
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-8 my-auto text-justify custom_effects">
                            <p className={`slide-4 ${!props.checked ? 'text-muted' : ''}`}>
                                Along with my dedicated work ethic, I am a hardworking individual who brings passion and insight into everything I do. I have proven experience in leading a team and working with them towards finding the best solutions. I am hungry for building and fine-tuning more applications and learning new technologies along the way.
                                </p>
                        </div>
                        <div className="col-md-4 text-center container_img">
                            <IconContext.Provider value={{ style: { fontSize: '175px', opacity: "1" } }}>
                                <small className={`drop-shadow ${!props.checked ? 'text-yellow' : 'text-orange'}`}><AiOutlineTool /></small>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </PageStyles>
    );
}

const PageStyles = styled.div`
.drop-shadow {
    filter: drop-shadow(0.15rem 0.15rem 0.2rem rgba(0, 0, 0, 0.5));
}

.resume {
    text-decoration: none;
}
    
.custom_effects {
  overflow: hidden;
  height: auto;
}

.container_img {
  width: 100%;
  animation: slideIn 2s ease-in-out forwards;
}

.slide-1 {
  transform: translateY(300px);
  animation: slideUp .8s ease-in-out forwards .5s;
}

.slide-2 {
    transform: translateY(300px);
    animation: slideUp .8s ease forwards 1s;
}

.slide-3 {
  transform: translateY(300px);
  animation: slideUp .8s ease-in-out forwards 1.5s;
}

.slide-4 {
    transform: translateY(300px);
    animation: slideUp .8s ease forwards 2s;
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
    transform: translateY(300px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes expand {
  0% {
    transform: translateX(1400px);
  }
  100% {
    transform: translateX(0px);
  }
}

`

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