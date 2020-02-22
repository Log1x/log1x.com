<template>
  <div class="flex items-center justify-center min-h-screen mx-auto">
    <div class="w-full max-w-lg px-4 md:px-2">
      <Logo v-if="logo" />
      <slot/>
    </div>
  </div>
</template>

<script>
import config from '~/.temp/config.js';
import Logo from '@/components/Logo.vue';

export default {
  props: ['logo'],
  components: {
    Logo,
  },
  computed: {
    config () {
      return config
    }
  }
}
</script>
