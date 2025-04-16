import React from "react";
import { useGetCategories } from "../../shared/hooks/getCategorys";
import { NavBarPublic } from "../../shared/navbar/navBarPublic";
export const CategoriesLanding =()=>{
    const {categories, error, loading} = useGetCategories();
    console.log('categorias'+categories);
    return(
        <>
        <NavBarPublic/>
            <div className="container mt-4">
                {loading && <div className="alert alert-info" role="alert">Cargando categorías...</div>}
                {error && <div className="alert alert-danger" role="alert">Error al cargar categorías: {error.message}</div>}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr key={category.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{category.name}</td>
                                <td>{category.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}