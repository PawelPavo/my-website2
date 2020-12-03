import React from 'react';
import ProjectCard from '../components/ProjectCard';

const ProjectsArray = [
    {
        id: 1,
        name: "XoloBooks",
        description: "A bookstore build with wix which includes full checkout, book inventory, as well as search bar. This project is build with customers directions and content.",
        url: "https://www.xolobooks.com/"
    },
    {
        id: 2,
        name: "We Work With You",
        description: "We care about our clients! We take the time to show you the ins and outs of your website so you have control over your online business. Of course we are always there to help if you need!",
    },
    {
        id: 3,
        name: "Responsive",
        description: "With over 60% of website traffic coming from mobile devices, having a responsive website is a must! All our websites come mobile-ready to provide the best user experience.",
    },
    {
        id: 4,
        name: "SEO-Friendly",
        description: "SEO (Search Engine Optimization) is an important part of digital marketing! While we provide ProjectsArray to optimize your web marketing, our websites come standard with SEO coding.",
    },
    {
        id: 5,
        name: "Web Managment",
        description: "We make web management simple. Whether your business already has a website, or you’re taking your first steps toward doing business online.",
    },
    {
        id: 6,
        name: "Grapihic Design",
        description: "A picture is worth a thousand words. Make sure your customers understand every single one of them.",
    },
];

function Projects({checked}) {


    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <h1 className="display-1">Projects!</h1>
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