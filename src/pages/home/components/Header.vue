<template lang="pug">
  .header
    .header-left
      .iconfont.icon-back &#xe660;
    .header-input
      router-link(to="./search")
        span.iconfont.icon-search &#xe651;
        span.input-text 输入城市/景点/游玩主题
    .header-right {{this.city}}
      router-link(to="./city")
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
        font-size: .36rem;
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
      .icon-search{
        color: #e4e7ea;
      }
      .input-text{
        padding-left: .1rem;
        color: #e4e7ea;
      }
    }
    .header-right {
      width: 1.24rem;
      float: right;
      color: #fff;
      .icon-arrow{
        margin-left: .1rem;
        font-size: .24rem;
        color: #fff;
      }
    }

  }
</style>
