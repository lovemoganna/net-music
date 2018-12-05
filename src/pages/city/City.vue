<template lang="pug">
  .city-container
    city-header
    city-search(:cities="cities")
    city-list(:cities="cities" :hot="hotCities" :letter="letter")
    city-alphabet(:cities="cities" @change="handleLetterChange")
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
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getInfo () {
      this.$axios.get('https://hdbk.site/api/city')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>
<style lang="postcss" scoped>

</style>
