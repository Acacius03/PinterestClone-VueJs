<template>
  <div :key="id" class="max-w-sm mb-2 rounded-xl hover:cursor-pointer">
    <figure class="relative group">
      <img
        class="w-full min-h-20 group-hover:scale-[1.05] border-4 border-white shadow-2xl transition-all duration-500 rounded-2xl"
        :src="imgUrl"
        alt="Photo" />
      <div class="absolute w-full bottom-0 z-[100]">
        <div class="flex justify-end p-4 gap-1">
          <HeartBtn />
        </div>
      </div>
    </figure>
    <div class="flex p-3 items-center gap-3 relative transition-all">
      <figure class="rounded-full overflow-hidden border-1">
        <img class="w-full h-full object-cover" :src="avatarUrl" />
      </figure>
      <div class="leading-none">
        <h3 class="font-bold">Random User</h3>
        <small>250 followers</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeartBtn from './HeartBtn.vue';
import { defineProps } from 'vue';

const props = defineProps({
  id: {
    type: Number,
    default: Math.floor(Math.random() * 99999),
  },
  imgUrl: {
    type: String,
  },
  avatarUrl: {
    type: String,
  },
});
</script>
