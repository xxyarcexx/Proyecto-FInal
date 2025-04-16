import React from "react";
import { useRegisterUser } from "../../shared/hooks/postUser"; 
import { NavBarPublic } from "../../shared/navbar/navBarPublic";

export const FormRegister = () => {
    const { handleChange, handleSubmit, loading, error } = useRegisterUser(); 

    return (
        <>
            <NavBarPublic />
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <form onSubmit={handleSubmit} className="border p-4 rounded">
                            {loading && <div className="alert alert-info">Registrando usuario...</div>}
                            {error && <div className="alert alert-danger">Error: {error}</div>}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre completo</label>
                                <input type="text" className="form-control form-control-lg" id="name" name="fullName" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control form-control-lg" id="email" name="email" onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control form-control-lg" id="password" name="password" onChange={handleChange} required />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg w-100" disabled={loading}>
                                Registrar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};