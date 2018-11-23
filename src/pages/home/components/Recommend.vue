<template lang="pug">
  .recommend-title
    .title 热销推荐
    ul(v-if="showRecommend")
      li.item.border-bottom(v-for="item of list" :keys="item.id")
        img.item-img(:src="item.imgURL")
        .item-info
          p.item-title {{item.title}}
          p.item-desc {{item.desc}}
          button.item-button 查看详情
</template>
<script type="text/ecmascript-6">
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
    }
  },
  computed: {
    showRecommend () {
      // default false
      return this.list.length
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/ellipsis.scss';

  .title {
    line-height: .8rem;
    background: #eee;
    margin-top: .15rem;
    text-indent: .2rem;
  }
  .item {
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    .item-img {
      width: 2rem;
      height: 2rem;
      overflow: hidden;
      padding: .1rem;
    }
    .item-info {
      flex: 1;
      padding: .1rem;
      min-width: 0;
      .item-title {
        line-height: .54rem;
        font-size: .32rem;
        @include ellipsis();
      }
      .item-desc {
        line-height: .4rem;
        color: #ccc;
        @include ellipsis();
      }
      .item-button {
        line-height: .44rem;
        margin-top: .16rem;
        background: #ff9300;
        color: white;
        padding: 0 .1rem;
        -webkit-border-radius: .06rem;
        -moz-border-radius: .06rem;
        border-radius: .06rem;
      }
    }
  }
</style>
