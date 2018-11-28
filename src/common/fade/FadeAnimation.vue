<template lang="pug">
  transition
    slot

</template>
<script type="text/ecmascript-6">
export default {
  name: 'Fade'
}
</script>
<style lang="postcss" scoped>
.v-enter,.v-leave-to{
  opacity: 0;
}
.v-enter-active,.v-leave-active{
 transition: opacity .5s;
}

</style>
