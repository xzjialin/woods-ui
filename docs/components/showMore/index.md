
<style>
.demo-block {
    padding: 32px;
    border: 1px solid #e2ecf4;
    border-radius: 4px 4px 0 0;
    background-color: #fff;
    margin-top: 16px;
}
</style>
## SMore 显示更多
----

### 基础用法
文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠。

:::demo
```vue
<template>
<div class="demo-block">
  <s-more :len='10' text='文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠。'>
  </s-more>
</div>
</template>
```
:::

### 高级用法
文本超出显示长度，折叠起来，展开后，可以通过```allow-fold```指定是否需要收起，也可通过```show-text```设置折叠时的文案，通过```hidden-text```设置收起的文案

:::demo
```vue
<template>
<div class="demo-block">
  <s-more
    allow-fold 
    show-text='show'
    hidden-text='hidden'
    :len='10' 
    text='文本超出显示长度，折叠起来，展开后，可以通过 allowFold 指定是否需要收起'>
  </s-more>
</div>
</template>
```
:::






## Row 属性

| 属性 | 说明                         | 类型   | 可选值       | 默认值                                                                    |
| --------- | ----------------------------------- | ------ | --------------------- | -------------------------------------------------------------------------- |
| len | 显示文本的长度 | Number |— | -1(不进行折叠) |
| text | 显示的内容 | string |—  |  |
| show-text | 折叠时需要显示文案 | String |— | 显示更多 |
| hidden-text | 隐藏时需要显示文案 | string | — | 隐藏 |