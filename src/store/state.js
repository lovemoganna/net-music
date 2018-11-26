// 如果用户使用浏览器隐身模式,可能会报错
let defaultCity = '东北'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default{
  city: defaultCity
}
