<template>
  <ElButton @click="onClick">Counter {{ store.counter }}</ElButton>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus'
import { useCounterStore } from '~/stores/counter'

const store = useCounterStore()
function onClick() {
  store.counter++
}
</script>
