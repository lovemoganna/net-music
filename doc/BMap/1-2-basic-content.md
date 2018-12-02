---
sidebar: auto
meta:
  - name: 百度地图的基础内容
    content: BMap-basic-content
prev: false
next: false
---
## 基础

|参数|内容|可选值|
|:----:|:----:|:----:|
|Animation|动画效果||
|MapType|地图类型|
|LengthUnit|长度单位制|公制/英制|
|HighlightModes|此常量用于描述对象当前状态||
|TransitPolicy|公交方案|最少时间/最少换乘/最少步行/不乘地铁|
|DrivingPolicy|表示驾车方案的策略配置|最少时间/最短距离/避开高速|

## 私有类型

|参数|类型|说明|
|:----:|:----:|:----:|
|Point|经纬度|{lng: Number lat: Number}|
|Size|指定区域的长宽尺寸|{width: Number,height: Number)|
|Pixel|描述地图上某一个像素点的坐标|{x: Number y: Number}|
|Bounds|一片区域上由西南和东北两个坐标围成的一片区域|{sw: Number ne: Number}|
|Icon|图标|{sw: Number ne: Number}|

