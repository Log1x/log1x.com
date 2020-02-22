<template>
  <article>
    <div class="flex items-start mb-12 -mx-4 last:mb-0">
      <div class="px-4">
        <span class="text-blue-500">
          <i class="fas fa-circle"></i>
        </span>
      </div>

      <time
        :datetime="post.datetime"
        class="w-2/6 px-4 text-xs text-gray-600 uppercase"
      >
        {{ formatPublishDate(post.datetime) }}
      </time>

      <h2 class="w-3/6 px-4 font-semibold">
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
      return moment(this.post.datetime).format('MMMM DD, YYYY')
    }
  },
  methods: {
    formatPublishDate(date) {
      return moment(date).format('DD MMMM, YYYY')
    },
    titleCase(str) {
      return str
        .replace('-', ' ')
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
    }
  }
}
</script>
