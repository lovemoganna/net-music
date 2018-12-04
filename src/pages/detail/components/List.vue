<template lang="pug">
  .list-container
    .item-title.border-bottom(v-for="item in list" :key="item.id")
      span.item-title-icon
      em {{item.title}}
      .item-children(v-if="item.children")
        detail-list(:list="item.children")
</template>
<script type="text/ecmascript-6">
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>
<style lang="scss" scoped>

  .item-title {
    line-height: .8rem;
    font-size: .32rem;
    padding: 0 .2rem;
    .item-title-icon {
      display: inline-block;
      position: relative;
      left: .06rem;
      top: .06rem;
      width: .36rem;
      height: .36rem;
      background: url(https://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin-right: .1rem;
      background-size: .4rem 3rem;
    }
    .item-children{
      padding: 0 .2rem;
    }
  }
</style>
