<template lang="pug">
  .banner-container
    .banner
      img.banner-img(:src="bannerImg" @click="handleClickImg")
      .banner-info
        .banner-icons
          span.iconfont.banner-icon &#xe736;
          e.banner-icon-number {{gallaryImgs.length}}
        .banner-title-wrapper
          .banner-title {{sightName}}
    fade
      common-gallary(:imgs="gallaryImgs" v-show="showGallary" @close="handleCloseGallary")
</template>
<script type="text/ecmascript-6">
import CommonGallary from 'common/gallary/Gallary'
import Fade from 'common/fade/FadeAnimation'

export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    sightName: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary,
    Fade
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleClickImg () {
      this.showGallary = true
    },
    handleCloseGallary () {
      this.showGallary = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .banner-img {
      width: 100%;
    }
    .banner-info {
      position: absolute;
      left: 0;
      right: 0;
      bottom: .2rem;
      line-height: .6rem;
      color: white;
      .banner-icons {
        width: 1.2rem;
        margin-left: .2rem;
        height: .4rem;
        line-height: .4rem;
        background: rgba(0, 0, 0, .5);
        border-radius: .2rem;
        color: #fff;
        text-align: center;
        font-size: .24rem;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
        .banner-icon {
          margin-right: .1rem;
          font-size: .24rem;
        }
        .banner.icon-number {
          margin-left: .1rem;
        }
      }
      .banner-title-wrapper {
        .banner-title {
          margin-left: .2rem;
          color: #fff;
          font-size: .36rem;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.70);
        }
      }
    }
  }

</style>
