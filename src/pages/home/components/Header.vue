<template lang="pug">
  .header
    .header-left
      .iconfont.icon-back &#xe660;
    .header-input
      span.iconfont.icon-search &#xe651;
      span.input-text 输入城市/景点/游玩主题
    router-link(to="./city")
      .header-right {{this.doubleCity}}
        span.iconfont.icon-arrow &#xe65e;
</template>
<script type="text/ecmascript-6">
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // 将 city这个公用数据,映射到名字叫做city的计算属性当中
    ...mapState(['city'])
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
      min-width: 1.04rem;
      padding: 0 .1rem;
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
