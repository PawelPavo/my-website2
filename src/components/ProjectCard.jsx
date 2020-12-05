import * as React from 'react'
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { FiGithub, FiEye, FiCamera } from "react-icons/fi"
import { FaTools } from "react-icons/fa"



const ProjectCard = (props) => {
    const handleTechUsed = () => {
        var node_list, techClass_list;
        node_list = document.querySelectorAll(`.${props.project.tech}`);
        for (techClass_list = 0; techClass_list < node_list.length; techClass_list++) {
            node_list[techClass_list].classList.toggle("newStyle");
        }
    }

    // const removeTechUsed = () => {
    //     var node_list, techClass_list;
    //     node_list = document.querySelectorAll(`.${props.project.tech}`);
    //     for (techClass_list = 0; techClass_list < node_list.length; techClass_list++) {
    //         node_list[techClass_list].classList.remove("newStyle");
    //     }
    //   }

    return (
        <Layout2>
            <div className="col-md-4 m-4 my-auto" style={{top: "95px"}}>
                <div className={`card border mb-5 card-hover rouded-0  ${!props.checked ? 'border-muted bg-off-white' : "bg-primary-light"}`}
                    style={{ width: "25rem", height: "20rem", borderTopLeftRadius: "25px", borderBottomRightRadius: "25px", borderTopRightRadius: "0", borderBottomLeftRadius: "0", position: "relative" }}>
                    <div className="card-body" >
                        <div className="row justify-content-center">
                            <h4 className="mr-4 icon">
                                <a href={props.project.git} rel="noreferrer" target="_blank" className={`${!props.checked ? 'text-yellow' : 'text-orange'}`}><FiGithub /></a>
                            </h4>
                            <h4 className="mx-4 icon">
                                {/* IMAGE GOES HERE WITH THE MOD */}
                                <a target="_blank" rel="noreferrer"  href={props.project.url} className={`${!props.checked ? 'text-yellow' : 'text-orange'}`}><FiCamera /></a>
                            </h4>
                            <h4 className="ml-4 icon">

                                <div onClick={handleTechUsed} className={`${!props.checked ? 'text-yellow' : 'text-orange'}`}><FaTools /></div>
                            </h4>
                        </div>
                        <div className={`card-title text-center name-text mt-2 pb-2${!props.checked ? '' : ''}`}>{props.project.name}</div>
                        <p className={`card-text text-center mt-3 ${!props.checked ? 'text-muted' : ''}`}>{props.project.description}</p>
                    </div>
                    <a
                        target="_blank" href={props.project.url} rel="noreferrer"
                        className="text-center font-weight-light border px-3 py-2 border-bottom-0 border-right-0 bg-primary icon"
                        style={{ position: "absolute", bottom: "0", right: "0", borderBottomRightRadius: "23px" }}>
                        <IconContext.Provider value={{ style: { fontSize: '20px', opacity: "1", filter: "drop-shadow(0.15rem 0.10rem 0.1rem rgba(0, 0, 0, 0.5))" } }}>
                            <small className={`${!props.checked ? 'text-yellow' : 'text-orange'}`}><FiEye /></small>
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
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
    opacity: 1;
}

.name-text {
    letter-spacing: 2px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: solid 1px;
}

.card-hover:hover {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0px 8px rgba(0, 0, 0, 0);
    opacity: 1;
  }

.icon {
    filter: drop-shadow(0.15rem 0.10rem 0.1rem rgba(0, 0, 0, 0.5));
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.icon:hover {
    transform: scale(1.3);
    filter: drop-shadow(0.15rem 0.15rem 0.1rem rgba(0, 0, 0, 0.5));
    opacity: 1;
}

`

export default ProjectCard;