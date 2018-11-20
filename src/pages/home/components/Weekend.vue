<template lang="pug">
  .weekend-title
    .title 周末去哪玩
    ul
      li.item.border-bottom(v-for="item of recommendList" :keys="item.id")
        .item-img-wrapper
          img.item-img(:src="item.imgUrl")
        .item-info
          p.item-title {{item.title}}
          p.item-desc {{item.desc}}
</template>
<script type="text/ecmascript-6">
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '外地人的放松时光',
        desc: '放松放松好工作,高高兴兴挣大钱!'
      },
      {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '外地人的放松时光',
        desc: '放松放松好工作,高高兴兴挣大钱!'
      },
      {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '外地人的放松时光',
        desc: '放松放松好工作,高高兴兴挣大钱!'
      },
      {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '外地人的放松时光',
        desc: '放松放松好工作,高高兴兴挣大钱!'
      }
      ]
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
