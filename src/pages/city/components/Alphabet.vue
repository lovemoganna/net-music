<template lang="pug">
  ul.list
    li.item(v-for="(item,key) of cities" :key="item.key") {{key}}

</template>
<script type="text/ecmascript-6">
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>
<style lang="scss" scoped>
  @import '~styles/variables';
.list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.68rem;
  right: 0;
  bottom: 0;
  width: .4rem;
  .item{
    line-height: .4rem;
    color: $bgColor;
  }
}
</style>
