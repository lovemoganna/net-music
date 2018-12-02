---
sidebar: auto
meta:
  - name: 使用第三方组件
    content: 使用第三方组件
prev: false
next: false
---
## 全局使用
```js
import Vue from 'vue'
import {BmlMarkerClusterer} from 'vue-baidu-map'

Vue.component('bml-marker-cluster', BmlMarkerClusterer)
```

## 局部使用

```js
import {BmlMarkerClusterer} from 'vue-baidu-map'
export default {
  components: {
    BmlMarkerClusterer
  }
}
```



