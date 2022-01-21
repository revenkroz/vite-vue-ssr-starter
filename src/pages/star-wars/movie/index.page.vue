<template>
  <h1>{{ movie.title }}</h1>
  Release Date: {{ movie.release_date }}
  <br />
  Director: {{ movie.director }}
  <br />
  Producer: {{ movie.producer }}
</template>

<script lang="ts" setup>
const props = defineProps(['movie'])

useHead({
  title: props.movie.title,
})
</script>
<script lang="ts">
export { onBeforeRender } from './onBeforeRender'
</script>
