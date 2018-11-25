<template lang="pug">
  .city-container
    city-header
    city-search
    city-list(:cities="cities" :hot="hotCities")
    city-alphabet(:cities="cities")
</template>
<script type="text/ecmascript-6">
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getInfo () {
      axios.get('api/city')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>
<style lang="postcss" scoped>

</style>
