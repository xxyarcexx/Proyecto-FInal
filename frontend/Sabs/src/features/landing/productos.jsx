import React from "react";
import { useGetProducts } from "../../shared/hooks/getProducts";
import { NavBarPublic } from "../../shared/navbar/navBarPublic";

export const ProductsLanding =()=>{
    const {products, error, loading} = useGetProducts();
    console.log('productos'+products);
    return (
        <>
            
            <NavBarPublic/>
            <div className="container mt-4" > {/* Añadimos un margen superior para separar del navbar */}
                {loading && <div className="alert alert-info" role="alert">Cargando productos...</div>}
                {error && <div className="alert alert-danger" role="alert">Error al cargar productos: {error.message}</div>}
                <div className="row">
                    {products.map((product) => (
                        <div key={product.id} className="col-md-4 mb-4"> {/* Aumentamos el margen inferior */}
                            <div className="card h-100"> {/* Añadimos h-100 para que las tarjetas tengan la misma altura */}
                                <img src={product.imageUrl} className="card-img-top" alt={product.name} style={{ objectFit: 'cover', height: '200px' }} /> {/* Estilo para la imagen */}
                                <div className="card-body d-flex flex-column"> {/* Usamos flex-column para alinear el contenido */}
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">Precio: <span className="fw-bold">${product.price}</span></p> {/* Resaltamos el precio */}
                                    <p className="card-text">Stock: <span className={product.stock > 0 ? "text-success" : "text-danger"}>{product.stock > 0 ? 'Disponible' : 'Agotado'}</span></p> {/* Indicador de stock */}
                                    <p className="card-text"><small className="text-muted">Categoría: {product.category.name}</small></p> {/* Texto más sutil para la categoría */}
                                    <div className="mt-auto"> {/* Empuja el botón hacia la parte inferior */}
                                        <button className="btn btn-primary w-100">Ver detalles</button> {/* Botón primario de Bootstrap */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}