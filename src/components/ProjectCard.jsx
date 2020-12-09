import * as React from 'react'
import styled from 'styled-components';
import { IconContext } from "react-icons"
import { FiGithub, FiEye, FiCamera } from "react-icons/fi"
import { FaTools } from "react-icons/fa"
import Carousel, { Modal, ModalGateway } from 'react-images';
import { BsArrowRight  } from "react-icons/bs"


const ProjectCard = (props) => {

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

            <div className={`fade_effect  custom-height card mb-5 rouded-0 mx-autp ${!props.checked ? 'border-off-white bg-off-white card-hover ' : "bg-primary-light card-hover-dark"}`}
                style={{ borderTopLeftRadius: "25px", borderBottomRightRadius: "25px", borderTopRightRadius: "0", borderBottomLeftRadius: "0", position: "relative" }}>                    
                <div className="card-body" >
                    <div className="row text-center">
                        <h4 className=" col mr-4 icon">
                            <a href={props.project.git} rel="noreferrer" target="_blank" className={` ${!props.checked ? 'text-yellow' : 'text-orange'}`} ><FiGithub /></a>
                        </h4>
                        <h4 className="col mx-4 icon">
                            <div onClick={toggleModal} className={`${!props.checked ? 'text-yellow' : 'text-orange'}`}><FiCamera /></div>
                        </h4>
                        <h4 className="col ml-4 icon">
                            <div className={`${!props.checked ? 'text-yellow' : 'text-orange'}`}><FaTools /></div>
                        </h4>
                    </div>
                    <div className={`slide-4 card-title text-center name-text mt-2${!props.checked ? '' : ''}`}>{props.project.name}</div>
                    <div className=" col-md-12" onClick={() => setShow2(!show2)} >
                        <div className={` slide-5 showContent ${!show2 ? 'showContent showContent-active' : ''} card-text ${!props.checked ? 'text-muted' : ''}`}>
                            <p>
                                {props.project.description.substring(0, 60)}...
                            </p>
                            <h1 className={`icon  ml-3 ${!props.checked ? 'text-primary arrow-icon ' : 'text-off-white arrow-icon-dark'}`} ><BsArrowRight/></h1>
                        </div>
                        <div className={`showContent ${show2 ? 'showContent showContent-active' : ''}`}>
                            <p className={`${!props.checked ? 'text-muted' : 'text-off-white'}`}>{props.project.description}</p>
                        </div>
                    </div>
                </div>
                <a
                    target="_blank" href={props.project.url} rel="noreferrer"
                    className="text-center px-4 py-2 bg-gray arrow-icon"
                    style={{ position: "absolute", bottom: "0", right: "0", borderBottomRightRadius: "23px", borderTopLeftRadius: "23px" }}>
                    <IconContext.Provider value={{ style: { fontSize: '20px', opacity: "1" } }}>
                        <small className={`icon ${!props.checked ? 'text-primary ' : 'text-white'}`}><FiEye /></small>
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
.card-hover {
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
    box-shadow:  8px 8px 16px #d2d5d9, -8px -8px 16px #ffffff;
}
.card-hover:hover {
    transform: scale(1.025);
    box-shadow:  18px 18px 26px #d2d5d9, -18px -18px 26px #ffffff;
}

.card-hover-dark {
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
    box-shadow:  8px 8px 16px #334655, -8px -8px 16px #3f586b;
}
.card-hover-dark:hover {
    transform: scale(1.025);
    box-shadow:  18px 18px 26px #334655, -18px -18px 26px #3f586b;

}

.name-text {
    letter-spacing: 2px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: solid 1px;
}

.icon {
    filter: drop-shadow(0.15rem 0.15rem 0.1rem rgba(0, 0, 0, 0.3));
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.icon:hover {
    transform: scale(1.3);
    filter: drop-shadow(rgba(0, 0, 0, 0.5));
}

.icon2 {
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.icon2:hover {
    transform: scale(1.1);
    filter: drop-shadow(rgb(255, 255, 255));
}

.arrow-icon {
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.arrow-icon:hover {
    transform: scale(0.9);
    color: #E36C4E !important;
}

.arrow-icon-dark {
    transition: all .4s ease;
    -webkit-transition: all .4s ease;
}

.arrow-icon-dark:hover {
    transform: scale(0.9);
    color: #E36C4E !important;
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

.fade_effect{
  animation: blink 2s linear 1;
}

.slide-4 {
  transform: translateY(1000px);
  animation: slideUp 2s ease-in-out forwards 1.5s;
  position: relative;
    overflow: hidden;
}

.slide-5 {
  transform: translateY(1000px);
  animation: slideUp 2s ease-in-out forwards 1.75s;
  position: relative;
    overflow: hidden;
}

@keyframes blink{
0%{opacity: 0.1;}
50%{opacity: 0.5;}
100%{opacity: 1}
}

@keyframes slideUp {
  0% {
    transform: translateY(1000px);
  }
  100% {
    transform: translateY(0px);
  }
}

`

export default ProjectCard;