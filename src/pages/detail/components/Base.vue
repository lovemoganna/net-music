<template lang="pug">
  .base-container
    .base-info
      .base-header
        .base-header-left.border-right
          .base-star
            span.base-star-number 5.0
            em 分
            span.base-star-nice 超赞
          .base-comment
            span.base-comment-number 334341条评论
            span.base-comment-desc 90条攻略
            span.iconfont.base-icon-enter &#xea6c;
        .base-header-right
          .base-right-desc
            span.base-desc 景点简介
          .base-right-open
            span.base-open 开放时间、贴士
            span.iconfont.base-icon-enter &#xea6c;
      .base-location.border-bottom(@click="handleEnterMap")
        .base-location-icon.iconfont &#xe774;
        .base-location-text 北京市东城区景山前街4号
        span.iconfont.base-icon-enter &#xea6c;
    Location(v-show="showLocation" @close="handleLocationClose")
</template>
<script type="text/ecmascript-6">
import Location from 'common/bmap/Location'
export default {
  name: 'DetailBase',
  data () {
    return {
      showLocation: false
    }
  },
  components: {
    Location
  },
  methods: {
    handleEnterMap () {
      this.showLocation = true
    },
    handleLocationClose () {
      this.showLocation = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .base-info {
    display: flex;
    flex-flow: column nowrap;
    height: 1.88rem;
    line-height: 1.88rem;
    background: #fff;
    position: relative;
    top: -.1rem;
    padding: .1rem .2rem 0 .2rem;
    margin-bottom: .1rem;
    border-radius: .1rem .1rem 0 0;
    .base-header {
      display: flex;
      height: .82rem;
      width: 100%;
      line-height: .82rem;
      padding: .1rem 0 .2rem 0;
      .base-header-left {
        position: relative;
        flex: 1;
        flex-flow: column nowrap;
        &.border-right::before{
          border-color: #eee;
          right: -.15rem;
        }
        .base-star {
          height: .5rem;
          line-height: .5rem;
          align-items: center;
          color: #ff8300;
          .base-star-number {
            font-size: .42rem;
            line-height: .42rem;
          }
          .base-star-nice {
            line-height: .48rem;
            margin-left: .2rem;
          }
        }
        .base-comment {
          height: .32rem;
          line-height: .32rem;
          color: #9e9e9e;
          font-size: .24rem;
          .base-comment-number {
            margin-right: .2rem;
          }
          .base-comment-desc {
            margin-right: .2rem;
          }
          .base-icon-enter {
            position: absolute;
            top: .3rem;
            color: #9e9e9e;
          }
        }
      }
      /*here*/

      .base-header-right {
        position: relative;
        margin-left: .4rem;
        flex: 1;
        flex-flow: column nowrap;
        .base-right-desc {
          height: .5rem;
          line-height: .5rem;
          align-items: center;
          color: #212121;
        }
        .base-right-open {
          height: .32rem;
          line-height: .32rem;
          color: #9e9e9e;
          font-size: .24rem;
          .base-open {
            margin-right: .2rem;
          }
          .base-icon-enter {
            position: absolute;
            right: 0;
            top: .3rem;
            color: #9e9e9e;
          }
        }
      }
    }
    .base-location {
      display: flex;
      flex: 1;
      padding: .2rem 0;
      line-height: .36rem;
      color: #212121;
      flex-flow: row nowrap;
      justify-content: space-between;
      .base-location-text {
        position: relative;
        margin-left: -2.5rem;
      }
      .base-icon-enter {
        text-align: center;
        color: #9e9e9e;
      }
    }
  }

</style>
