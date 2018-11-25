<template lang="pug">
  .city-search
    router-link(to="/")
      .search-left
        a.iconfont.icon-back &#xe660;
    .search-input
      input.search-text(type="text" placeholder="输入城市名或拼音")
    span.search-right
      a.search-text 搜索
</template>
<script type="text/ecmascript-6">
export default {
  name: 'SearchHeader'
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables';

  .city-search {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    height: $headerHeight;
    line-height: $headerHeight;
    background: #ffffff;
    .search-left {
      .icon-back {
        width: .4rem;
        color: #616161;
        font-size: .36rem;
        padding: 0 .2rem;
        text-align: left;
      }
    }
    .search-input {
      display: flex;
      flex: 1;
      padding: 0 .6rem 0 .2rem;
      margin: .14rem 0;
      align-items: center;
      background: #f2f2f2;
      color: #212121;
      border-radius: .3rem;
      .search-text {
        min-width: 100%;
        background: #f2f2f2;
        text-align: center;
        height: .36rem;
        line-height: .36rem;
        padding: .1rem 0;
        background: #f2f2f2;
        border: 0;
        border-radius: .06rem;
      }
    }
    .search-right{
      display: inline-block;
      padding: 0 .1rem;
      .search-text{
        display: inline-block;
        width: .74rem;
        margin-right: .04rem;
        color: #212121;
      }
    }
  }
</style>
