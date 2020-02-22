<template>
  <Layout>
    <main>
      <post-header :post="$page.post" />

      <alert v-if="postIsOlderThanOneYear" class="mb-8 bg-brand-500">
        This post is over a <strong>year</strong> old, some of this information
        may be out of date.
      </alert>

      <article>
        <div class="text-gray-300 markdown" v-html="$page.post.content" />
      </article>

      <site-footer class="my-8" />
    </main>
  </Layout>
</template>

<script>
import moment from 'moment'
import config from '~/.temp/config.js'
import Alert from '@/components/Alert'
import slugify from '@sindresorhus/slugify'
import SiteFooter from '@/components/Footer'
import PostHeader from '~/components/PostHeader'

export default {
  components: {
    Alert,
    PostHeader,
    SiteFooter
  },
  metaInfo() {
    return {
      title: `${this.$page.post.title} ${
        this.$page.post.tag ? '- ' + this.$page.post.tag.name : ''
      }`,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.description(this.$page.post)
        },

        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.$page.post.title },
        {
          property: 'og:description',
          content: this.description(this.$page.post)
        },
        { property: 'og:url', content: this.postUrl },
        {
          property: 'article:published_time',
          content: moment(this.$page.post.date).format('YYYY-MM-DD')
        },
        { property: 'og:image', content: this.ogImageUrl },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: this.$page.post.title },
        {
          name: 'twitter:description',
          content: this.description(this.$page.post)
        },
        { name: 'twitter:site', content: '@log1x' },
        { name: 'twitter:creator', content: '@log1x' },
        { name: 'twitter:image', content: this.ogImageUrl }
      ]
    }
  },
  methods: {
    description(post, length, clamp) {
      if (post.description) {
        return post.description
      }

      let text = post.content
        .replace(/<pre(.|\n)*?<\/pre>/gm, '')
        .replace(/<[^>]+>/gm, '')

      return text.length > length || 280
        ? `${text.slice(0, length || 280)} ${clamp || '...'}`
        : text
    },

    titleCase(str) {
      return str
        .replace('-', ' ')
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
    }
  },
  computed: {
    config() {
      return config
    },

    postIsOlderThanOneYear() {
      let postDate = moment(this.$page.post.datetime)
      return moment().diff(postDate, 'years') > 0 ? true : false
    },

    postUrl() {
      let siteUrl = this.config.siteUrl
      let postPath = this.$page.post.path

      return postPath
        ? `${siteUrl}${postPath}`
        : `${siteUrl}/${slugify(this.$page.post.title)}/`
    }
  }
}
</script>

<style lang="scss">
.markdown {
  a,
  p > a {
    @apply .text-brand-500 .underline;

    &:hover,
    &:focus {
      @apply .text-brand-600;
    }

    &:visited {
      @apply .bg-gray-600;
    }
  }

  p,
  dl,
  ol,
  ul,
  blockquote,
  pre,
  table {
    &:not(:last-child) {
      @apply .mb-6;
    }
  }

  ol {
    @apply .list-decimal .ml-8 .mt-4;
  }

  ul {
    @apply .list-disc .ml-8 .mt-4;

    ul {
      @apply .list-circle .mt-2;

      ul {
        @apply .list-square;
      }
    }
  }

  li + li {
    @apply .mt-1;
  }

  dd {
    @apply .ml-8;
  }

  figure {
    @apply .text-center .max-w-full;

    &:not(:first-child) {
      @apply .mt-8;
    }

    &:not(:last-child) {
      @apply .mb-8;
    }

    img {
      @apply .inline-block;
    }

    figcaption {
      @apply .text-md;
    }
  }

  pre {
    @apply .overflow-auto .break-words .p-6;
  }

  p code {
    @apply .p-1 .bg-gray-800;
  }

  blockquote {
    @apply .bg-gray-300 .border-l-4 .border-brand-500 .p-4 .shadow;

    cite {
      @apply .block .mt-4 .text-xs .text-gray-700 .not-italic;
    }
  }

  sup,
  sub {
    @apply .text-xs;
  }

  table {
    @apply .w-full .text-left .table-auto .border-collapse .border .border-gray-300;

    thead,
    tfoot {
      th,
      td {
        @apply .text-base .font-semibold .text-gray-700 .py-2 .px-3 .bg-gray-100;
      }
    }

    tbody {
      tr {
        &:nth-child(even) {
          @apply .bg-gray-500;
        }
      }

      th,
      td {
        @apply .py-2 .px-3 .border-t .border-gray-300 .text-sm .whitespace-no-wrap;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply .font-bold .leading-normal .mb-3;

    &:not(:first-child) {
      @apply .mt-6;
    }
  }

  h1 {
    @apply .text-4xl;
  }

  h2 {
    @apply .text-3xl;
  }

  h3 {
    @apply .text-2xl;
  }

  h4 {
    @apply .text-xl;
  }

  h5 {
    @apply .text-lg;
  }

  h6 {
    @apply .text-sm;
  }
}

@screen sm {
  .markdown {
    h2 {
      @apply text-4xl;
    }
    h3 {
      @apply text-3xl;
    }
    h4 {
      @apply text-2xl;
    }
    h5 {
      @apply text-xl;
    }
    h6 {
      @apply text-base;
    }
  }
}
</style>

<page-query>
  query Post($path: String) {
    post(path: $path) {
      title
      path
      slug
      datetime: date(format: "YYYY-MM-DD HH:mm:ss")
      content
      description
      timeToRead
    }
  }
</page-query>
