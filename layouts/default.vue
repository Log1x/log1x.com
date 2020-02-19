<template>
  <div class="flex items-center justify-center h-screen mx-auto">
    <nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class:
          'text-sm antialiased text-gray-200 bg-black font-fira tracking-wider overflow-hidden leading-relaxed'
      }
    }
  }
}
</script>
