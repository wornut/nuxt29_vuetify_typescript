import { NuxtAxiosInstance } from '@nuxtjs/axios/types';

export async function apiGetIpAddress($axios: NuxtAxiosInstance) {
    const ipAddress = await $axios.$get<string>('https://icanhazip.com');

    return ipAddress;
}
