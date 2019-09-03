import { AxiosRequestConfig } from 'axios';
import { IAxiosRetryConfig, exponentialDelay } from 'axios-retry';
import { APP_API_URL } from './env';

const axios: AxiosRequestConfig & { retry: IAxiosRetryConfig } = {
    baseURL: APP_API_URL,
    retry: {
        retries: 3,
        retryDelay: exponentialDelay,
    },
};

export default axios;
