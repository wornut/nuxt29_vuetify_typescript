import { GetterTree } from 'vuex';
import { IpAddressState } from './types';

export const getters: GetterTree<IpAddressState, IpAddressState> = {
    myIpAddress: (state): string => state.value,
};

export default getters;
