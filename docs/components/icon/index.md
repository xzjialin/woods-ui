

# Icon

这是一个简单的Icon。

## 代码演示

### 基本用法
:::demo 
  ```vue
  <template>
   <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
        <s-icon :size="20">
      <EditIcon />
    </s-icon>
       <s-icon :size="20" >
      <ShareAltIcon />
    </s-icon>
     <s-icon :size="20">
      <DeleteIcon />
    </s-icon>
          <s-icon :size="20">
      <LoadingIcon />
    </s-icon>
     
     
    
  </div>
  </template>
  ```
:::

```ts
import { AlignCenterIcon,EditIcon,ShareAltIcon,DeleteIcon,LoadingIcon} from '@/icon/icons/index';
```


### 直接使用 SVG 图标

:::demo 
  ```vue
<template>
  <div style="font-size: 20px">
    <!-- 由于SVG图标默认不携带任何属性 -->
    <!-- 你需要直接提供它们 -->
    <EditIcon style="width: 1em; height: 1em; margin-right: 8px" />
    <ShareAltIcon style="width: 1em; height: 1em; margin-right: 8px" />
    <DeleteIcon style="width: 1em; height: 1em; margin-right: 8px" />
    <LoadingIcon style="width: 1em; height: 1em; margin-right: 8px" />
  </div>
</template>
  ```
:::


## Icon 属性

| 属性 | 说明                | 类型                           | 可选值 | 默认值                |
| --------- | -------------------------- | ------------------------------ | ---------------- | ---------------------- |
| color     | svg 的 fill 颜色   | Pick\<CSSProperties, 'color'\> | -                | inherit     |
| size      | SVG 图标的大小，size x size	 | number | string               | -                | inherit from font size |

## Icon 插槽

| Name | 说明               |
| ---- | ------------------------- |
| —    | 自定义默认内容 |