import React, { useState } from 'react';
import './css/navbar.css';
import menudropdown from './images/menudropdown2.png'

function Navbar() {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><h3 id="textoMarceloBonfim">portfolio-profissional</h3></a>

                <button id="botaoDropdownCor" className="navbar-toggler mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <img id="menuDropdownIcon" src={menudropdown} alt="..."/>
                </button>

                <div className="collapse navbar-collapse container-fluid mx-auto" id="navbarNavDropdown">
                    <ul className="navbar-nav ">
                        <div className="conteiner ">
                            <div id="barraBotoesNavbar" className="row gy-2 ">
                                <div className="col-md-4 col-sm-6 mx-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active text-center" aria-current="page" href="/">Home</a>
                                    </li>
                                </div>
                                <div className="col-md-4 col-sm-6 mx-auto">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-center" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Projetos
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" id="navbarDropdown" >
                                            <li><a className="dropdown-item text-center" href="#">Game - Voxel Def.</a></li>
                                        </ul>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;