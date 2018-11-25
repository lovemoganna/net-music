<template lang="pug">
  .city-container
    city-header
    city-search
    city-list
    city-alphabet
</template>
<script type="text/ecmascript-6">
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>
<style lang="postcss" scoped>

</style>
