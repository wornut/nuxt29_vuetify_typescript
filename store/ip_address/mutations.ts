import { MutationTree } from 'vuex';
import { IpAddressState } from './types';

export const mutations: MutationTree<IpAddressState> = {
    updateIpAddress(state, newValue) {
        state.value = newValue;
    },
};

export default mutations;
