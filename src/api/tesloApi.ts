import { AuthConstants } from '@/auth/constants/AuthConstants';
import { LocalStorageUtils } from '@/shared/utils/localStorageUtils';
import { StringUtils } from '@/shared/utils/stringUtils';
import axios from 'axios';

const tesloApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

tesloApi.interceptors.request.use( (config) => {
    
    const token = LocalStorageUtils.GetDataFromLocalStorage<string>(AuthConstants.AuthTokenLSK);

    if (!StringUtils.StringIsNullEmptyOrWhiteSpace(token)){
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
});

export { tesloApi };