<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in imgs" :key="item.id">
          <img class="swiper-image"
               :src="item"
               alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        // 只要swiper组件监听到父级元素的DOM发生变化的时候,会自动刷新一次,。
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .wrapper {
      overflow: inherit;
      height: 0;
      padding-bottom: 68.57%;
      width: 100%;
      .swiper-container {
        overflow: inherit;
        .swiper-img {
          width: 100%;
        }
        .swiper-pagination {
          color: #ffffff;
          bottom: -1rem;
        }
      }
    }
  }

</style>
