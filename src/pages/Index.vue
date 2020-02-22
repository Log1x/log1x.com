<template>
  <Layout :logo="true">
    <ul>
      <li class="grid grid-cols-3 mb-4 group">
        <div class="font-semibold cursor-default ">
          <span
            class="mr-2 font-bold text-green-500 transition-opacity duration-300 ease-in-out opacity-0 fill-current group-hover:opacity-100"
          >
            $
          </span>
          <span>Work:</span>
        </div>

        <div class="col-span-2">
          <span v-for="(item, index) in work" :key="index" class="inline-flex">
            <a
              v-if="item.url"
              :href="item.url"
              target="_blank"
              class="text-green-400 transition-colors duration-300 ease-in-out hover:text-green-300"
              >{{ item.label }}</a
            >

            <span v-else class="text-green-400 cursor-default">
              {{ item.label }}
            </span>

            <span
              v-if="index != getIndex(work)"
              class="text-gray-800 opacity-75 cursor-default"
              >,&nbsp;</span
            >
          </span>
        </div>
      </li>

      <li v-for="(item, index) in social" :key="index">
        <a :href="item.url" target="_blank" class="grid grid-cols-3 group">
          <div class="font-semibold">
            <span
              class="mr-2 font-bold text-green-500 transition-opacity duration-300 ease-in-out opacity-0 fill-current group-hover:opacity-100"
            >
              ?
            </span>

            <span>{{ item.label }}:</span>
          </div>

          <div
            class="col-span-2 text-blue-500 truncate transition-colors duration-300 ease-in-out group-hover:text-blue-400"
          >
            <span>{{ item.value }}</span>
          </div>
        </a>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      work: {
        tendency: {
          label: 'Tendency'
        },
        roots: {
          label: 'Roots',
          url: 'https://roots.io'
        }
      },
      social: {
        github: {
          label: 'GitHub',
          url: 'https://github.com/log1x',
          value: 'https://github.com/log1x'
        },
        twitter: {
          label: 'Twitter',
          url: 'https://twitter.com/log1x',
          value: 'https://twitter.com/log1x'
        },
        linkedin: {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/brandonnifong/',
          value: 'https://www.linkedin.com/in/brandonnifong/'
        },
        contact: {
          label: 'Contact',
          url: 'mailto:brandon@tendency.me?subject=Hello%20from%20Log1x.com',
          value: 'brandon@tendency.me'
        }
      }
    }
  },
  beforeCreate() {
    //this.$console()
  },
  methods: {
    getIndex(value) {
      return Object.keys(value)[Object.keys(value).length - 1]
    }
  },
  head() {
    return { title: 'Brandon Nifong' }
  }
}
</script>
