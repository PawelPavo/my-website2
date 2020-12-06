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
                    <div className='container'>
                        <div className="container_content">
                            <div className="container_content_inner">
                                <div className="title">
                                    <h1>Hello World</h1>
                                </div>
                                <div className="par">
                                    <p>
                                        Cupiditate alias odio omnis minima veritatis saepe porro, repellendus natus vitae, sequi exercitationem ipsam, qui possimus sit eveniet laborum sapiente quisquam quae neque velit?
                                    </p>
                                </div>
                                <div className="btns">
                                    <button className='btns_more'> See more </button>
                                </div>
                            </div>
                        </div>
                        <div className="container_outer_img">
                            <div className="img-inner">
                                <img src='https://images.unsplash.com/photo-1517911041065-4960862d38f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80' alt="" className="container_img" />
                            </div>
                        </div>
                    </div>
                    <div className="overlay"></div>
                </div>
            </PageStyles>
        </>
    );
}

const PageStyles = styled.div`
.container_outer_img {
  margin: 50px;
  width: 50%;
}   
    
.container_img {
  width: 100%;
  animation: slideIn 1.5s ease-in-out forwards;
}

.par {
  height: auto;
  overflow: hidden;
}

p {
  transform: translateY(300px);
  animation: slideUp .8s ease-in-out forwards .8s;
}

.btns {
  height: 100%;
  position: relative;
  width: 150px;
  overflow: hidden;
}

.btns_more {
  background: transparent;
  border: 1px solid var(--contrast-color);
  border-radius: 50px;
  padding: 8px 12px;
  color: #BF307F;
  font-size: 16px;
  text-transform: uppercase;
  position: relative;
  margin-top: 15px;
  outline: none;
  transform: translateY(50px);
  animation: slideUp .8s ease-in-out  forwards 1s;
}

.title {
  overflow: hidden;
  height: auto;
}

h1 {
    transform: translateY(100px);
    animation: slideUp .8s ease forwards .5s;
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
left: -5%;
font-weight: bold;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 2px;

`

export default Home;