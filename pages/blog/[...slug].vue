<script setup lang="ts">
import { parseDate } from '@/utils/parseDate';

const route = useRoute();
const { data } = await useAsyncData(route.path, () =>
  queryCollection('blog').path(route.path).first()
);

useSeoMeta({
  title: `${data.value?.title} | Nuxt Content Demo`,
  description: data.value?.description,
})
</script>

<template>
  <article v-if="data" class="article">
    <h1 class="title">{{data.title}}</h1>
    <span class="date">{{parseDate(data.date)}}</span>
    <ContentRenderer :value="data" class="content" />
  </article>
  <div v-else>
    <h1>記事が見つかりませんでした</h1>
  </div>
</template>

<style scoped lang="scss">
.title {
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
.date {
  display: block;
  text-align: right;
  font-size: 0.8rem;
}
.content {
  margin-top: 2rem;
  > * + * {
    margin-top: 1rem;
  }
  h2 {
    font-weight: 500;
  }
}
</style>