<template>
  <div class="flex left-8 top-12 right-8 absolute z-[100] items-center gap-3">
    <form class="flex border bg-white flex-grow p-4 gap-4 rounded-xl shadow-lg">
      <label for="searchbar" class="px-2">
        <i class="fa-solid fa-magnifying-glass"></i>
      </label>
      <input
        id="searchbar"
        class="flex-grow outline-none bg-transparent"
        type="text"
        placeholder="Search" />
    </form>
    <button class="border min-w-14 bg-white rounded-xl shadow-lg h-14">
      <i class="fa-solid fa-bars-progress fa-rotate-90"></i>
    </button>
    <button
      class="min-w-14 h-14 rounded-xl shadow-lg bg-black text-white"
      @click="emit('addNewPhoto')">
      <i class="fa-solid fa-plus"></i>
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['addNewPhoto']);
</script>
