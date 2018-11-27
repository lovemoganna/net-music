<template lang="pug">
  .banner
    img.banner-img(src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg")
    .banner-bar
      .banner-icons
        span.iconfont.banner-icon &#xe736;
        e.banner-icon-number 10
      .banner-info
        .banner-title 故宫(AAAAA景区)
    .banner-back
      span.iconfont.banner-icon-back &#xe660;
</template>
<script type="text/ecmascript-6">
export default {
  name: 'DetailHeader'
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
    .banner-bar {
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
        background-image: linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,0.8));
        .banner-icon {
          margin-right: .1rem;
          font-size: .24rem;
        }
        .banner.icon-number {
          margin-left: .1rem;
        }
      }
      .banner-info {
        .banner-title {
          margin-left: .2rem;
          color: #fff;
          font-size: .36rem;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.70);
        }
      }
    }
    .banner-back{
      position: absolute;
      top: .1rem;
      left: .1rem;
      width: .72rem;
      height: .72rem;
      line-height: .72rem;
      background: rgba(0, 0, 0, 0.66);
      border-radius: .45rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .banner-icon-back{
        font-size: .36rem;
        color: #ffffff;
      }
    }
  }

</style>
