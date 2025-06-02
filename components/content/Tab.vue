<script setup lang="ts">
const props = defineProps({
  tabs: {
    type: Array,
    required: true
  }
})

const activeTab = ref(0)
</script>

<template>
  <div class="tabs-container">
    <div class="tab-buttons">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="['tab-button', { active: activeTab === index }]"
      >
        {{ tab.title }}
      </button>
    </div>
    <div class="tab-content">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        v-show="activeTab === index"
        class="tab-panel"
      >
        {{ tab.content }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.tabs-container {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem 0;
}

.tab-buttons {
  display: flex;
  background-color: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.tab-button {
  padding: 0.75rem 1rem;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
  color: #64748b;
}

.tab-button:hover {
  background-color: #e2e8f0;
}

.tab-button.active {
  background-color: white;
  color: #1e293b;
  border-bottom: 2px solid #3b82f6;
}

.tab-content {
  background-color: white;
}

.tab-panel {
  padding: 1.5rem;
}
</style>