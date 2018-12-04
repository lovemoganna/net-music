export default {
  // 类似于组件中的computed的属性.
  doubleCity (state) {
    return state.city + ' ' + state.city
  }
}
