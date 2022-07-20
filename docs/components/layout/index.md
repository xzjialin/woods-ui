

# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

:::tip

组件默认使用 Flex 布局，不需要手动设置 `type="flex"`。

请注意父容器避免使用 `inline` 相关样式，会导致组件宽度不能撑满。

:::

### 基础布局
使用列创建基础网格布局。

通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

:::demo 
  ```vue
<template>
   <s-row>
    <s-col><div class="grid-content ep-bg-purple-dark" /></s-col>
  </s-row>
  <s-row>
    <s-col :span="12"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="12"><div class="grid-content ep-bg-purple-light" /></s-col>
  </s-row>

   <s-row>
    <s-col :span="8"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="8"><div class="grid-content ep-bg-purple-light" /></s-col>
    <s-col :span="8"><div class="grid-content ep-bg-purple" /></s-col>
  </s-row>

  <s-row>
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple-light" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple-light" /></s-col>
  </s-row>
  <s-row>
    <s-col :span="4"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="4"><div class="grid-content ep-bg-purple-light" /></s-col>
    <s-col :span="4"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="4"><div class="grid-content ep-bg-purple-light" /></s-col>
    <s-col :span="4"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="4"><div class="grid-content ep-bg-purple-light" /></s-col>
  </s-row>
</template>
<style lang="scss">
.s-row {
  margin-bottom: 20px;
}
.s-row:last-child {
  margin-bottom: 0;
}
.s-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```
:::

### 分栏间隔
支持列间距。

行提供 gutter 属性来指定列之间的间距，其默认值为0。
:::demo 
  ```vue
<template>
<s-row :gutter="20">
    <s-col :span="16"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="8"><div class="grid-content ep-bg-purple-light" /></s-col>
  </s-row>
  
  <s-row :gutter="20">
    <s-col :span="8"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="8"><div class="grid-content ep-bg-purple-light" /></s-col>
       <s-col :span="4"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="4"><div class="grid-content ep-bg-purple-light" /></s-col>
  </s-row>

  <s-row :gutter="20">
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple-light" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="6"><div class="grid-content ep-bg-purple-light" /></s-col>
  </s-row>
 
</template>
<style lang="scss">
.s-row {
  margin-bottom: 20px;
}
.s-row:last-child {
  margin-bottom: 0;
}
.s-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```
:::




### 列偏移
您可以指定列偏移量。

通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。
:::demo 
  ```vue
  <template>
<s-row :gutter="20">
    <s-col :span="6"><div class="grid-content ep-bg-purple" /></s-col>
    <s-col :span="6" :offset="6"
      ><div class="grid-content ep-bg-purple"
    /></s-col>
  </s-row>

   <s-row :gutter="20">
    <s-col :span="6" :offset="6"
      ><div class="grid-content ep-bg-purple"
    /></s-col>
    <s-col :span="6" :offset="6"
      ><div class="grid-content ep-bg-purple"
    /></s-col>
  </s-row>
  </template>
  <style lang="scss">
.s-row {
  margin-bottom: 20px;
}
.s-row:last-child {
  margin-bottom: 0;
}
.s-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```
:::

## Row 属性

| 属性 | 说明                         | 类型   | 可选值       | 默认值                                                                    |
| --------- | ----------------------------------- | ------ | --------------------- | -------------------------------------------------------------------------- |
| gutter | 栅格间隔 | number |— | 0 |
| justify | flex 布局下的水平排列方式 | string |start/end/center/space-around/space-between/space-evenly |start |
| align | flex 布局下的垂直排列方式 | string |top/middle/bottom | top |
| tag | 自定义元素标签 | string | | div |

## Row 插槽

| 插槽名 | 说明               | 子标签                                    |
| ---- | ------------------------- | ------------------------------------------ |
| —    | 自定义默认内容 |Col |

## C0l 属性

| 属性 | 说明          | 类型   | 可选值 | 默认值 |
| --------- | -------------------- | ------ | --------------- | ------- |
| span    | 栅格占据的列数 | number | —               | 24    |
| offset    | 栅格左侧的间隔格数 | number | —               | 0    |
| push    | 栅格向右移动格数 | number | —               | 0    |
| pull    | 栅格向左移动格数 | number | —               | 0    |
| tag    | 自定义元素标签 | string | *              | div    |
| xs    | <768px 响应式栅格数或者栅格属性对象 | number/object (例如 {span: 4, offset: 4}) | —               |   —    |
| sm    | ≥768px 响应式栅格数或者栅格属性对象 | number/object (例如 {span: 4, offset: 4}) | —               |   —    |
| md    | ≥992px 响应式栅格数或者栅格属性对象 | number/object (例如 {span: 4, offset: 4}) | —               |   —    |
| xl    | ≥1200px 响应式栅格数或者栅格属性对象 | number/object (例如 {span: 4, offset: 4}) | —               |   —    |
| ≥1920px   | ≥1200px 响应式栅格数或者栅格属性对象 | number/object (例如 {span: 4, offset: 4}) | —               |   —    |

## C0l 插槽

| 插槽名 | 说明               |
| ---- | ------------------------- |
| —    | 自定义默认内容 |











