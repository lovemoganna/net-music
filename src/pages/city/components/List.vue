<template lang="pug">
  .city-list(ref="wrapper")
    div
      .area
        .title.border-topbottom 当前城市
        .button-list
          .button-wrapper
            .btn 北京
      .area
        .title.border-topbottom 热门城市
        .button-list
          .button-wrapper(v-for="item of hot" :key="item.id")
            .btn {{item.name}}
      .area(v-for="(item , key) of cities" :key="key" :ref="key")
        .title.border-topbottom {{key}}
        ul.item-list(v-for="innerItem of item" :key="innerItem.id")
          li.item.border-bottom {{innerItem.name}}

</template>
<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const elem = this.$refs[this.letter][0]
        this.scroll.scrollToElement(elem)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .border-topbottom {
    &:before {
      border-color: #eee;
    }
    &:after {
      border-color: #eee;
    }
  }

  .border-bottom {
    &:before {
      border-color: #eee;
    }
    &:after {
      border-color: #eee;
    }
  }

  .city-list {
    position: absolute;
    overflow: hidden;
    top: 1.68rem;
    left: 0;
    right: 0;
    bottom: 0;
    .title {
      line-height: .54rem;
      background: #eee;
      padding-left: .2rem;
      color: #666;
      font-size: .3rem;
    }
    .button-list {
      overflow: hidden;
      padding: .1rem .6rem .1rem .1rem;
      .button-wrapper {
        float: left;
        width: 33.33%;
        .btn {
          margin: .1rem;
          padding: .1rem 0;
          text-align: center;
          border: .02rem solid #ccc;
          border-radius: .06rem;
        }
      }
    }

    .item-list {
      .item {
        line-height: .76rem;
        color: #666;
        padding-left: .2rem;
      }
    }
  }
</style>
