<template lang="pug">
  ul.list
    li.item A
    li.item A
    li.item A
    li.item A
    li.item A
    li.item A

</template>
<script type="text/ecmascript-6">
export default {
  name: 'CityAlphabet'
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
