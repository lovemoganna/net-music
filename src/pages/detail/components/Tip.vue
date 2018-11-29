<template lang="pug">
  .tip-container.border-bottom
    .tip-icon.iconfont &#xe60e;
    .tip-text 1.如遇天安门广场戒严，请从故宫两侧（东华门或西华门），沿故宫城墙步行至午门验票！2.除法定节假日，故宫博物院实行周一闭馆。
    span.iconfont.tip-icon-enter &#xea6c;

</template>
<script type="text/ecmascript-6">
export default {
  name: 'DetailTip'
}
</script>
<style lang="scss" scoped>
@import "~styles/ellipsis";
.tip-container{
  background-color: #fff5e5;
  color: #ff8300;
  margin-bottom: .2rem;
  height: .88rem;
  line-height: .88rem;
  padding-left: .23rem;
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  .tip-text{
    padding-right: .2rem;
    @include ellipsis()
  }
  .tip-icon-enter{
      color: #9e9e9e;
      margin-right: .2rem;
  }
}
</style>
