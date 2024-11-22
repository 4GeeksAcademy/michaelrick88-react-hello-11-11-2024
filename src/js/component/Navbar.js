import React from 'react';


const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-warning-subtle">
            <div className="container-fluid ">
                <a className="navbar-brand fs-2" href="#">
                    <img src="https://icon2.cleanpng.com/20180512/hvw/avriinnu6.webp" alt="Logo" width="50" height="50" class="d-inline-block align-text-top " />
                    Bootstrap
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link fs-3" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-3" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-3" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-3" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;