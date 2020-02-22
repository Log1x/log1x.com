<template>
  <article class="mb-8">
    <div class="mb-2">
      <time :datetime="post.datetime" class="text-xs text-gray-600 uppercase">
        {{ formatPublishDate(post.datetime) }}
      </time>

      <h2 class="font-semibold">
        <g-link class="hover:text-brand-500" :to="`${post.path}/`">
          {{ post.title }}
        </g-link>
      </h2>
    </div>
  </article>
</template>

<script>
import moment from 'moment'

export default {
  props: ['post'],
  computed: {
    formattedPublishDate() {
      return moment(this.post.datetime).format('MMMM DD, YYYY');
    },
  },
  methods: {
    formatPublishDate(date) {
      return moment(date).format('DD MMMM, YYYY');
    },
    titleCase(str) {
      return str.replace('-', ' ').split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
    }
  },
}
</script>
