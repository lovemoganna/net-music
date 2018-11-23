<template lang="pug">
  .weekend-title
    .title 周末去哪玩
    ul
      li.item.border-bottom(v-for="item of list" :keys="item.id")
        .item-img-wrapper
          img.item-img(:src="item.img_url")
        .item-info
          p.item-title {{item.product_name}}
          p.item-desc {{item.product_desc}}
</template>
<script type="text/ecmascript-6">
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/ellipsis.scss';
  .title {
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }
  .item-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 33.44%;
    .item-img{
      width: 100%;
    }
  }
  .item-info{
    padding: .14rem .2rem .2rem .2rem;
    .item-title{
      color: #212121;
      font-size: .28rem;
      line-height: .48rem;
      @include ellipsis()
    }
    .item-desc{
      color: #616161;
      font-size: .24rem;
      line-height: .42rem;
      @include ellipsis()
    }
  }
</style>
