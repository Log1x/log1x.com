<template>
  <header class="py-16">
    <div class="mx-auto text-center">
      <time :datetime="post.datetime" class="text-xs text-gray-600 uppercase">
        {{ formattedPublishDate }}
      </time>

      <h1 class="my-1 text-3xl font-bold">
        {{ post.title }}
      </h1>

      <div class="text-xs text-gray-700">
        <span v-if="post.author">
          <span class="text-gray-700 capitalize">
            {{ titleCase(post.author.title) }}
          </span> &bull;
        </span>
      </div>
    </div>

    <nav class="absolute top-0 left-0 z-20 mt-6 ml-6">
      <g-link to="/" class="px-4 py-2 text-sm transition-colors duration-300 hover:text-brand-500">
        &larr; Home
      </g-link>
    </nav>
  </header>
</template>

<script>
import moment from 'moment'

export default {
  props: ['post'],
  methods: {
    titleCase(str) {
      return str.replace('-', ' ')
                .split(' ')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')
    }
  },
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format('DD MMMM, YYYY');
    },
  },
}
</script>
