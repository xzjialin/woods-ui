# Button

这是一个简单的按钮。

## 代码演示


## 基本用法
使用 `type`、`pain`、`round` 和  、`block` 来定义按钮的样式。
:::demo 
  ```vue
  <template>
   <div class="demo-spacing">
  <SButton type="default"  size="large"  >default</SButton>
  <SButton type="primary"  size="large"  >primary</SButton>
  <SButton type="success" size="large"  >success</SButton>
  <SButton type="info" size="large"  >info</SButton>
  <SButton type="warning" size="large"  >warning</SButton>
  <SButton type="danger"  size="large" >danger</SButton>
  </div>
     <div class="demo-spacing">
  <SButton type="default"  size="large" pain>default</SButton>
  <SButton type="primary"  size="large" pain >primary</SButton>
  <SButton type="success" size="large"   pain>success</SButton>
  <SButton type="info" size="large" pain >info</SButton>
  <SButton type="warning" size="large" pain >warning</SButton>
  <SButton type="danger"  size="large" pain >danger</SButton>
  </div>

    <div class="demo-spacing">
  <SButton type="default"  size="large" round >default</SButton>
  <SButton type="primary"  size="large"  round>primary</SButton>
  <SButton type="success" size="large"  round>success</SButton>
  <SButton type="info" size="large" round >info</SButton>
  <SButton type="warning" size="large" round >warning</SButton>
  <SButton type="danger"  size="large"round >danger</SButton>
  </div>
    <div class="demo-spacing">
 <SButton type="default" size="large" block >block</SButton>
  </div>
    <div class="demo-spacing">
 <SButton type="primary" size="large" block >block</SButton>
  </div>
      <div class="demo-spacing">
 <SButton type="success" size="large" block >block</SButton>
  </div>
       <div class="demo-spacing">
 <SButton type="info" size="large" block >block</SButton>
  </div>
      <div class="demo-spacing">
 <SButton type="warning" size="large" block >block</SButton>
  </div>
      <div class="demo-spacing">
 <SButton type="danger" size="large" block >block</SButton>
  </div>


  </div>
  </template>
  ```
:::

## 禁用状态
你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。
:::demo 
  ```vue
  <template>
   <div class="demo-spacing">
  <SButton type="default"  size="large"  disabled>default</SButton>
  <SButton type="primary"  size="large"  disabled>primary</SButton>
  <SButton type="success" size="large"  disabled>success</SButton>
  <SButton type="info" size="large"  disabled>info</SButton>
  <SButton type="warning" size="large"  disabled>warning</SButton>
  <SButton type="danger"  size="large"disabled >danger</SButton>
  </div>
     <div class="demo-spacing">
  <SButton type="default"  size="large" pain disabled >default</SButton>
  <SButton type="primary"  size="large" pain disabled>primary</SButton>
  <SButton type="success" size="large"   pain disabled>success</SButton>
  <SButton type="info" size="large" pain disabled>info</SButton>
  <SButton type="warning" size="large" pain disabled>warning</SButton>
  <SButton type="danger"  size="large" pain disabled>danger</SButton>
  </div>
  </div>
  </template>
  ```
:::

## 尺寸调整
你可以使用 `size` 属性来定义按钮尺寸。

使用 `size` 属性来控制按钮尺寸。 该属性接受 `small`、`default`、`large` 的值。
:::demo 
  ```vue
  <template>
   <div class="demo-spacing">
    <SButton type="primary" size="small">small</SButton>
    <SButton type="primary" size="default">default</SButton>
    <SButton type="primary" size="large">large</SButton>
    // <AlignCenterIcon :size="20"></AlignCenterIcon>
  </div>


  </template>
  ```
:::

## Button 属性

| 属性                           | 说明                                                     | 类型               | 可选值                                              | 默认值 |
| ----------------------------------- | --------------------------------------------------------------- | ------------------ | ------------------------------------------------------------- | ------- |
| size                                | 尺寸         | string             | large / default /small                                        | —       |
| type                                | 类型                                                     | string             | primary / success / warning / danger / info  | —       |
| plain                               | 是否为朴素按钮                           | boolean            | —                                                             | false   |
| text | 是否为文字按钮                            | boolean            | —                                                             | false   |
| bg  | 是否显示文字按钮背景颜色 | boolean            | —                                                             | false   |
| link  | 是否为链接按钮                            | boolean            | —                                                             | false   |
| round                               | 是否为圆角按钮                           | boolean            | —                                                             | false   |
| circle                              | 是否为圆形按钮                          | boolean            | —                                                             | false   |
| loading                             | 是否为加载中状态                                  | boolean            | —                                                             | false   |
| loading-icon                        | 自定义加载中状态图标组件                                | string / Component | —                                                             | Loading |
| disabled                            | 按钮是否为禁用状态                                              | boolean            | —                                                             | false   |
| icon                                | 图标组件                                                  | string / Component | —                                                             | —       |
| autofocus                           | 原生 autofocus 属性                             | boolean            | —                                                             | false   |
| native-type                         | 原生 type 属性                                  | string             | button / submit / reset                                       | button  |
