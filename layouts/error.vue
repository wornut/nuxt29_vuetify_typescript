<template>
  <v-app>{{ error }}</v-app>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({})
export default class ErrorLayout extends Vue {
  @Prop({ type: Object, required: true }) error!: { statusCode: number };
}
</script>

<style scoped></style>
