import React from 'react';
import styled from 'styled-components';

function Home(props) {

    return (
        <>
            <PageStyles>
                <div className="container" style={{ marginTop: "100px" }}>
                    <div className="row justify-content-center">
                        <TitleText>
                            <div className={`d-none d-lg-block ${!props.checked ? 'text-off-white' : 'text-primary-light'}`}>Home</div>
                        </TitleText>
                    </div>
                </div>
            </PageStyles>
        </>
    );
}

const PageStyles = styled.div`


`

const TitleText = styled.div`
transform: rotate(-90deg);
display: inline-block;
margin-top: 25%;
position: fixed;
font-size: 5rem;
left: -5%;
font-weight: bold;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 2px;

`

export default Home;