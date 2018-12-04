<template lang="pug">
  ul.list
    li.item(v-for="item of letters" :key="item.id" :ref="item" @click="handleLetterClick" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd") {{item}}

</template>
<script type="text/ecmascript-6">

export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // const startY = this.$refs['A'][0].offsetTop // get 'A' top height
          const touchY = e.touches[0].clientY - 86 // get finger information in clientY
          const index = Math.floor((touchY - this.startY) / 20) // 得到当前手指滑动位置得到的字母下标

          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index]) // 这样父组件就知道你是滑的哪个字母触发的事件了.
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables';

  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 2rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    font-size: .3rem;
    .item {
      line-height: .4rem;
      color: $bgColor;
    }
  }
</style>
