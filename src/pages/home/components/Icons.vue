<template lang="pug">
  .icons#myIcons
    swiper
      swiper-slide(v-for="(page , index ) of pages" :keys="page.index")
        .icon(v-for="item of page" :key="item.id")
          .icon-img
            img.icon-img-content(:src='item.imgUrl')
          p.icon-desc {{item.desc}}
</template>
<script type="text/ecmascript-6">

export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '北京必游'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '文化古迹'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      }, {
        id: '0006',
        imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        desc: '打卡圣地'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
        desc: '野生动物园'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        desc: '泡温泉'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        desc: '泡温泉'
      }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        // 展示数据显示的位置,2/8 取整 = 0
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }

}
</script>
<style lang="scss">
  @import '~styles/variables.scss';
  @import '~styles/ellipsis.scss';
  .icons {
    margin-top: .1rem;
    .swiper-container {
      height: 0;
      padding-bottom: 50%;
    }
    .icon {
      position: relative;
      overflow: hidden;
      float: left;
      width: 25%;
      height: 0;
      padding-bottom: 25%;

      .icon-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .44rem;
        box-sizing: border-box;
        padding: .1rem;
        .icon-img-content {
          /*img 居中*/
          display: block;
          margin: 0 auto;
          height: 100%;
        }
      }
      .icon-desc {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        color: $darkTextColor;
        @include ellipsis();
      }
    }
  }
</style>
