<template>
  <Layout class="my-12">
    <div class="max-w-lg px-4 md:px-2">
      <div>
        <post-item v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
      </div>

      <pagination :info="$page.posts.pageInfo" v-if="$page.posts.pageInfo.totalPages > 1" />

      <site-footer class="py-8 sm:py-16" />
    </div>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'
import SiteFooter from '@/components/Footer'
import PostItem from '@/components/PostItem'
import Pagination from '@/components/Pagination'

export default {
  components: {
    PostItem,
    Pagination,
    SiteFooter,
  },
  metaInfo () {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        { property: "og:type", content: 'website' },
        { property: "og:title", content: this.$static.metadata.siteName },
        { property: "og:description", content: this.$static.metadata.siteDescription },
        { property: "og:url", content: this.$static.metadata.siteUrl },
        { property: "og:image", content: this.$static.metadata.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$static.metadata.siteName },
        { name: "twitter:description", content: this.$static.metadata.siteDescription },
        { name: "twitter:site", content: "@log1x" },
        { name: "twitter:creator", content: "@log1x" },
        { name: "twitter:image", content: this.$static.metadata.ogImageUrl },
      ],
    }
  },
  computed: {
    config () {
      return config
    },
  },
}
</script>

<page-query>
  query Home ($page: Int) {
    posts: allPost (page: $page, perPage: 6) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          timeToRead
          datetime: date (format: "YYYY-MM-DD HH:mm:ss")
          content
          excerpt
          description
          path
          cover
        }
      }
    }
  }
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</static-query>
