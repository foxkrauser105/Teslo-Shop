import { Navigate } from 'react-router';
import type { IPath } from './shared/interfaces/IPath';

import { HomePage } from './shop/pages/home/HomePage';
import { DashboardPage } from './admin/pages/dashboard/DashboardPage';
import { AdminProductPage } from './admin/pages/product/AdminProductPage';
import { AdminProductsPages } from './admin/pages/products/AdminProductsPages';
import { LoginPage } from './auth/pages/login/LoginPage';
import { RegisterPage } from './auth/pages/register/RegisterPage';
import { ShopLayout } from './shop/layouts/ShopLayout';
import { GenderPage } from './shop/pages/gender/GenderPage';
import { ProductPage } from './shop/pages/product/ProductPage';
import { lazy } from 'react';

const AuthLayout = lazy(() => import('./auth/layouts/AuthLayout'));
const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout'));

export const Paths: IPath[] = [
    //Main Routes
    {
        path: "/",
        element: <ShopLayout />,
        index: false
    },
    {
        path: "/",
        name: "Inicio",
        element: <HomePage />,
        index: true,
        parent: '/'
    },
    {
        path: "product/:idSlug",
        name: "Productos",
        element: <ProductPage />,
        index: false,
        parent: '/',
        queryParams: [{ key: "0", value: ":idSlug"}]
    },
    {
        path: "gender/:gender",
        name: "Por género",
        element: <GenderPage />,
        index: false,
        parent: '/',
        queryParams: [{ key: "0", value: ":gender"}]
    },
    //Auth Routes
    {
        path: "/auth",
        element: <AuthLayout />,
        index: false
    },
    {
        element: <Navigate to="/auth/login" />,
        index: true,
        parent: "/auth"
    },
    {
        path: "login",
        name: "Iniciar Sesión",
        element: <LoginPage />,
        index: false,
        parent: "/auth"
    },
    {
        path: "register",
        name: "Registrarse",
        element: <RegisterPage />,
        index: false,
        parent: "/auth"
    },
    //Admin Routes
    {
        path: "/admin",
        element: <AdminLayout />,
        index: false
    },
    {
        path: "/admin",
        index: true,
        element: <DashboardPage />,
        parent: "/admin"
    },
    {
        path: "products",
        element: <AdminProductsPages />,
        index: false,
        parent: "/admin"
    },
    {
        path: "products/:id",
        element: <AdminProductPage />,
        index: false,
        parent: "/admin",
        queryParams: [{ key: "0", value: ":id"}]
    },
    //No matching route
    {
        path: '*',
        element: <Navigate to='/' />,
        index: false
    }
]