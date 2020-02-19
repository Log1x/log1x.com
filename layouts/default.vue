<template>
  <div class="flex items-center justify-center h-screen mx-auto">
    <nuxt />
  </div>
</template>

<script>
  export default {
    head: {
      bodyAttrs: {
        class: 'text-sm antialiased text-gray-100 bg-black font-fira tracking-wider leading-relaxed h-screen'
      }
    }
  }
</script>
