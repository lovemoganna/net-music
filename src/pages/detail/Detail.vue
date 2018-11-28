<template lang="pug">
  .detail-container
    detail-banner(:bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs")
    detail-header
    detail-list(:list="categoryList")
</template>
<script type="text/ecmascript-6">
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      bannerImg: '',
      categoryList: [],
      gallaryImgs: [],
      sightName: ''
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('api/detail', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSuccess)
    },
    getDetailInfoSuccess (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.bannerImg = data.bannerImg
        this.categoryList = data.categoryList
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>
<style lang="postcss" scoped>

</style>
