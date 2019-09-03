import { NuxtAxiosInstance } from '@nuxtjs/axios/types';
import { apiGetIpAddress } from '~/data_services/ip_address';

const mock$get = jest.fn();
mock$get.mockResolvedValue('some_address');
const mock$axios = <NuxtAxiosInstance>(<unknown>{ $get: mock$get });

describe('apiGetIpAddress', () => {
    it('should call $get and resolve `some_address`', async () => {
        const result = await apiGetIpAddress(mock$axios);

        expect(mock$get).toBeCalledTimes(1);
        expect(result).toBe('some_address');
    });
});
