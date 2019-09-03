import { Wrapper, mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex, { Store } from 'vuex';
import IndexPage from '~/pages/index.vue';
import { IpAddressState } from '~/store/ip_address/types';

const localVue = Vue;
localVue.use(Vuex);
localVue.use(Vuetify);

const getIpAddress = jest.fn();

const store: Store<IpAddressState> = new Vuex.Store({
    modules: {
        ip_address: {
            actions: { getIpAddress },
            getters: { myIpAddress: () => 'some_address' },
            namespaced: true,
            state: { value: 'default_address' },
        },
    },
});
const wrapper: Wrapper<IndexPage> = mount(IndexPage, { store, localVue });

describe('PageIndex', () => {
    it('should be a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('should be compile v-layout to div', () => {
        expect(wrapper.is('div')).toBe(true);
    });

    it('should link to ip_address state', () => {
        const greeting = wrapper.find('.greeting-text');
        expect(greeting.text()).toBe('Hello, some_address');
    });

    it('should get ip address when clicking button', () => {
        const button = wrapper.find('.get-ip-address-button');
        button.trigger('click');
        expect(getIpAddress).toHaveBeenCalled();
    });
});
