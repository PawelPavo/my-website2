import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styled from 'styled-components';

const ProjectsArray = [
    {
        id: 1,
        name: "XoloBooks",
        description: "A bookstore build with wix which includes full checkout, book inventory, as well as search bar. This project is build with customers directions and content. It is deployed with wix.",
        url: "https://www.xolobooks.com/",
        git: "https://github.com/PawelPavo",
        images: [{ source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png' }]
    },
    {
        id: 2,
        name: "Wilton Drain Pro",
        description: "This site is made with Create React App with TypeScript. It uses a combination of Bootstrap and Styled-Components. It does not have a backend because it is deployed with github pages with multi-route solution.",
        url: "https://pawelpavo.github.io/WiltonDrainPro/#/WiltonDrainPro/",
        git: "https://github.com/PawelPavo/WiltonDrainPro",
        images: [{ source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png' }, { source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png' }]
    },
    {
        id: 3,
        name: "The Pathfinder",
        description: "This is a game built in collaboration with another developer using ReacJS with Bootstrap and Styled-Components. It is a fully functional game deployed with github pages.",
        url: "https://przekwas.github.io/help-pathfinder-pawel/",
        git: "https://github.com/PawelPavo/ThePathfinder",
        images: [{ source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png' }, { source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png' }]
    },
    {
        id: 4,
        name: "Stripe Payment",
        description: "This part of the website is built with Stripe payment processing platform. It is connected to the server through NodeJS with Express. Frontend is build with custom CSS and Bootstrap.",
        url: "https://mighty-fortress-59305.herokuapp.com/donate",
        git: "https://github.com/PawelPavo/searchBar/blob/master/src/client/pages/Donate.tsx",
        images: [{ source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png' }, { source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png' }]
    },
    {
        id: 5,
        name: "Who Gives A Sock",
        description: "This site is made for a NYC charity organization. It is build with ReactJS along with Booystrap. Backend is powered by NodeJS with Express with SQL database. Deployed with heroku.",
        url: "https://floating-retreat-73992.herokuapp.com/",
        git: "https://github.com/PawelPavo/Portfolio-Infinite-Scroll",
        images: [{ source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png' }, { source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png' }]

    },
    {
        id: 6,
        name: "Splash Page Mock",
        description: "This site is made with ReactJS, TypeScript without any routes. It is styled with Bootstrap, custom CSS and Styled-Components. It is made with anchor tag navigation. The site uses heroku for deploynment.",
        url: "https://secret-ravine-28184.herokuapp.com/",
        git: "https://github.com/PawelPavo/my-site-2",
        images: [{ source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png' }, { source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png' }]
    },
    {
        id: 7,
        name: "Single Scroll Mock",
        description: "This site is made with ReactJS, TypeScript without any routes. It is styled with Bootstrap, custom CSS and Styled-Components. It is made with anchor tag navigation. The site uses heroku for deploynment.",
        url: "https://floating-retreat-73992.herokuapp.com/",
        git: "https://github.com/PawelPavo/Portfolio-Infinite-Scroll",
        images: [{ source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png' }, { source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png' }]
    },
    {
        id: 8,
        name: "Light/Dark Theme",
        description: "This site is made with ReactJS, TypeScript with CRUD routes hooked to MySQL. It is styled with Bootstrap, custom CSS along with Light and Dark theme toggle.",
        url: "https://damp-headland-11870.herokuapp.com/",
        git: "https://github.com/PawelPavo/resume_site",
        images: [{ source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png' }, { source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png' }]
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
                <div className="row" style={{ marginTop: "150px" }}>
                    {ProjectsArray.map(project => (
                        <div key={project.name} className="col-lg-4" >
                            <ProjectCard  project={project} checked={checked} />
                        </div>
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

export default Projects;