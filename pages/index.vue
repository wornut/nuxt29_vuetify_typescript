<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 class="pb-5">
      <h1 class="underline headline">Hello, World</h1>
    </v-flex>
    <v-flex xs12>
      <NormalLogo class="d-inline-block" />
      <VuetifyLogo class="d-inline-block" />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  components: {
    NormalLogo: () => import('~/components/NormalLogo.vue'),
    VuetifyLogo: () => import('~/components/VuetifyLogo.vue'),
  },
})
export default class IndexPage extends Vue {}
</script>

<style scoped></style>
