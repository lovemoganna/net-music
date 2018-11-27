<template lang="pug">
  .container
    router-link.header-abs(tag="div" to="/" v-show="showAbs")
      .banner-back
        span.iconfont.banner-icon-back &#xe660;
    .header-fixed(v-show="!showAbs" :style="opacityStyle") 故宫
      router-link.iconfont.header-fixed-back(tag="div" to="/") &#xe660;
    .content
</template>
<script type="text/ecmascript-6">
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: 0
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="scss" scoped>
  @import "~styles/variables";

  .banner-back {
    position: absolute;
    top: .2rem;
    left: .2rem;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.66);
    border-radius: .4rem;
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    .banner-icon-back {
      font-size: .36rem;
      color: #ffffff;
    }
  }

  .header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #fff;
    background: $bgColor;
    .header-fixed-back {
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align: center;
      color: #fff;
      font-size: .36rem;
    }
  }

  .content {
    height: 40rem;
  }
</style>
