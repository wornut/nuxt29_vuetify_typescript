import { mount } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VuetifyLogo from '~/components/VuetifyLogo.vue';

const localVue = Vue;
localVue.use(Vuetify);

const wrapper = mount(VuetifyLogo, { localVue });

describe('VuetifyLogo', () => {
    test('is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('should be compile v-img to div', () => {
        expect(wrapper.is('div')).toBe(true);
    });
});
