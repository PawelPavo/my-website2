import React from 'react';
import styled from 'styled-components';


function Home(props) {


    return (
        <>
            <div className="container">
                <TitleText>
                    <div className={`d-none d-lg-block ${!props.checked ? 'text-off-white' : 'text-primary-light'}`}>Home</div>
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
left: -4%;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 2px;

`

export default Home;