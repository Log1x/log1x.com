<template>
  <div class="max-w-lg px-4 md:px-2">
    <h1 class="mb-2">
      {{
        error.statusCode === 404 ? `There's nothing here.` : `An error occured.`
      }}
    </h1>

    <nuxt-link class="text-brand-500 hover:text-brand-600" to="/">
      &larr; Go back
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  layout: 'default',

  head() {
    return { title: this.error ? this.error.statusCode : 'Uh oh!' }
  }
}
</script>
