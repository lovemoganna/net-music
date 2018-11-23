<template>
  <div class="wrapper" id="mySwiper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-image" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      }
    }
  },
  computed: {
    showSwiper () {
      // default false
      return this.list.length
    }
  }
}
</script>

<style lang="scss">
  .wrapper {
    width: 100%;
    height: 0;
    overflow: hidden;
    /*图片高: 宽的值: 26.67%,已知wrapper的宽度是100%.他的高度相对于宽度会自动撑开26.67%*/
    padding-bottom: 26.67%;
    background: grey;
    .swiper-image {
      width: 100%
    }
    .swiper-pagination-bullet-active {
      background: #ffffff !important;
    }
  }
</style>
