import React from 'react';
import { Link } from 'react-router-dom';
import thumbsUp from '../images/scott-thumbs-up.png';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to='/' ><h3 className="heading mr-2">  <img id="navbar-logo" src={thumbsUp} alt="pic" /></h3></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link text-primary lead" href="/">Home</a>
                    <a className="nav-link text-primary lead" href="/requests">Requests</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
