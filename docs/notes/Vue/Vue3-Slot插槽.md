---
title: Vue3-Slot插槽
author: 老木求知者
createTime: 2024/07/11 16:31:02
permalink: /Vue/a4wdq6kv/
---
## Vue3- Slot插槽
使用Props，可以实现父组件传递数据给子组件。而Slot插槽，可以让父组件的模板片段，渲染在子组件中。
## 默认插槽

父组件加载子组件，并设置插槽内容。
```vue
<template>
  <Son ref="son">
    <!-- 插槽内容 -->
    <div>hello Son</div>
  </Son>
</template>
```
子组件设置插槽出口，渲染父组件中的插槽内容。
```vue
<template>
  <h1>I am Son</h1>
  <!-- 插槽出口 -->
  <slot></slot>
</template>
```

上述代码，在执行时相当于把 `<div>hello Son</div>` 替换掉 `<slot></slot>` ，如下。

```vue
<template>
  <h1>I am Son</h1>
  <div>hello Son</div>
</template>
```
如果在没有设置具体的插槽名称，那么父组件中调用`son`组件中的内容，会全部默认渲染到子组件中的没有名称的默认`slot`中。需要注意的是其实默认插槽也是有`name`的，只不过值默认是`default`。
```html
  <Son ref="son">
    <!-- 插槽内容 -->
    <!-- 这里写的全部内容都会被渲染到son组件中的slot -->
    <div>
        <h1>hello Son</h1>
        ... ...
    </div>
  </Son>
```


## 具名插槽

使用具名插槽，可以传递一个或者多个模板到组件中分别指定的位置。

在父组件中，我们需要给多个模板定义名称，用来区分。需要注意的是`v-solt:name`，需要写在组件本身或者`template`标签包裹的模板。

`v-solt:name` 可以简写为`:name 或者 #name`。
```vue
<template>
  <Son ref="son">
    <template #title>
      <h1>我是title</h1>
    </template>
   
    <template v-slot:content>
      <h1>我是content</h1>
    </template>

  </Son>
</template>
```
`son`组件需要设置模板渲染出口以及出口名称。需要注意的是，这里的名称需要和父组件中定义的模板名称一致，才能展示。换句话说，就是什么名称的模板将会渲染在什么名称的插槽`Slot`出。

```vue
<template>
  <slot name="title"></slot>
  <h1>I am Son</h1>
  <slot name="content"></slot>
</template>
```

## 条件插槽
有时你需要根据插槽是否存在来渲染某些内容。
你可以结合使用 $slots 属性与 v-if 来实现。
```vue
<template>
<div class="body">
  <div v-if="$slots.header">
    <slot name="header"></slot>
  </div>
  <div v-if="$slots.body">
    <slot name="body"></slot>
  </div>
  <div v-if="$slots.footer">
    <slot name="footer"></slot>
  </div>
</div>
 </template>
```

## 动态插槽

有时候我们需要动态参数去展示插槽名
则可以定义下面这样的动态插槽：

父组件：
```vue
<template v-slot:[dynamicSlotName]>
    ...
  </template>
  <!-- 缩写为 -->
  <template #[dynamicSlotName]>
    ...
  </template>
```

子组件：
```vue
<template>
 <slot name="dynamic1"></slot>
 <slot name="dynamic2"></slot>
 <slot name="dynamic3"></slot>
</template>
```

## 作用域插槽

在vue3中作用域插槽通常用于子组件向父组件传递数据
```html
	<!--reference  Vue3 slot插槽多层传递
		https://blog.csdn.net/qq_32657473/article/details/130124381?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-130124381-blog-131728362.235%5Ev38%5Epc_relevant_sort_base1&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-130124381-blog-131728362.235%5Ev38%5Epc_relevant_sort_base1&utm_relevant_index=1
	-->
```
```vue
<template>
  <Son ref="son">
    <template #title="{message}">
      <!-- 这里也可以使用接结构 -->
      <!-- <template v-slot:title="{ message }">  -->
      <!-- <h1>{{ message }}</h1> -->
      <h1>{{ message }}</h1>
    </template>
    <template v-slot:content="content">
      <h1>{{ content.message }}</h1>
    </template>
  </Son>
</template>
<script setup lang="ts" name="father">
import Son from '@/components/son.vue'
</script>
```
子组件需要传递数据
```vue
<template>
  <slot name="title" :message="title"></slot>
  <h1>I am Son</h1>
  <slot name="content" :message="content"></slot>
</template>
<script setup lang="ts" name="son">

import { ref } from 'vue';
const title = ref('I am Title')
const content = ref('I am content')
</script>
```





