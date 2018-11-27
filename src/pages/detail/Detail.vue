<template lang="pug">
  .detail-container
    detail-banner
    detail-header
</template>
<script type="text/ecmascript-6">
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>
<style lang="postcss" scoped>

</style>
