<template>
  <div class="layout bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200">
    <div class="navigation">
      <RLink href="/">Welcome</RLink>
      <RLink href="/star-wars">Data Fetching</RLink>
      <RLink href="/hello/alice">Routing</RLink>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style>
a {
  text-decoration: none;
}
</style>

<style scoped>
.layout {
  display: flex;
  max-width: 900px;
  margin: auto;
}
.content {
  padding: 20px;
  padding-bottom: 50px;
  min-height: 100vh;
}
.navigation {
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  line-height: 1.8em;
  border-right: 2px solid #eee;
}
.content {
  transition: opacity 0.1s ease-in;
}
.content.page-transition {
  opacity: 0;
}
</style>
