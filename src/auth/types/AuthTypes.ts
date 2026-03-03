import type { User } from "@/interfaces/user.interface";

export const AuthStatus = Object.freeze({
    Authenticated: 'authenticated',
    NotAuthenticated: 'not-authenticated',
    Checking: 'checking'
});

export const AuthRoles = Object.freeze({
    User: "user",
    Admin: "admin"
});

export type AuthStatusType = typeof AuthStatus[keyof typeof AuthStatus];

export type AuthRolesType = typeof AuthRoles[keyof typeof AuthRoles];

export type AuthState = {
    //Properties
    user: User | null;
    token: string | null;
    authStatus: AuthStatusType;
    
    //Getters
    isAdmin: () => boolean;

    //Actions
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    register: (email: string, password: string, fullName: string) => Promise<boolean>;
    checkAuthStatus: () => Promise<boolean>;
}