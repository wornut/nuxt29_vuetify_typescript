import Vuetify, { Vuetify as IVuetify } from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import VuetifyLogo from '~/components/VuetifyLogo.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('VuetifyLogo', () => {
    let vuetify: IVuetify;

    beforeEach(() => {
        vuetify = new Vuetify();
    });

    test('is a Vue instance', () => {
        const wrapper = mount(VuetifyLogo, {
            localVue,
            vuetify,
        });

        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('should be div', () => {
        const wrapper = mount(VuetifyLogo, {
            localVue,
            vuetify,
        });

        expect(wrapper.is('div')).toBe(true);
    });
});
