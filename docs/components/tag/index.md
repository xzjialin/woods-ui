<style>
  .s-tag{
    margin-right: 10px;
  }
  .demo-tag{
 padding: 32px;
    border: 1px solid #e2ecf4;
    border-radius: 4px 4px 0 0;
    background-color: #fff;
    margin-top: 16px;
}
</style>
# Tag 间距

用于标记和选择。


## 基础用法
由 `type` 属性来选择 `tag` 的类型。 也可以通过 `color` 属性来自定义背景色。
:::demo
```vue
<template>
<div class='demo-tag'>
<s-tag color="success">标签二</s-tag>
  <s-tag color="info">标签三</s-tag>
  <s-tag color="warning">标签四</s-tag>
  <s-tag color="danger">标签五</s-tag>
  </div>
  </template>

```
:::