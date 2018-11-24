<template lang="pug">
  .city-header 城市选择
    router-link(to="/")
      .iconfont.city-back &#xe660;
</template>
<script type="text/ecmascript-6">
export default {
  name: 'CityHeader'
}
</script>
<style lang="scss" scoped>
  @import "~styles/variables";
  .city-header{
    position: relative;
    overflow: hidden;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #fff;
    background: $bgColor;
    .city-back{
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align: center;
      color: #fff;
      font-size: .3rem;
    }
  }
</style>
