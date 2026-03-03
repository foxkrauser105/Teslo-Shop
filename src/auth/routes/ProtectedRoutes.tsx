import type { PropsWithChildren } from "react";
import { useAuthStore } from "../store/auth.store";
import { AuthStatus } from "../types/AuthTypes";
import { Navigate } from "react-router";

export const AuthenticatedRoute = ({children}: PropsWithChildren) => {

    const { authStatus } = useAuthStore();

    if (authStatus === AuthStatus.Checking) {
        return null;
    }

    if (authStatus === AuthStatus.NotAuthenticated) {
        return <Navigate to='/auth/login' />
    }

    return children;
}

export const NotAuthenticatedRoute = ({children}: PropsWithChildren) => {

    const { authStatus } = useAuthStore();

    if (authStatus === AuthStatus.Checking) {
        return null;
    }

    if (authStatus === AuthStatus.Authenticated) {
        return <Navigate to='/' />
    }

    return children;
}

export const AdminRoute = ({children}: PropsWithChildren) => {

    const { authStatus, isAdmin } = useAuthStore();

    if (authStatus === AuthStatus.Checking) {
        return null;
    }

    if (authStatus === AuthStatus.NotAuthenticated) {
        return <Navigate to='/auth/login' />
    }

    if (!isAdmin()) {
        return <Navigate to='/' />
    }

    return children;
}