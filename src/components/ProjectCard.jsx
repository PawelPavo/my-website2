import * as React from 'react'
import styled from 'styled-components';
import { CgArrowLongRight } from 'react-icons/cg'
import { IconContext } from "react-icons"
import { FiGithub, FiEye } from "react-icons/fi"


const ProjectCard = (props) => {
    return (
        <Layout2>
            <div className="col-md-4 my-5 my-auto">
                <div className={`card border mb-5 card-hover rouded-0  ${!props.checked ? 'border-muted bg-off-white' : "bg-primary-light"}`}
                    style={{ width: "21rem", height: "17rem", borderTopLeftRadius: "25px", borderBottomRightRadius: "25px", borderTopRightRadius: "0", borderBottomLeftRadius: "0", position: "relative" }}>
                    <div className="card-body" >
                        <div className="row justify-content-center">
                            <h4 className="mr-3">
                                <a href={props.project.git} className={`${!props.checked ? 'text-yellow' : 'text-orange'}`}><FiGithub /></a>
                            </h4>
                            <h4 className="ml-3">
                                <a href={props.project.git} className={`${!props.checked ? 'text-yellow' : 'text-orange'}`}><FiEye /></a>
                            </h4>
                        </div>
                        <div className="card-title text-center name-text">{props.project.name}</div>
                        <p className="card-text text-center mb-3">{props.project.description}</p>
                    </div>
                    <a
                        target="_blank" href={props.project.url} rel="noreferrer"
                        className="text-center font-weight-light border px-3 py-2 border-bottom-0 border-right-0 bg-primary"
                        style={{ position: "absolute", bottom: "0", right: "0", borderBottomRightRadius: "23px" }}>
                        <IconContext.Provider value={{ style: { fontSize: '20px', opacity: "1" } }}>
                            <small className={`${!props.checked ? 'text-yellow' : 'text-orange'}`}><CgArrowLongRight /></small>
                        </IconContext.Provider>
                    </a>
                </div>
            </div>
        </Layout2>
    )
}

const Layout2 = styled.div`


.card-hover {
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.name-text {
    letter-spacing: 2px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    
}

.card-hover:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
    opacity: 1;
  }

`

export default ProjectCard;