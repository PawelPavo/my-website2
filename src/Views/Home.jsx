import React from 'react';
import styled from 'styled-components';

function Home(props) {

    return (
        <PageStyle>
            <div className=" hero-image">
                <TitleText>
                    <div className={`d-none d-lg-block ${!props.checked ? 'text-white' : 'text-primary-light'}`}>Home</div>
                </TitleText>

            </div>
        </PageStyle>
    );
}

const PageStyle = styled.div `
.hero-image {
    background-image: url("https://images.unsplash.com/photo-1415025148099-17fe74102b28?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2640&q=80");
}

`

const TitleText = styled.div`
transform: rotate(-90deg);
display: inline-block;
margin-top: 25%;
position: fixed;
font-size: 5rem;
left: -5% !important;
font-weight: bold;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 2px;
`



export default Home;