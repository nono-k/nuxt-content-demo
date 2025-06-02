<script setup lang="ts">
import { parseDate } from '@/utils/parseDate';

const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('blog')
    .order('date', 'DESC')
    .all()
);
</script>

<template>
  <h1 class="title">Blog</h1>
  <TagLinks />
  <ul v-if="posts" class="card__list">
    <li v-for="post in posts" :key="post.path">
      <NuxtLink :to="post.path" class="card">
        <div class="card__img">
          <img :src="post.image" alt="">
        </div>
        <div class="card__body">
          <div class="card__tag-wrap">
            <span v-for="tag in post.tags" :key="tag" class="card__tag">{{tag}}</span>
          </div>
          <p class="card__title">{{post.title}}</p>
          <span class="card__date">{{parseDate(post.date)}}</span>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.card {
  display: block;
  border: 1px solid #000;
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  &__body {
    padding: 0.5rem;
  }
  &__tag-wrap {
    display: flex;
    gap: 0.5rem;
  }
  &__tag {
    font-size: 0.75rem;
    border: 1px solid #000;
    padding: 0.2rem 0.5rem;
  }
  &__title {
    font-size: 0.875rem;
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
  }
  &__date {
    display: block;
    font-size: 0.75rem;
    text-align: right;
  }
}
</style>