import React from 'react'
import styled from 'styled-components';


function Down({ checked }) {

    return (
        <>
            <DownStyles>
                <div className={`${!checked ? 'text-yellow openbtn-light' : 'text-orange openbtn-dark'}`}>
                    <div className="chevron">
                        <a href={process.env.PUBLIC_URL + '#/my-website2/home'} className={`${!checked ? 'text-yellow' : 'text-orange'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div id="down" className="">

                </div>
            </DownStyles>
        </>
    )

}

const DownStyles = styled.div`
a {
    text-decoration: none;
}
//LIGHT Buttom
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

export default Down;