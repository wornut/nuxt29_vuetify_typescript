import { ActionContext, ActionTree } from 'vuex/types';
import { IpAddressState } from './types';
import { apiGetIpAddress } from '~/data_services/ip_address';

interface IpAddresssActionContext extends ActionContext<IpAddressState, IpAddressState> {}

export const actions: ActionTree<IpAddressState, IpAddressState> = {
    async getIpAddress({ commit }: IpAddresssActionContext) {
        commit('updateIpAddress', await apiGetIpAddress(this.$axios));
    },
};

export default actions;
