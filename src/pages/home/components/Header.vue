<template lang="pug">
  .header
    .header-left
      .iconfont.icon-back &#xe660;
    .header-input
      span.iconfont.icon-search &#xe651;
      span.input-text 你想去的任何地方
    router-link(to="./city")
      .header-right {{this.city}}
        span.iconfont.icon-arrow &#xe65e;
</template>
<script type="text/ecmascript-6">
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables';

  .header {
    display: flex;
    line-height: $headerHeight;
    background: $bgColor;
    color: #fff;
    text-align: center;
    .header-left {
      width: .64rem;
      float: left;
      .icon-back{
        text-align: center;
        font-size: .3rem;
      }
    }
    .header-input {
      flex: 1;
      /*将高度定死*/
      height: .64rem;
      /*处理居中的问题*/
      line-height: .64rem;
      margin-top: .12rem;
      margin-left: .2rem;
      text-align: left;
      padding-left: .2rem;
      background: #fff;
      border-radius: .1rem;
      color: #ccc;
      .input-text{
        padding-left: .1rem;
      }
    }
    .header-right {
      width: 1.24rem;
      float: right;
      color: #fff;
      .icon-arrow{
        margin-left: .1rem;
        font-size: .24rem;
      }
    }

  }
</style>
