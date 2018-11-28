## css overflow bug

Q: 遇到一个bug,在使用`vue-awesome-swiper`的时候,我需要将显示的当前页数,往下面调,而不是遮挡住图片.

S: 由于是`absolute`定位,所以我就调节bottom,但是却不显示.我猜测是`overflow:hidden`搞得鬼,所以我找了这个容器的第一个父级容器,将其设置为`inherit`,还是不行.

然后我再去找他的父级容器,再将`oveflow设置为inherit`

## 关于全局事件的解绑

Q: 之前为了处理`Detail-Header`中的动画效果.

思路如下:
- 先添加一个返回首页的X,方便用户返回首页
- 然后用户往下滑动的时候,可以出现当前景点的名字

bug出在第二处位置.

```js

```
