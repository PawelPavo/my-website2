import React from 'react';
import styled from 'styled-components';


function Home({ checked }) {


    return (
        <>
            <div className="min-vh-100 row justify-content-center">
                <TitleText>
                    <div className={`d-none d-lg-block ${!checked ? 'text-off-white' : 'text-primary-light'}`}>Contact</div>
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
left: -10%;
font-weight: bold;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 2px;

`

export default Home;