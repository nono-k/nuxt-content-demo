<template>
  <Header />
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1000px;
  margin-inline: auto;
  padding-inline: 20px;
  margin-top: 60px;
  margin-block: 80px;
}
</style>