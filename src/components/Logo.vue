<template>
  <div class="flex items-center self-start mb-6 cursor-default group">
    <div
      class="pl-px mr-3 -mt-1 -ml-1 text-brand-500 group-hover:text-brand-600"
    >
      <svg
        class="w-4 h-4 transition-colors duration-300 ease-in-out fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
      >
        <polygon
          points="111.8,126.8 86.7,126.8 86.7,45.2 48.1,67.3 48.1,38.6 111.8,1.3"
        />
        <polygon
          points="16.2,1.3 41.3,1.3 41.3,82.8 79.9,60.7 79.9,89.4 16.2,126.8"
        />
      </svg>
    </div>

    <div class="flex -pl-px">
      <div class="relative inline-flex group">
        <span class="block mb-1">Brandon Nifong</span>
        <span
          class="absolute bottom-0 left-0 block w-0 duration-500 ease-in-out h-2px transition-width group-hover:w-full bg-brand-500"
        ></span>
      </div>

      <span class="mx-2">/</span>

      <a
        href="https://twitter.om/log1x"
        target="_blank"
        class="transition-colors duration-300 ease-in-out cursor-pointer text-brand-500 group-hover:text-brand-600"
        >@log1x</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>
