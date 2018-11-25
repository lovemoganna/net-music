<template lang="pug">
  .city-search
    .search-input
      input.search-text(type="text" placeholder="输入城市名或拼音")
</template>
<script type="text/ecmascript-6">
export default {
  name: 'CitySearch'
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
    background: #00bcd4;
    .search-input {
      display: flex;
      flex: 1;
      padding: 0 .2rem;
      margin: .14rem 0;
      align-items: center;
      color: #212121;
      border-radius: .06rem;
      .search-text {
        box-sizing: border-box;
        min-width: 100%;
        text-align: center;
        height: .64rem;
        line-height: .64rem;
        padding: 0 .2rem;
        border: 0;
        border-radius: .06rem;
      }
    }
  }
</style>
