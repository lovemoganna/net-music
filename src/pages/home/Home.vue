<template lang="pug">
  .container
    home-header
    home-swiper
    home-icons
    home-recommend
    home-weekend
</template>
<script type="text/ecmascript-6">
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
<style lang="postcss" scoped>

</style>
