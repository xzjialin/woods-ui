

# Container 布局容器


### 常见页面布局
:::demo 
  ```vue
<template>
  <div class="common-layout">
    <s-container>
     <s-header>header</s-header>
     <s-main>main</s-main>
    </s-container>
  </div>
</template>
```
:::


:::demo 
  ```vue
<template>
  <div class="common-layout">
    <s-container>
     <s-header>header</s-header>
     <s-main>main</s-main>
     <s-footer>footer</s-footer>
    </s-container>
  </div>
</template>
```
:::

:::demo 
  ```vue
<template>
  <div class="common-layout">
    <s-container>
      <s-aside width="200px">Aside</s-aside>
     <s-main>main</s-main>
     
    </s-container>
  </div>
</template>
```
:::


:::demo 
  ```vue
<template>
  <div class="common-layout">
      <s-container>
      <s-header>Header</s-header>
      <s-container>
        <s-aside width="200px">Aside</s-aside>
        <s-main>Main</s-main>
      </s-container>
       <s-footer>footer</s-footer>
    </s-container>
  </div>
</template>
```
:::






## Container 属性

| 属性 | 说明                         | 类型   | 可选值       | 默认值                                                                    |
| --------- | ----------------------------------- | ------ | --------------------- | -------------------------------------------------------------------------- |
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 w-header 或 w-footer 时为 vertical，否则为 horizontal |

## Container 插槽

| 插槽名 | 说明               | 子标签                                    |
| ---- | ------------------------- | ------------------------------------------ |
| —    | 自定义默认内容 | Container / Header / Aside / Main / Footer |

## Header 属性

| 属性 | 说明          | 类型   | 可选值 | 默认值 |
| --------- | -------------------- | ------ | --------------- | ------- |
| height    | 顶栏高度 | string | —               | 60px    |

## Header 插槽

| 插槽名 | 说明               |
| ---- | ------------------------- |
| —    | 自定义默认内容 |

## Aside 属性

| 属性 | 说明               | 类型   | 可选值 | 默认值 |
| --------- | ------------------------- | ------ | --------------- | ------- |
| width     | 侧边栏宽度 | string | —               | 300px   |

## Aside 插槽

| 插槽名 | 说明               |
| ---- | ------------------------- |
| —    | 自定义默认内容 |

## Main 插槽

| 插槽名 | 	说明               |
| ---- | ------------------------- |
| —    | 自定义默认内容 |

## Footer 属性

| 属性 | 说明          | 类型   | 可选值 | 默认值 |
| --------- | -------------------- | ------ | --------------- | ------- |
| height    | 底栏高度 | string | —               | 60px    |

## Footer Slots

| 插槽名 | 说明               |
| ---- | ------------------------- |
| —    | 自定义默认内容 |
