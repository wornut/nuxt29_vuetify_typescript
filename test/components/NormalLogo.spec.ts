import { shallowMount } from '@vue/test-utils';
import NormalLogo from '~/components/NormalLogo.vue';

describe('Logo', () => {
    test('is a Vue instance', () => {
        const wrapper = shallowMount(NormalLogo);

        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('should be img', () => {
        const wrapper = shallowMount(NormalLogo);

        expect(wrapper.is('img')).toBe(true);
    });
});
