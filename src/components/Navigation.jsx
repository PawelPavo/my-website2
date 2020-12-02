import React from 'react';
import ToggleSwitch from './ToggleSwitch';

function Navigation({ checked, handleTheme }) {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <a className="navbar-brand" href="/">
                    <img className="mx-5"
                        src={!checked ? `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesOpen2.png"}` : `${"https://news-api.s3.us-east-2.amazonaws.com/MeEyesClosed2.png"}`}
                        alt="Pawel_Jaskolski" style={{ height: "65px", width: "auto" }} />
                </a>
                <ToggleSwitch checked={checked} handleTheme={handleTheme} />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav font-weight-light mx-auto" style={{ fontSize: "1.2rem" }}>
                        <li className="nav-item">
                            <a className="nav-link nav-text mx-5" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-text mx-5" href="/projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-text mx-5" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navigation;