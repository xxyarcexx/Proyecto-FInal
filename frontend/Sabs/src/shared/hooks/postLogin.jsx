import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
 // Importa la librería para decodificar JWT

export const useLoginUser = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userInfo, setUserInfo]=useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        let responseUser = null
        try {
            const response = await axios.post('http://localhost:3030/login', user);
            console.log('Inicio de sesión exitoso:', response.data);
            const token = response.data.token;
            localStorage.setItem('token', token);
            try {
                // Decodifica el token para obtener el payload
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.userId;
                // Realiza una solicitud GET para obtener la información del usuario
                responseUser = await axios.get(`http://localhost:3030/users/${userId}`)
                setUserInfo(responseUser.data);
                localStorage.setItem('userInfo', JSON.stringify(responseUser.data));
                console.log('Información del usuario:', responseUser.data.roleId);
                console.log('Payload del token decodificado:', decodedToken.userId);
            } catch (decodeError) {
                console.error('Error al decodificar el token:', decodeError);
                setError('Error al procesar la información del usuario.');
            }
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso!',
                text: 'Te has logueado correctamente.',
                confirmButtonText: 'Aceptar',
            }).then(() => {
                console.log('userInfo:', userInfo)
                setUser({ email: '', password: '' });
                if(responseUser.data.roleId==2){
                    navigate('/admin');
                }else{
                    navigate('/client');
                }
            });
        } catch (loginError) {
            console.error('Error en el inicio de sesión:', loginError);
            setError(loginError.message || 'Hubo un error al iniciar sesión.');
            Swal.fire({
                icon: 'error',
                title: 'Error al iniciar sesión',
                text: loginError.message || 'Credenciales incorrectas.',
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
        error,
        user,
        userInfo // Retornamos la información del usuario decodificada
    };
};
