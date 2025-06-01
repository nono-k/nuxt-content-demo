<template>
  <h1 class="title">Nuxt Content Demo</h1>
  <p class="lead">このページはNuxt Contentのデモページです。<br>ブログ一覧は<NuxtLink to="/blog">こちら</NuxtLink>になります。</p>
</template>

<style scoped lang="scss">
.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
.lead {
  text-align: center;
  a {
    color: blue;
    text-decoration: underline;
  }
}
</style>