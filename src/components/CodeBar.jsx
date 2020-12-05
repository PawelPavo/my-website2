import React from 'react';
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { FaNodeJs } from "react-icons/fa"
import { SiJavascript, SiBootstrap, SiTypescript, SiReact, SiTailwindcss, SiMysql, SiCsswizardry, SiHtml5, SiGithub, SiWix } from "react-icons/si"

function CodeBar({checked}) {

    return (
        <>
            <IconsStyle>
                <div className={`row justify-content-around fixed-top p-3 border ${!checked ? 'bg-white' : 'bg-primary'}`} style={{marginTop:"65px", zIndex:"1" }}>
                    <IconContext.Provider value={{ style: { fontSize: '28px', opacity: "1" } }}>
                        <span id="javascript" className="icon wilton pathfinder stripe singleScroll lightDark" style={{ color: '#cdb22f' }}><SiJavascript /></span>
                        <span id="react" className="icon wilton pathfinder stripe wgas spalshPage singleScroll lightDark xolobooks" style={{ color: '#57d3f5' }}><SiReact /></span>
                        <span id="typescript" className="icon wilton wgas spalshPage singleScroll lightDark" style={{ color: '#007acc' }}><SiTypescript /></span>
                        <span id="nodejs" className="icon stripe spalshPage" style={{ color: '#7cc909' }}><FaNodeJs /></span>
                        <span id="github" className="icon pathfinder" style={{ color: '#404040' }}><SiGithub /></span>
                        <span id="bootstrap" className="icon wilton stripe wgas spalshPage lightDark" style={{ color: '#563493' }}><SiBootstrap /></span>
                        <span id="wix" className="icon xolobooks" style={{ color: '#f7c526' }}><SiWix /></span>
                        <span id="mysql" className="icon spalshPage wgas" style={{ color: '#03648a' }}><SiMysql /></span>
                        <span id="tailwind" className="icon" style={{ color: '#42a3ad' }}><SiTailwindcss /></span>
                        <span id="css" className="icon pathfinder stripe wgas spalshPage singleScroll lightDark xolobooks" style={{ color: '#016db3' }}><SiCsswizardry /></span>
                        <span id="html" className="icon stripe singleScroll" style={{ color: '#df4919' }}><SiHtml5 /></span>
                    </IconContext.Provider>
                </div>
            </IconsStyle>
        </>
    );
}

const IconsStyle = styled.div`
.drop-shadow-2 {
    filter: drop-shadow(0.15rem 0.10rem 0.1rem rgba(0, 0, 0, 0.5));
}

.icon {
    transition: all .4s ease;
    -webkit-transition: all .4s ease;

}

.icon:hover {
    transform: scale(1.3);
    filter: drop-shadow(0.15rem 0.15rem 0.1rem rgba(0, 0, 0, 0.5));
    opacity: 1;
}

.newStyle {
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
    transform: scale(2);
    filter: drop-shadow(0.15rem 0.15rem 0.1rem rgba(0, 0, 0, 0.5));
    opacity: 1;



}

`


export default CodeBar;