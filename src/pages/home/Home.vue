<template lang="pug">
  .container
    home-header
    home-swiper
    home-icons
</template>
<script type="text/ecmascript-6">
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
<style lang="postcss" scoped>

</style>
