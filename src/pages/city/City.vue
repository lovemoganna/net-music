<template lang="pug">
    .city-container
      city-header
      city-search
</template>
<script type="text/ecmascript-6">
import CityHeader from './components/Header'
import CitySearch from '../search/components/Header'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>
<style lang="postcss" scoped>

</style>
