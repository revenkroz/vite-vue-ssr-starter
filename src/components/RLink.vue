<template>
  <a :href="href || to">
    <slot />
  </a>
</template>

<script lang="ts" setup>
defineProps({
  to: {
    type: String,
  },
  href: {
    type: String,
    default: null,
  }
});

import { usePageContext } from '~/renderer/usePageContext'
const pageContext = usePageContext()
</script>
