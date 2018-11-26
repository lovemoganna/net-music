<template lang="pug">
 .search-container
  .city-search
    .search-input
      input.search-text(type="text" placeholder="输入城市名或拼音" v-model="keyword")
  .search-content(ref="search" v-show="keyword")
    ul
      li.search-item.border-bottom(v-for="item of list" :key="item.id") {{item.name}}
      li.search-item.border-bottom(v-show="hasNoData") 没有匹配数据

</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  },
  watch: {
    // 监听 keyword的改变
    keyword () {
      if (!this.keyword) {
        this.list = []
        return
      }
      // 函数节流
      if (this.timer) {
        clearTimeout(this.timer)
      }
      setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          // 判断关键词是否在cities中
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        // list存储包含关键词的result
        this.list = result
      }, 100)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables';

  .city-search {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    height: $headerHeight;
    line-height: $headerHeight;
    background: #00bcd4;
    .search-input {
      display: flex;
      flex: 1;
      padding: 0 .1rem;
      margin: .14rem 0;
      align-items: center;
      color: #212121;
      border-radius: .06rem;
      .search-text {
        box-sizing: border-box;
        min-width: 100%;
        text-align: center;
        height: .64rem;
        line-height: .64rem;
        padding: 0 .2rem;
        border: 0;
        border-radius: .06rem;
      }
    }
  }
  .search-content{
    overflow: hidden;
    position: absolute;
    top: 1.68rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    z-index: 1;
    .search-item{
      line-height: .62rem;
      padding-left: .2rem;
      color: #666;
      background: #fff;
    }
  }
</style>
