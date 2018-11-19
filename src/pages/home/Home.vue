<template lang="pug">
  .container
    home-header
    home-swiper
</template>
<script type="text/ecmascript-6">
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
<style lang="postcss" scoped>

</style>
