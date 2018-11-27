<template lang="pug">
  .banner-container
    .banner
      img.banner-img(:src="imgs[0]" @click="handleClickImg")
      .banner-info
        .banner-icons
          span.iconfont.banner-icon &#xe736;
          e.banner-icon-number {{imgs.length}}
        .banner-title-wrapper
          .banner-title 故宫(AAAAA景区)
    common-gallary(:imgs="imgs" v-show="showGallary" @close="handleCloseGallary")
</template>
<script type="text/ecmascript-6">
import CommonGallary from 'common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg', 'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_350x240_df8ba9f7.jpg', 'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_350x240_b09a9503.jpg', 'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_350x240_cf4cd08e.png', 'http://img1.qunarzz.com/sight/p0/1410/e3/73da8d3e19cdc41c1932d4fcd22ec792.water.jpg_350x240_af846382.jpg', 'http://img1.qunarzz.com/sight/p0/1410/34/f540a04367d06820af4dfeaf0ad40257.water.jpg_350x240_100fac79.jpg', 'http://img1.qunarzz.com/sight/p0/1410/9d/fe8109ab5df1c9c324e74284fa802e72.water.jpg_350x240_8571d9ed.jpg', 'http://img1.qunarzz.com/wugc/p238/201306/16/d9090c728fed64eb93835fbb.jpg_350x240_afe6c0fa.jpg', 'http://img1.qunarzz.com/sight/p0/1501/af/af47583adca3f972.water.jpg_350x240_95007698.jpg', 'http://img1.qunarzz.com/sight/p0/1410/be/d44bb81ae3218a627a65ded451326b2c.water.jpg_350x240_9f163cbc.jpg']
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
