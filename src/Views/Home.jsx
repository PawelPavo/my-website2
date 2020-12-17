import React from 'react';
import styled from 'styled-components';

function Home({ checked }) {

    return (
        <PageStyle>
            <div className=" hero-image">
                <TitleText>
                    <div className={`d-none d-lg-block ${!checked ? 'text-white' : 'text-primary-light'}`}>Home</div>
                </TitleText>
                <div className="row text-center mt-5">
                    <div className={`display-4 ${checked ? 'text-white' : 'text-primary-light'}`}>This is still work in progess.</div>
                    <div className="my-5">
                        <img
                            src={!checked ? `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"}` : `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}`}
                            className=""
                            style={{ width: "160px", height: "auto " }}
                            alt="Pawel Eyes Open">
                        </img>
                    </div>
                </div>
            </div>
        </PageStyle>
    );
}

const PageStyle = styled.div`

`

const TitleText = styled.div`
transform: rotate(-90deg);
display: inline-block;
margin-top: 17%;
position: fixed;
font-size: 5rem;
left: -5% !important;
font-weight: bold;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 1px;
`



export default Home;