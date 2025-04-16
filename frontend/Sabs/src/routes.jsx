import React from "react";
import { Index } from "./features/landing/index.jsx";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./features/landing/aboutUs.jsx";
import { ProductsLanding } from "./features/landing/productos.jsx";
import { CategoriesLanding } from "./features/landing/categories.jsx";
import { FormRegister } from "./features/landing/register.jsx";
import { FormLogin } from "./features/landing/login.jsx";
import { IndexClient } from "./features/dashboard/client/index.jsx";
import { WelcomeClient } from "./features/dashboard/client/welcome.jsx";
import { IndexAdmin } from "./features/dashboard/admin/index.jsx";
import { WelcomeAdmin } from "./features/dashboard/admin/welcome.jsx";


export const RoutesComponets =()=>(
    <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/products" element={<ProductsLanding/>}/>
        <Route path="/categories" element={<CategoriesLanding/>}/>
        <Route path="/register" element={<FormRegister/>}/>
        <Route path="/login" element={<FormLogin/>}/>
        <Route path="/client" element={<IndexClient/>}>
        <Route path="" element={<WelcomeClient/>}/>
        </Route>
        <Route path="/admin" element={<IndexAdmin/>}>
        <Route path="" element={<WelcomeAdmin/>}/>
        </Route>
    </Routes>
)