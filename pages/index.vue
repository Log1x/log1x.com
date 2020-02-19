<template>
  <div class="max-w-lg px-8 md:px-2">
    <h1 class="flex items-center self-start mb-6 cursor-default group">
      <div class="pl-px mr-3 -mt-1 -ml-1 text-brand-500 group-hover:text-brand-600">
        <svg class="w-4 h-4 transition-colors duration-300 ease-in-out fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <polygon points="111.8,126.8 86.7,126.8 86.7,45.2 48.1,67.3 48.1,38.6 111.8,1.3" />
          <polygon points="16.2,1.3 41.3,1.3 41.3,82.8 79.9,60.7 79.9,89.4 16.2,126.8" />
        </svg>
      </div>

      <div class="-pl-px">
        <div class="relative inline-flex group">
          <span class="block mb-1">Brandon Nifong</span>
          <span class="absolute bottom-0 left-0 block w-0 duration-500 ease-in-out h-2px transition-width group-hover:w-full bg-brand-500"></span>
        </div>

        <span>/</span>

        <a
          :href="social.twitter.url"
          target="_blank"
          class="transition-colors duration-300 ease-in-out cursor-pointer text-brand-500 group-hover:text-brand-600"
        >@log1x</a>
      </div>
    </h1>

    <ul>
      <li class="grid grid-cols-3 mb-4 group">
        <div class="font-semibold cursor-default ">
          <span class="mr-2 font-bold text-green-500 transition-opacity duration-300 ease-in-out opacity-0 fill-current group-hover:opacity-100">
            $
          </span>
          <span>Work:</span>
        </div>

        <div class="col-span-2">
          <span class="inline-flex" v-for="(item, index) in work">
            <a
              :href="item.url"
              target="_blank"
              class="text-green-400 transition-colors duration-300 ease-in-out hover:text-green-300"
            >{{ item.label }}</a>

            <span class="text-gray-800 opacity-75 cursor-default" v-if="index != getIndex(work)">,&nbsp;</span>
          </span>
        </div>
      </li>

      <li v-for="item in social">
        <a
          :href="item.url"
          target="_blank"
          class="grid grid-cols-3 group"
        >
          <div class="font-semibold">
            <span class="mr-2 font-bold text-green-500 transition-opacity duration-300 ease-in-out opacity-0 fill-current group-hover:opacity-100">
              ?
            </span>

            <span>{{ item.label }}:</span>
          </div>

          <div class="col-span-2 text-blue-500 truncate transition-colors duration-300 ease-in-out group-hover:text-blue-400">
            <span>{{ item.value }}</span>
          </div>
        </a>
      </li>
    </ul>

    <a class="inline-flex items-center mt-4 ml-6 group" target="_blank" href="https://github.com/sponsors/Log1x">
      <svg class="w-4 h-4 mr-2 text-gray-900 transition-colors duration-300 ease-in-out fill-current group-hover:text-red-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <g>
          <path d="M34,2c-3.89551,0-7.54102,1.73389-10,4.69824C21.54102,3.73389,17.89551,2,14,2C6.83203,2,1,7.83154,1,15 c0,12.33203,21.45312,30.02686,22.36719,30.77393C23.55078,45.9248,23.77539,46,24,46s0.44922-0.0752,0.63281-0.22607 C25.54688,45.02686,47,27.33203,47,15C47,7.83154,41.16797,2,34,2z"></path>
        </g>
      </svg>

      <div class="flex">
        <span class="w-0 overflow-hidden text-xs whitespace-no-wrap duration-500 ease-in-out group-hover:w-full transition-width">
          Sponsor me on GitHub
        </span>
      </div>
    </a>
  </div>
</template>

<script>
console.log(`\n
LLLLLLLL                      L
LLLLLLLL                   LLLL
LLLLLLLL                LLLLLLL
LLLLLLLL             LLLLLLLLLL
LLLLLLLL          LLLLLLLLLLLLL
LLLLLLLL      LLLLLLLLLLLLLLLLL
LLLLLLLL    LLLLLLLLLLLLLLLLLLL
LLLLLLLL   LLLLLLLLLLLLLLLLLLLL
LLLLLLLL   LLLLLLLLLLLLLLLLLLLL
LLLLLLLL   LLLLLLLL    LLLLLLLL
LLLLLLLL   LLLLL       LLLLLLLL
LLLLLLLL   L       LL  LLLLLLLL
LLLLLLLL        LLLLL  LLLLLLLL
LLLLLLLL    LLLLLLLLL  LLLLLLLL
LLLLLLLL  LLLLLLLLLLL  LLLLLLLL
LLLLLLLLLLLLLLLLLLLLL  LLLLLLLL
LLLLLLLLLLLLLLLLLLLL   LLLLLLLL
LLLLLLLLLLLLLLLLL      LLLLLLLL
LLLLLLLLLLLLLL         LLLLLLLL
LLLLLLLLLLL            LLLLLLLL
LLLLLLLL               LLLLLLLL
LLLL                   LLLLLLLL
LL                     LLLLLLLL
\n
✨ https://github.com/log1x/log1x.com
\n`);

export default {
  head () {
    return { title: 'Brandon Nifong' }
  },
  asyncData () {
    return {
      work: {
        tendency: {
          label: 'Tendency',
          url: 'https://tendency.me',
        },
        roots: {
          label: 'Roots',
          url: 'https://roots.io',
        },
      },
      social: {
        github: {
          label: 'GitHub',
          url: 'https://github.com/log1x',
          value: 'https://github.com/log1x',
        },
        twitter: {
          label: 'Twitter',
          url: 'https://twitter.com/log1x',
          value: 'https://twitter.com/log1x',
        },
        linkedin: {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/brandonnifong/',
          value: 'https://www.linkedin.com/in/brandonnifong/',
        },
        contact: {
          label: 'Contact',
          url: 'mailto:brandon@tendency.me?subject=Hello%20from%20Log1x.com',
          value: 'brandon@tendency.me',
        }
      }
    }
  },
  methods: {
    getIndex (value) {
      return Object.keys(value)[Object.keys(value).length - 1];
    }
  },
}
</script>
