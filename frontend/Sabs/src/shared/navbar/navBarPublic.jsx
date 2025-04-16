import React from "react";
import { Link } from "react-router-dom";

export const NavBarPublic = () => (
  <>
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#008080" }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white">
          SABS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active text-white"
                aria-current="page"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link text-white">
                Quienes somos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link text-white">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categories" className="nav-link text-white">
                Categorias
              </Link>
            </li>
          </ul>
        </div>{" "}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/register" className="nav-link text-white">
                Registrar
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-white">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);
