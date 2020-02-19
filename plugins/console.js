import Vue from 'vue'

Vue.prototype.$console = () =>
  !process.server &&
  // eslint-disable-next-line no-console
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
  \n`)
