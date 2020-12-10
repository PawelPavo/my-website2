import React from 'react';
import { IconContext } from "react-icons"
import { FaNodeJs } from "react-icons/fa"
import { SiJavascript, SiBootstrap, SiTypescript, SiReact, SiTailwindcss, SiMysql, SiCsswizardry, SiHtml5, SiGithub, SiWix } from "react-icons/si"

function CodeBar() {

    return (
        <>
            <div id="codeBar" className="d-flex flex-wrap">
                <IconContext.Provider value={{ style: { fontSize: '1.5rem', margin: '0.7rem' } }}>
                    <span id="javascript" className="icon" style={{ color: '#cdb22f' }}><SiJavascript /></span>
                    <span id="react" className="icon" style={{ color: '#57d3f5' }}><SiReact /></span>
                    <span id="typescript" className="icon" style={{ color: '#007acc' }}><SiTypescript /></span>
                    <span id="nodejs" className="icon" style={{ color: '#7cc909' }}><FaNodeJs /></span>
                    <span id="github" className="icon " style={{ color: '#404040' }}><SiGithub /></span>
                    <span id="bootstrap" className="icon" style={{ color: '#563493' }}><SiBootstrap /></span>
                    <span id="wix" className="icon" style={{ color: '#f7c526' }}><SiWix /></span>
                    <span id="mysql" className="icon" style={{ color: '#03648a' }}><SiMysql /></span>
                    <span id="tailwind" className="icon" style={{ color: '#42a3ad' }}><SiTailwindcss /></span>
                    <span id="css" className="icon" style={{ color: '#016db3' }}><SiCsswizardry /></span>
                    <span id="html" className="icon" style={{ color: '#df4919' }}><SiHtml5 /></span>
                </IconContext.Provider>
            </div>
        </>
    );
}



export default CodeBar;