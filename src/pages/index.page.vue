<template>
  <h1>Welcome to <code>vite-vue-ssr-starter</code></h1>
  This page is:
  <ul class="list-square list-inside">
    <li>Rendered to HTML.</li>
    <li>Interactive (and even 'title' tag). <Counter /></li>
  </ul>
  <p>
    We use <code>useClientRouter()</code> to do Client Routing.
  </p>
  <div class="block my-4">
    <ElSwitch
        v-model="isDark"
        class="mb-2"
        active-text="Dark mode"
        inactive-text="Light mode"
    >
    </ElSwitch>
  </div>
  <div class="block my-4">
    <ElButton @click="randomNavigation">Random Page</ElButton>
  </div>
</template>

<script lang="ts" setup>
import  { navigate } from 'vite-plugin-ssr/client/router'
import { useDark } from '@vueuse/core'
import { ElButton, ElSwitch } from 'element-plus'
import {useCounterStore} from "~/stores/counter";

const randomNavigation = () => {
  const randomIndex = Math.floor(Math.random() * 2)
  navigate(['/star-wars', '/hello/alice'][randomIndex])
}

const isDark = useDark()

const store = useCounterStore()
useHead({
  title: computed(() => `Counter: ${store.counter}`),
})
</script>

<style>
.el-switch__label span {
  @apply text-gray-900 dark:text-gray-200;
}
.el-switch__label.is-active span {
  @apply text-sky-700 dark:text-sky-300;
}
</style>
