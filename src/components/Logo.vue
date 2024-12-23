<template>
  <RouterLink to="/" v-if="!is_light_theme"><img class="logo-all" src="@/assets/acrnm-logo-white-pattern.png" alt=""></RouterLink>
  <RouterLink to="/" v-if="!is_light_theme"><img class="logo-all-mob" src="@/assets/acrnm-logo-mob.png" alt=""></RouterLink>
  <RouterLink to="/" v-if="is_light_theme"><img class="logo-all" src="@/assets/acrnm-logo-white-pattern-black.png" alt=""></RouterLink>
  <RouterLink to="/" v-if="is_light_theme"><img class="logo-all-mob" src="@/assets/acrnm-logo-mob-black.png" alt=""></RouterLink>
</template>

<script>
import { defineComponent, inject } from 'vue'



export default defineComponent({
  name: 'Logo',
  setup() {
    const { is_light_theme } = inject("theme");

    return {
      is_light_theme
    }
  }
})
</script>

<style lang="scss"></style>
