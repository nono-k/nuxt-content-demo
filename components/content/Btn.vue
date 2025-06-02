<script setup lang="ts">
const props = defineProps<{
  color?: string,
  link: string,
}>();
</script>

<template>
  <div>
    <a :href="link" class="btn" :class="color">
      <slot mdc-unwrap="p" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid currentColor;
  background: #000;
  color: #fff;
  cursor: pointer;
  &.blue {
    background-color: #0000ff;
    color: #fff;
  }
}
</style>
