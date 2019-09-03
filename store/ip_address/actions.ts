import { ActionContext, ActionTree } from 'vuex/types';
import { IpAddressState } from './types';

interface IpAddresssActionContext extends ActionContext<IpAddressState, IpAddressState> {}

export const actions: ActionTree<IpAddressState, IpAddressState> = {
    async getIpAddress({ commit }: IpAddresssActionContext) {
        const ipAddress = await this.$axios.$get<string>('https://icanhazip.com');

        commit('updateIpAddress', ipAddress);
    },
};

export default actions;
