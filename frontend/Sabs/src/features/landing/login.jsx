import React from "react";
import { useLoginUser } from "../../shared/hooks/postLogin";
import { NavBarPublic } from "../../shared/navbar/navBarPublic";

export const FormLogin=()=>{
    const {handleChange, handleSubmit, loading, error,user}=useLoginUser();
    return(
        <>
        <NavBarPublic/>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <form onSubmit={handleSubmit} className="border p-4 rounded">
                            {loading && <div className="alert alert-info">Iniciando sesión...</div>}
                            {error && <div className="alert alert-danger">Credenciales incorrectas</div>}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control form-control-lg" id="email" name="email" value={user.email}onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control form-control-lg" id="password" name="password" value={user.password} onChange={handleChange} required />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg w-100" disabled={loading}>
                                Iniciar Sesión
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}