# 输入框 - Sinput

## 基础用法

输入框组件的基本用法。
:::demo

  ```vue
  <template>
      <s-input :style="{width:'200px'}" placeholder="请输入内容" allow-clear v-model="text" />
  </template>

  <script>
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    setup() {
      return {
        text: ref('')
      }
    }
  })
  </script>
  ```
:::

## 输入框禁用。
:::demo

  ```vue
  <template>
    <s-space direction="vertical" :size=20>
      <s-input :style="{width:'200px'}" placeholder="请输入内容" allow-clear v-model="text" />

        <s-input :style="{width:'200px'}" disabled placeholder="请输入内容" allow-clear v-model="text" />
        </s-space>
  </template>

  <script>
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    setup() {
      return {
        text: ref('')
      }
    }
  })
  </script>
  ```
:::