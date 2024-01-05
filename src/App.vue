<template>
  <div class="w-screen h-screen flex overflow-hidden bg-gray-200">
    <Navigation />
    <component is="activeComponent" />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script setup>
import { RouterView } from 'vue-router';
import Navigation from './components/Navigation.vue';
</script>
