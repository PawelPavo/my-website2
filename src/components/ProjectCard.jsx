import * as React from 'react'
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { FiGithub, FiEye, FiCamera } from "react-icons/fi"
import { FaTools } from "react-icons/fa"
import Carousel, { Modal, ModalGateway } from 'react-images';


const ProjectCard = (props) => {

    // const handleTechUsed = () => {
    //     var node_list, techClass_list;
    //     node_list = document.querySelectorAll(`.${props.project.tech}`);
    //     for (techClass_list = 0; techClass_list < node_list.length; techClass_list++) {
    //         node_list[techClass_list].classList.toggle("newStyle");
    //     }
    // }
    // const images = [{ source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png' }, { source: 'https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png' }];
    const [show2, setShow2] = React.useState(false);
    const [modalOpen, setModalOpen] = React.useState(false)

    const toggleModal = () => {
        setModalOpen(true)
    }
    const toggleModalClose = () => {
        setModalOpen(false)
    }

    return (
        <Layout2>

            <div className={` custom-height card mb-5 card-hover rouded-0 mx-autp ${!props.checked ? 'border-muted bg-off-white' : "bg-primary-light"}`}
                style={{ borderTopLeftRadius: "25px", borderBottomRightRadius: "25px", borderTopRightRadius: "0", borderBottomLeftRadius: "0", position: "relative" }}>                    <div className="card-body" >
                    <div className="row justify-content-center">
                        <h4 className="mr-4 icon">
                            <a href={props.project.git} rel="noreferrer" target="_blank" className={`${!props.checked ? 'text-yellow' : 'text-orange'}`}><FiGithub /></a>
                        </h4>
                        <h4 className="mx-4 icon">
                            <div onClick={toggleModal} className={`${!props.checked ? 'text-yellow' : 'text-orange'}`}><FiCamera /></div>
                        </h4>
                        <h4 className="ml-4 icon">
                            <div className={`${!props.checked ? 'text-yellow' : 'text-orange'}`}><FaTools /></div>
                        </h4>
                    </div>
                    <div className={`card-title text-center name-text mt-2${!props.checked ? '' : ''}`}>{props.project.name}</div>
                    <div className="col-md-12" onClick={() => setShow2(!show2)} >
                        <div className={`showContent ${!show2 ? 'showContent showContent-active' : ''} card-text ${!props.checked ? 'text-muted' : ''}`}>
                            <p>
                                {props.project.description.substring(0, 60)}
                            </p>
                            <span className={`icon ${!props.checked ? 'text-primary' : 'text-yellow'}`} >Read more...</span>
                        </div>
                        <div className={`showContent ${show2 ? 'showContent showContent-active' : ''}`}>
                            <p className={`${!props.checked ? 'text-muted' : 'text-off-white'}`}>{props.project.description}</p>
                        </div>
                    </div>
                </div>
                <a
                    target="_blank" href={props.project.url} rel="noreferrer"
                    className="text-center font-weight-light px-3 py-2 bg-gray icon"
                    style={{ position: "absolute", bottom: "0", right: "0", borderBottomRightRadius: "23px" }}>
                    <IconContext.Provider value={{ style: { fontSize: '20px', opacity: "1", filter: "drop-shadow(0.15rem 0.10rem 0.1rem rgba(0, 0, 0, 0.5))" } }}>
                        <small className={`${!props.checked ? 'text-yellow' : 'text-orange'}`}><FiEye /></small>
                    </IconContext.Provider>
                </a>
            </div>
            <ModalGateway>
                {modalOpen ? (
                    <Modal onClose={toggleModalClose}>
                        <Carousel views={props.project.images} />
                    </Modal>
                ) : null}
            </ModalGateway>
        </Layout2>
    )
}

const Layout2 = styled.div`
/* .custom-height {

@media (max-width: 1024px) {
        min-height: 25rem;
        min-width: auto;

    }

    @media (max-width: 1200px) {
        min-height: 23rem;
        min-width: 20rem,;

    }
} */



.card-hover {
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.name-text {
    letter-spacing: 2px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: solid 1px;
}

.card-hover:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
    opacity: 1;
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

.showContent {
    height: 0px;
    width: 100%;
    /* display: block; */
    opacity: 0;
    transition: height 2s, opacity 2s;
}

.showContent-active {
    height: 175px;
    opacity: 1;

}

`

export default ProjectCard;