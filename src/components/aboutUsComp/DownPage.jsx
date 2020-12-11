import * as React from 'react';
import styled from 'styled-components';

const BioView = ({ checked }) => {

    return (
        <>
            <MainText>
                <div id="downPage" className="row min-vh-100 d-flex justify-content-center align-items-center bg-red shadow-lg" style={{ backgroundColor: "#721c28" }}>
                    <div className={`box ${!checked ? 'text-yellow openbtn-light' : 'text-orange openbtn-dark'}`}>
                        <div className="chevron">
                            <a href="#navBar" className={`${!checked ? 'text-yellow' : 'text-orange'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 18l8-8 8 8" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div id="up" className="row justify-content-center">
                        <div className={`col-md-8 text-justify ${checked ? 'text-white' : 'text-yellow'}`}>
                            <p >
                                I am an avid problem solver. I won’t give up until the problem in front of me is solved. I believe this quality is what makes me an excellent software developer. Not only do I want to find answers, but it’s important to me that I get a full understanding of what I am trying to solve. Along with my dedicated work ethic, I am a hardworking individual who brings passion and insight into everything I do. I have proven experience in leading a team and working with them towards finding the best solutions. I am hungry for building and fine-tuning more applications and learning new technologies along the way.
                            </p>
                        </div>
                    </div>
                </div>
            </MainText>
        </>
    )
}

const MainText = styled.div`
p {
    text-align: justify;
}

a {
    text-decoration: none;
}

.box {
    height: 115px;
    width: 115px;
}


.openbtn-light {
    border-radius: 80px;
    background: linear-gradient(145deg, #fdffff, #d4d7dc);
    box-shadow:  14px 14px 30px #636466, -22px -22px 46px #ffffff;
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
    transform: rotate(90deg);
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

export default BioView;