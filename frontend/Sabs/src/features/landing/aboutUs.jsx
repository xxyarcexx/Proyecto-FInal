// c:\Users\andre\OneDrive\Escritorio\CARPETAS\React\ProyectoReact\frontend\Sabs\src\features\landing\aboutUs.jsx
import React from "react";
import { NavBarPublic } from "../../shared/navbar/navBarPublic"; // Asegúrate que la ruta sea correcta

export const AboutUs = () => (
    <>
        <NavBarPublic />
        <div className="container-fluid" style={{ backgroundColor: '#E0FFFF', minHeight: '100vh' }}>
            <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="col-md-8 text-center">
                    <h1 className="display-4" style={{ color: '#008080' }}>Sobre Nosotros</h1>
                    <p className="lead">
                        En SABS, somos más que un servicio de cuidado de perros; somos una familia de amantes de los animales dedicada a enriquecer la vida de tu compañero canino.
                    </p>
                    <p>
                        Nuestra pasión por los perros nos impulsa a ofrecer un entorno seguro, estimulante y lleno de cariño. Creemos que cada perro merece atención personalizada, ejercicio adecuado y mucho amor, tratados como parte de nuestra propia manada.
                    </p>
                    <p>
                        Nuestro equipo está formado por profesionales experimentados y cuidadosamente seleccionados, comprometidos con el bienestar animal. Desde paseadores energéticos hasta cuidadores atentos y colaboradores expertos, todos compartimos el mismo objetivo: la felicidad y salud integral de tu perro.
                    </p>
                    <p>
                        Nos esforzamos por ser tu socio de confianza en el cuidado de tu mascota, brindando tranquilidad mientras estás fuera y asegurando que tu perro reciba la mejor atención posible.
                    </p>
                    <button className="btn btn-lg" style={{ backgroundColor: '#008080', color: 'white' }}>
                        Conoce Nuestros Productos
                    </button>
                </div>
            </div>
        </div>
    </>
);
