import React from "react";
import { NavBarPublic } from "../../shared/navbar/navBarPublic";

export const Index =()=>(
    <>
    <NavBarPublic/>
        <div className="container-fluid" style={{ backgroundColor: '#E0FFFF', minHeight: '100vh' }}>
            <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="col-md-8 text-center">
                    <h1 className="display-4" style={{ color: '#008080' }}>Bienvenido a SABS</h1>
                    <p className="lead">
                        En SABS, nos dedicamos al cuidado y bienestar integral de tus compañeros caninos.
                        Ofrecemos servicios de alta calidad, desde paseos y entrenamiento hasta cuidado diario y atención veterinaria.
                        Nuestro equipo de profesionales apasionados está comprometido con brindar a tu perro una experiencia segura,
                        divertida y enriquecedora.
                    </p>
                    <p>
                        Descubre todo lo que SABS puede hacer por tu mejor amigo.
                    </p>
                    <button className="btn btn-lg" style={{ backgroundColor: '#008080', color: 'white' }}>
                        Conoce más
                    </button>
                </div>
            </div>
        </div>

    </>
)