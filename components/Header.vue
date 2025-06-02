<script setup lang="ts">
import { navLinks } from '@/data/navLinks';
</script>

<template>
  <header class="header">
    <nav>
      <ul class="header__list">
        <li v-for="link in navLinks" :key="link.name">
          <NuxtLink :to="link.link">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 20px;
  background: #000;
  display: flex;
  justify-content: flex-end;
  color: #fff;
  &__list {
    display: flex;
    gap: 20px;
  }
}
</style>