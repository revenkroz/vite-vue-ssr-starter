<template>
  <ElButton @click="state.count++">Counter {{ state.count }}</ElButton>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus'

import { reactive } from 'vue'
const state = reactive({ count: 0 })
</script>
