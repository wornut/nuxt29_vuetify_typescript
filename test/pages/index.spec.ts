import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import IndexPage from '~/pages/index.vue';

const localVue = Vue;
localVue.use(Vuetify);

const wrapper = mount(IndexPage, { localVue });

describe('PageIndex', () => {
    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('should be compile v-layout to div', () => {
        expect(wrapper.is('div')).toBe(true);
    });
});
