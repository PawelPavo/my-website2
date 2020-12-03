import React from 'react';
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { AiOutlineQuestion, AiOutlineFieldTime } from "react-icons/ai"

function AboutMe(props) {
    return (
        <PageStyles>
            <div className="min-vh-100 container">
                <div className="row justify-content-center">
                    <TitleText>
                        <div className={`d-none d-lg-block ${!props.checked ? 'text-off-white' : 'text-primary-light'}`}>About Me</div>
                    </TitleText>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 my-auto">
                        <p>
                            I am an avid problem solver. I won’t give up until the problem in front of me is solved. I believe this quality is what makes me an excellent software developer. Not only do I want to find answers, but it’s important to me that I get a full understanding of what I am trying to solve. Along with my dedicated work ethic, I am a hardworking individual who brings passion and insight into everything I do. I have proven experience in leading a team and working with them towards finding the best solutions. I am hungry for building and fine-tuning more applications and learning new technologies along the way.
                            </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <IconContext.Provider value={{ style: { fontSize: '250px', opacity: "1" } }}>
                            <small className={`drop-shadow ${!props.checked ? 'text-yellow' : 'text-orange'}`}><AiOutlineQuestion /></small>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 my-auto">
                        <p>
                            In my free time, I enjoy researching and investing in the stock market, while maybe sipping on a Jai Alai, my favorite beer. And in the background, I’ll have a soccer match playing. I also enjoy going out to different restaurants trying to find the best fried calamari with my girlfriend, who created my awesome avatar … by the way!
                            </p>
                    </div>
                    <div className="col-md-4 text-center order-sm-first">
                        <IconContext.Provider value={{ style: { fontSize: '250px', opacity: "1" } }}>
                            <small className={`drop-shadow ${!props.checked ? 'text-yellow' : 'text-orange'}`}><AiOutlineFieldTime /></small>
                        </IconContext.Provider>
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