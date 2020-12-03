import * as React from 'react'
import styled from 'styled-components';
import { CgArrowLongRight } from 'react-icons/cg'
import { IconContext } from "react-icons"


const ProjectCard = (props) => {
    return (
        <Layout2>
            <div className="col-md-4 my-5 my-auto">
                <div className={`"card border mb-5 card-hover rouded-0 " ${!props.checked ? '' : "bg-primary"}`}
                    style={{ width: "21rem", height: "17rem", borderTopLeftRadius: "25px", borderBottomRightRadius: "25px", borderTopRightRadius: "0", borderBottomLeftRadius: "0", position:"relative" }}>
                    <div className="card-body" >
                        <div className="card-title text-center name-text">{props.project.name}</div>
                        <p className="card-text text-center mb-3">{props.project.description}</p>
                    </div>
                    <a
                        target="_blank" href={props.project.url} rel="noreferrer"
                        className="text-center font-weight-light border px-3 py-2 border-bottom-0 border-right-0 bg-secondary"
                        style={{ position: "absolute", bottom: "0", right: "0", borderBottomRightRadius: "23px" }}>
                        <IconContext.Provider value={{ style: { fontSize: '20px', color: "white", opacity: "1" } }}>
                            <small className=""><CgArrowLongRight /></small>
                        </IconContext.Provider>
                    </a>
                </div>
            </div>
        </Layout2>
    )
}

const Layout2 = styled.div`
.drop-shadow {
    filter: drop-shadow(0.15rem 0.15rem 0.2rem rgba(0, 0, 0, 0.3));
}

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