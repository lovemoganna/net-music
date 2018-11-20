<template lang="pug">
  .header
    .header-left
      .iconfont.icon-back &#xe660;
    .header-input
      span.iconfont.icon-search &#xe651;
      span.input-text 你想去的地方
    .header-right 城市
      span.iconfont.icon-arrow &#xe65e;
</template>
<script type="text/ecmascript-6">
export default {
  name: 'HomeHeader'
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables';

  .header {
    display: flex;
    line-height: .86rem;
    background: $bgColor;
    color: #fff;
    text-align: center;
    .header-left {
      width: .64rem;
      float: left;
      .icon-back{
        text-align: center;
        font-size: .4rem;
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
    }
    .header-right {
      width: 1.24rem;
      float: right;
      .icon-arrow{
        margin-left: .1rem;
        font-size: .24rem;
      }
    }

  }
</style>
