import React from "react";

export const WelcomeClient =()=>{
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return(
        <>
        <h1>Hola Cliente {userInfo.fullName}</h1>
        </>
    )

}