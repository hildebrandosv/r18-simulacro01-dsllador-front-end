import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand text-success fw-bold me-4" href="/">Simulación Desarrollador Back End N°1</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="link nav-link" to="">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="link nav-link" to="/Registro">Registro</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="link nav-link" to="/Listar">Listado</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
