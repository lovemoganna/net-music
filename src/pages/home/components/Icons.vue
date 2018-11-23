<template>
  <div class="icons" id="myIcons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="page of pages" :key="page.id">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgURL"/>
          </div>
          <p class="icon-desc">{{item.icon_desc}}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script type="text/ecmascript-6">

export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
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
      .swiper-pagination-bullets{
        bottom: 0;
      }
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
        bottom: .6rem;
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
        height: .84rem;
        line-height: .84rem;
        text-align: center;
        color: $darkTextColor;
        font-size: .28rem;
        @include ellipsis();
      }
    }
  }
</style>
