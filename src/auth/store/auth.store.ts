import { create } from 'zustand';
import { LocalStorageUtils } from '@/shared/utils/localStorageUtils';
import { loginAction } from '../actions/login.action';
import { AuthConstants } from '../constants/AuthConstants';
import { AuthRoles, AuthStatus, type AuthState } from '../types/AuthTypes';
import { checkAuthAction } from '../actions/check-auth.action';
import { registerAction } from '../actions/register.action';

export const useAuthStore = create<AuthState>()((set, get) => ({
    //Store Implementation
    user: null,
    token: null,
    authStatus: AuthStatus.Checking,
    isAdmin: (): boolean => {
        return get().user?.roles.includes(AuthRoles.Admin) || false;
    },
    login: async(email: string, password: string) => {

        let isValidLogin: boolean = false;

        try {
            
            const data = await loginAction(email, password);
            LocalStorageUtils.SetDataToLocalStorage(AuthConstants.AuthTokenLSK, data.token);

            set({ user: data.user, token: data.token, authStatus: AuthStatus.Authenticated });
            isValidLogin = true;

        } 
        catch(error) {
            
            LocalStorageUtils.RemoveDataFromLocalStorage(AuthConstants.AuthTokenLSK);
            set({ user: null, token: null, authStatus: AuthStatus.NotAuthenticated });

        }

        return isValidLogin;
    },
    logout: () => {
        LocalStorageUtils.RemoveDataFromLocalStorage(AuthConstants.AuthTokenLSK);
        set ({ user: null, token: null, authStatus: AuthStatus.NotAuthenticated});
    },
    register: async(email: string, password: string, fullName: string): Promise<boolean> => {
        let isValidRegister: boolean = false;

        try {
            
            const data = await registerAction(email, password, fullName);
            LocalStorageUtils.SetDataToLocalStorage(AuthConstants.AuthTokenLSK, data.token);

            set({ user: data.user, token: data.token, authStatus: AuthStatus.Authenticated });
            isValidRegister = true;

        } 
        catch(error) {
            
            LocalStorageUtils.RemoveDataFromLocalStorage(AuthConstants.AuthTokenLSK);
            set({ user: null, token: null, authStatus: AuthStatus.NotAuthenticated });

        }

        return isValidRegister;
    },
    checkAuthStatus: async() => {

        try {

            const { user, token } = await checkAuthAction();
            set({ user: user, token: token, authStatus: AuthStatus.Authenticated });
            return true;

        } catch (error) {
            set({ user: undefined, token: undefined, authStatus: AuthStatus.NotAuthenticated });
            return false;
        }
    }
}));