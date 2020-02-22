<template>
  <div class="leading-normal shadow" role="alert">
    <div class="flex items-center px-8 py-4 -mx-4">
      <div class="px-4 text-xl">
        <i :class="`fa-${icon || 'exclamation-triangle'}`" class="fas"></i>
      </div>

      <div class="px-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert'
}
</script>
