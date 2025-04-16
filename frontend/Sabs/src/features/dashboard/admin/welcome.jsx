import React from "react";

export const WelcomeAdmin =()=>{
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return(
        <>
        <h1>Hola Admin {userInfo.fullName}</h1>
        </>
    )
}