<script setup lang="ts">
const { data } = await useAsyncData('tags', () =>
  queryCollection('blog').where('tags', 'IS NOT NULL').all()
);
const tags = computed(() => {
  const arr = data.value
    ?.map(post => post.tags)
    .flat()
    .filter(tag => !!tag)
  return new Set(arr)
});
</script>

<template>
  <ul>
    <li><NuxtLink to="/blog" class="tag">All</NuxtLink></li>
    <li v-for="tag in tags" :key="tag">
      <NuxtLink :to="`/blog/tag/${tag}`" class="tag">{{tag}}</NuxtLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}
.tag {
  border: 1px solid #000;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
}
</style>
