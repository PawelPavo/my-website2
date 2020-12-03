import React from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiMail, FiGithub } from 'react-icons/fi';

function Footer(props) {


    return (
        <>
            <div className="row justify-content-center border border-bottom-0 border-left-0 border-right-0 py-3">
                <h2 className="mr-5">
                    <a href="https://github.com/PawelPavo?tab=repositories" rel="noreferrer" target="_blank" className={`${!props.checked ? 'text-yellow' : 'text-orange'}`}><FiGithub /></a>
                </h2>
                <h2 className="mx-5">
                    <a href="mailto:pjpavo@gmail.com" target="_blank" rel="noreferrer" className={`${!props.checked ? 'text-yellow' : 'text-orange'}`}><FiMail /></a>
                </h2>
                <h2 className="ml-5">
                    <a href="https://www.linkedin.com/in/pawel-jaskolski-995323b3/" rel="noreferrer" target="_blank" className={`${!props.checked ? 'text-yellow' : 'text-orange'}`}><AiOutlineLinkedin /></a>
                </h2>
            </div>
        </>
    );
}



export default Footer;