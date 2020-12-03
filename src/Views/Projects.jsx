import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectsArray = [
    {
        id: 1,
        name: "XoloBooks",
        description: "A bookstore build with wix which includes full checkout, book inventory, as well as search bar. This project is build with customers directions and content. It is deployed with wix.",
        url: "https://www.xolobooks.com/",
        git:"https://github.com/PawelPavo",
    },
    {
        id: 2,
        name: "Wilton Drain Pro",
        description: "This site is made with Create React App with TypeScript. It uses a combination of Bootstrap and Styled-Components. It does not have a backend because it is deployed with github pages with multi-route solution.",
        url: "https://pawelpavo.github.io/WiltonDrainPro/#/WiltonDrainPro/",
        git: "https://github.com/PawelPavo/WiltonDrainPro"

    },
    {
        id: 3,
        name: "The Pathfinder",
        description: "This is a game built in collaboration with another developer using ReacJS with Bootstrap and Styled-Components. It is a fully functional game deployed with github pages.",
        url: "https://przekwas.github.io/help-pathfinder-pawel/",
        git: "https://github.com/PawelPavo/ThePathfinder"
    },
    {
        id: 4,
        name: "Stripe Payment",
        description: "This part of the website is built with Stripe payment processing platform. It is connected to the server through NodeJS with Express. Frontend is build with custom CSS and Bootstrap.",
        url: "https://mighty-fortress-59305.herokuapp.com/donate",
        git: "https://github.com/PawelPavo/searchBar/blob/master/src/client/pages/Donate.tsx"

    },
    {
        id: 5,
        name: "Who Gives A Sock",
        description: "This site is made for a NYC charity organization. It is build with ReactJS along with Booystrap. Backend is powered by NodeJS with Express with SQL database. Deployed with heroku.",
        url: "https://floating-retreat-73992.herokuapp.com/",
        git: "https://github.com/PawelPavo/Portfolio-Infinite-Scroll"

    },
    {
        id: 6,
        name: "Splash Page Mock",
        description: "This site is made with ReactJS, TypeScript without any routes. It is styled with Bootstrap, custom CSS and Styled-Components. It is made with anchor tag navigation. The site uses heroku for deploynment.",
        url: "https://secret-ravine-28184.herokuapp.com/",
        git: "https://github.com/PawelPavo/my-site-2"

    },
    {
        id: 7,
        name: "Single Scroll Mock",
        description: "This site is made with ReactJS, TypeScript without any routes. It is styled with Bootstrap, custom CSS and Styled-Components. It is made with anchor tag navigation. The site uses heroku for deploynment.",
        url: "https://floating-retreat-73992.herokuapp.com/",
        git: "https://github.com/PawelPavo/Portfolio-Infinite-Scroll"

    },
];

function Projects({checked}) {


    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <h1 className="display-4 my-5">Projects!</h1>
                </div>

                <div className="row justify-content-center">
                    {ProjectsArray.map(project => (
                        <ProjectCard key={project.name} project={project} checked={checked}/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;