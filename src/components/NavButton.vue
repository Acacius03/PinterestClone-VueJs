<style scoped>
a {
  @apply flex gap-2 items-center pl-20 h-16 rounded-e-xl overflow-hidden transition-all duration-300 text-gray-700 relative;
}
a > * {
  @apply z-10;
}
.router-link-active {
  @apply bg-red-700 drop-shadow-md border text-3xl font-bold;
}
.router-link-active > * {
  @apply text-white;
}
a:not(.router-link-active):hover {
  @apply pl-[100px];
}
a:not(.router-link-active)::before {
  content: '';
  @apply w-0 bg-gray-200 h-full absolute left-0 z-0 transition-all duration-500;
}
a:not(.router-link-active):hover::before {
  @apply w-full;
}
i {
  @apply text-2xl w-10 text-center text-gray-400;
}
a span {
  @apply text-2xl;
}
</style>

<template>
  <RouterLink :to="href">
    <i :class="faIcon"></i>
    <span>{{ text }}</span>
  </RouterLink>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  faIcon: {
    type: String,
  },
  text: {
    type: String,
  },
  href: {
    type: String,
    default: '#',
  },
});
</script>
