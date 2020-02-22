<template>
  <Layout>
    <div class="max-w-lg px-4 md:px-2">
      <p class="mb-4">There's nothing here.</p>

      <g-link to="/" class="text-brand-500 hover:text-brand-600">
        &larr; Go back
      </g-link>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: `404 – Page Not Found`
    }
  }
}
</script>
