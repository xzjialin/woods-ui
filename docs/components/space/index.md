# Space 间距

快速为一系列元素提供统一的间距。


## 基础用法

:::demo 
  ```vue
  <template>
   <s-space >
  <SButton type="default"  size="large"  >default</SButton>
  <SButton type="primary"  size="large"  >primary</SButton>
  <SButton type="success" size="large"  >success</SButton>
  <SButton type="info" size="large"  >info</SButton>
  <SButton type="warning" size="large"  >warning</SButton>
  <SButton type="danger"  size="large" >danger</SButton>
  </s-space>
 
  </template>
  ```
:::

## 纵向排列

你可以使用 `direction` 属性来定义排列顺序。

使用 `direction` 属性来控制横纵排列。 该属性两个类型 `vertical` `horizontal` 类型的值。
:::demo 
  ```vue
  <template>
   <s-space direction="vertical">
  <SButton type="default"  size="large"  >default</SButton>
  <SButton type="primary"  size="large"  >primary</SButton>
  <SButton type="success" size="large"  >success</SButton>
  <SButton type="info" size="large"  >info</SButton>
  <SButton type="warning" size="large"  >warning</SButton>
  <SButton type="danger"  size="large" >danger</SButton>
  </s-space>
 
  </template>
  ```
:::


## 不同大小

你可以使用 `size` 属性来定义大小。

使用 `size` 属性来控制大小。 内总了四种大小 `mini`  `small` `medium` `large`  也支持传入数字类型 自行控制大小。
:::demo 
  ```vue
  <template>
  <p>mini:</p>
   <s-space  size="mini"  style="width:150px">
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  </s-space>
 <p>small:</p>
   <s-space  size="small"  style="width:150px">
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  </s-space>
 <p>medium:</p>
   <s-space  size="medium" style="width:150px">
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  </s-space>
<p>large:</p>
   <s-space  size="large"  style="width:150px">
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  </s-space>
 <br />
  </template>
  ```
:::


## 横向布局

你可以使用 `justify` 属性来定义横向布局方式。

使用 `justify` 属性来控制横向布局。 该属性四个类型 `start` `end`  `center` `baseline` 类型的值。
:::demo 
  ```vue
  <template>
  <p>start:</p>
   <s-space justify="start" style="width:100%">
   <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  </s-space>

      <p>center:</p>
   <s-space justify="center" style="width:100%">
   <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  </s-space>

    <p>end:</p>
   <s-space justify="end" style="width:100%">
   <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  </s-space>

    <p>space-around:</p>
   <s-space justify="space-around" style="width:100%">
   <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  </s-space>

   <p>space-between:</p>
   <s-space justify="space-between" style="width:100%">
   <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  </s-space>

     <p>baseline:</p>
   <s-space justify="baseline" style="width:100%">
   <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  </s-space>
 
  </template>
  ```
:::


## 纵向布局

你可以使用 `align` 属性来定义纵向布局方式。

使用 `align` 属性来控制纵向布局。 该属性四个类型 `start` `end`  `center` `baseline` 类型的值。
:::demo 
  ```vue
  <template>
  <p>start:</p>
   <s-space align="start" style="height: 100px;border: 1px solid black;">
   <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  </s-space>

    <p>end:</p>
   <s-space align="end" style="height: 100px;border: 1px solid black;">
   <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  </s-space>

    <p>center:</p>
   <s-space align="center" style="height: 100px;border: 1px solid black;">
   <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  </s-space>
  
    <p>baseline:</p>
   <s-space align="baseline" style="height: 100px;border: 1px solid black;">
   <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default"  size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  <SButton type="default" size="large"  >按钮</SButton>
  </s-space>
  </template>
  ```
:::


