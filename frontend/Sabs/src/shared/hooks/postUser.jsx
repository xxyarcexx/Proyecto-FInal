import { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

export const useRegisterUser = () => {
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        companyId:1,
        roleId:3
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('http://localhost:3030/users', user);
            console.log('Registro exitoso:', response.data);

            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso!',
                text: 'Te has registrado correctamente.',
                confirmButtonText: 'Aceptar',
            });
            navigate('/login');
            setUser({ fullName: '', email: '', password: '', companyId: 1, roleId: 3 }); // Limpiar el formulario
        } catch (error) {
            console.error('Error en el registro:', error);
            setError(error.message || 'Hubo un error al registrar el usuario.');
            Swal.fire({
                icon: 'error',
                title: 'Error en el registro',
                text: error.message || 'Inténtalo de nuevo.',
                confirmButtonText: 'Aceptar',
            });
        } finally {
            setLoading(false);
        }
    };

    return {
        handleChange,
        handleSubmit,
        loading,
        error
    };
};