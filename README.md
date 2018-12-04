## 项目介绍
仿写去哪儿网站景点票

## git工作流
- 采用git flow 
- 提交信息使用commendizen 

## 工作环境
node-version: 10.11.0
vue-cli: 3.1.3
yarn: 1.12.3

## Mock Server
Json-Server RESTAPI environment build in centos

## ajax
axios
## 插件的使用
`vue-awesome-swiper` & `better-scroll`

## 图标字体的优化
一些常见的图标使用iconfont字体,Detail中`DetailRecommend`组件中的字体左侧的图片使用base64转换.来达到图片性能优化的目的.

## 项目页面
- Home (首页)
- City (城市选择页面)
- Detail (景点详情页面)

## 页面开发日志 & 功能开发

### Home Page Components  
- add header 
- add swiper(vue-awesome-swiper实现轮播图)
- add icons(图标)
- add recommend(首页推荐)
- add weekend(周末去哪)

### City Page Components  
- add header  
- add search 搜索城市 
- add city list (use better-scroll plugin)
- add Alphabet notes (滑动选择字母对应的城市)

### Detail Page Components 
- header(动画效果)
- Banner(照片墙展示)
- Base(flex布局)
- List(递归组件的编写)

use Vuex achieve the HOME-Header component && City-List component && City-Search component data linkage

### Common Components 
- gallary(画廊)
- FadeAnimation(渐入渐出效果)

### 百度地图的使用

添加百度地图展示详细地点.






