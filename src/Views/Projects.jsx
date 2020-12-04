import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { FaNodeJs } from "react-icons/fa"
import { SiJavascript, SiBootstrap, SiTypescript, SiReact, SiTailwindcss, SiMysql, SiCsswizardry, SiHtml5, SiGithub, SiWix } from "react-icons/si"


const ProjectsArray = [
    {
        id: 1,
        name: "XoloBooks",
        description: "A bookstore build with wix which includes full checkout, book inventory, as well as search bar. This project is build with customers directions and content. It is deployed with wix.",
        url: "https://www.xolobooks.com/",
        git: "https://github.com/PawelPavo",
        tech: "xolobooks"
    },
    {
        id: 2,
        name: "Wilton Drain Pro",
        description: "This site is made with Create React App with TypeScript. It uses a combination of Bootstrap and Styled-Components. It does not have a backend because it is deployed with github pages with multi-route solution.",
        url: "https://pawelpavo.github.io/WiltonDrainPro/#/WiltonDrainPro/",
        git: "https://github.com/PawelPavo/WiltonDrainPro",
        tech: "wilton"


    },
    {
        id: 3,
        name: "The Pathfinder",
        description: "This is a game built in collaboration with another developer using ReacJS with Bootstrap and Styled-Components. It is a fully functional game deployed with github pages.",
        url: "https://przekwas.github.io/help-pathfinder-pawel/",
        git: "https://github.com/PawelPavo/ThePathfinder",
        tech: "pathfinder"

    },
    {
        id: 4,
        name: "Stripe Payment",
        description: "This part of the website is built with Stripe payment processing platform. It is connected to the server through NodeJS with Express. Frontend is build with custom CSS and Bootstrap.",
        url: "https://mighty-fortress-59305.herokuapp.com/donate",
        git: "https://github.com/PawelPavo/searchBar/blob/master/src/client/pages/Donate.tsx",
        tech: "stripe"


    },
    {
        id: 5,
        name: "Who Gives A Sock",
        description: "This site is made for a NYC charity organization. It is build with ReactJS along with Booystrap. Backend is powered by NodeJS with Express with SQL database. Deployed with heroku.",
        url: "https://floating-retreat-73992.herokuapp.com/",
        git: "https://github.com/PawelPavo/Portfolio-Infinite-Scroll",
        tech: "wgas"


    },
    {
        id: 6,
        name: "Splash Page Mock",
        description: "This site is made with ReactJS, TypeScript without any routes. It is styled with Bootstrap, custom CSS and Styled-Components. It is made with anchor tag navigation. The site uses heroku for deploynment.",
        url: "https://secret-ravine-28184.herokuapp.com/",
        git: "https://github.com/PawelPavo/my-site-2",
        tech: "spalshPage"


    },
    {
        id: 7,
        name: "Single Scroll Mock",
        description: "This site is made with ReactJS, TypeScript without any routes. It is styled with Bootstrap, custom CSS and Styled-Components. It is made with anchor tag navigation. The site uses heroku for deploynment.",
        url: "https://floating-retreat-73992.herokuapp.com/",
        git: "https://github.com/PawelPavo/Portfolio-Infinite-Scroll",
        tech: "singleScroll"


    },
    {
        id: 8,
        name: "Light/Dark Theme",
        description: "This site is made with ReactJS, TypeScript with CRUD routes hooked to MySQL. It is styled with Bootstrap, custom CSS along with Light and Dark theme toggle.",
        url: "https://damp-headland-11870.herokuapp.com/",
        git: "https://github.com/PawelPavo/resume_site",
        tech: "lightDark"


    },
];

function Projects({ checked }) {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <TitleText>
                        <div className={`d-none d-lg-block ${!checked ? 'text-off-white' : 'text-primary-light'}`}>Projects</div>
                    </TitleText>
                </div>
                <IconsStyle>
                    <div className={`row justify-content-around my-5 fixed-top p-3 ${!checked ? 'bg-white': 'bg-primary'}`}style={{top: "50px"}}>
                        <IconContext.Provider value={{ style: { fontSize: '28px', opacity: "1" } }}>
                            <span id="javascript" className="icon wilton pathfinder stripe singleScroll lightDark" style={{ color: '#cdb22f' }}><SiJavascript /></span>
                            <span id ="react" className="icon wilton pathfinder stripe wgas spalshPage singleScroll lightDark" style={{ color: '#57d3f5' }}><SiReact /></span>
                            <span id="typescript" className="icon wilton wgas spalshPage singleScroll lightDark" style={{ color: '#007acc' }}><SiTypescript /></span>
                            <span id="nodejs" className="icon stripe spalshPage" style={{ color: '#7cc909' }}><FaNodeJs /></span>
                            <span id="github" className="icon pathfinder" style={{ color: '#404040' }}><SiGithub /></span>
                            <span id="bootstrap" className="icon wilton stripe wgas spalshPage lightDark" style={{ color: '#563493' }}><SiBootstrap /></span>
                            <span id="wix" className="icon xolobooks" style={{ color: '#f7c526' }}><SiWix /></span>
                            <span id="mysql" className="icon spalshPage" style={{ color: '#03648a' }}><SiMysql /></span>
                            <span id="tailwind" className="icon" style={{ color: '#42a3ad' }}><SiTailwindcss /></span>
                            <span id="css" className="icon pathfinder stripe wgas spalshPage singleScroll lightDark" style={{ color: '#016db3' }}><SiCsswizardry /></span>
                            <span id="html" className="icon stripe singleScroll" style={{ color: '#df4919' }}><SiHtml5 /></span>
                        </IconContext.Provider>
                    </div>
                </IconsStyle>
                <div className="row justify-content-center" >
                    {ProjectsArray.map(project => (
                        <ProjectCard key={project.name} project={project} checked={checked} />
                    ))}
                </div>
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
left: -11%;
font-weight: bold;
font-weight: bold;
text-transform: uppercase;
letter-spacing: 2px;

`
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

export default Projects;