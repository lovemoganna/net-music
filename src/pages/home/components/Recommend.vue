<template lang="pug">
  .recommend-title
    .title 热销推荐
    ul
      li.item.border-bottom(v-for="item of recommendList" :keys="item.id")
        img.item-img(:src="item.imgUrl")
        .item-info
          p.item-title {{item.title}}
          p.item-desc {{item.desc}}
          button.item-button 查看详情
</template>
<script type="text/ecmascript-6">
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
        title: '北京欢乐谷',
        desc: '北京欢乐谷好玩好玩北京欢乐谷'
      }, {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
        title: '北京欢乐谷',
        desc: '北京欢乐谷好玩好玩北京欢乐谷'
      }, {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
        title: '北京欢乐谷',
        desc: '北京欢乐谷好玩好玩北京欢乐谷'
      }]
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
