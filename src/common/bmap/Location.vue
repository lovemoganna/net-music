<template>
  <div class="poi-container">
    <div class="header-fixed">
      故宫
      <div class="iconfont header-fixed-back" @click="handleLocationClose">&#xe660;</div>
    </div>
    <div id="allmap"></div>
  </div>
</template>
<script type="text/ecmascript-6">
/* eslint-disable */
  export default {
    name: 'Location',
    methods:{
      handleLocationClose(){
        this.$emit('close')
      },
      createMap(){
        // 百度地图API功能
        var map = new BMap.Map("allmap");
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 12);
        var local = new BMap.LocalSearch(map, {
          renderOptions:{map: map}
        });
        local.search("故宫博物院");
      }
    },
    mounted() {
     this.createMap()
    }
  }
</script>
<style lang="scss" scoped>
  @import "~styles/variables";
  .poi-container {
    overflow: hidden;
    .header-fixed {
      position: fixed;
      z-index: 100;
      top: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      height: $headerHeight;
      line-height: $headerHeight;
      text-align: center;
      color: #fff;
      background: $bgColor;
      .header-fixed-back {
        position: absolute;
        top: 0;
        left: 0;
        width: .64rem;
        text-align: center;
        color: #fff;
        font-size: .36rem;
      }
    }
    #allmap {
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 98;
      margin: 0;
      width: 100%;
      height: 100%;
      min-width:600px;
      min-height:667px;
    }
  }
</style>
