import { AxiosRequestConfig } from 'axios';
import { IAxiosRetryConfig, exponentialDelay } from 'axios-retry';
import { WILDBOAR_BACKEND_URL } from './env';

const axios: AxiosRequestConfig & { retry: IAxiosRetryConfig } = {
    baseURL: WILDBOAR_BACKEND_URL,
    retry: {
        retries: 3,
        retryDelay: exponentialDelay,
    },
};

export default axios;
