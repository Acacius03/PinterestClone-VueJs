<template>
  <button
    @click="is_liked = !is_liked"
    class="leading-none bg-black/50 text-xl shadow-md rounded-full p-3 active:scale-[0.9] transition-transform">
    <i
      :class="is_liked ? 'liked fa-solid' : 'unliked fa-regular'"
      class="fa-heart"></i>
  </button>
</template>
<style scoped>
button {
  --red: rgb(223, 38, 38);
  --gray: rgb(255, 255, 255);
}
i.liked {
  color: var(--red);
  animation: heart 1250ms linear, pop 500ms 1250ms linear;
}
i.unliked {
  color: var(--gray);
  animation: unlike 1000ms linear;
}
@keyframes unlike {
  0% {
    color: var(--red);
  }
  25% {
    scale: 1.5 1.5;
  }
  50% {
    scale: 0 0;
  }
  75% {
    scale: 1.5 1.5;
    color: var(--gray);
  }
  100% {
    scale: 1 1;
  }
}
@keyframes pop {
  0% {
    scale: 0 0;
  }
  50% {
    scale: 1.5 1.5;
  }
  100% {
    scale: 1 1;
  }
}
@keyframes heart {
  0% {
    color: var(--gray);
    transform: translateX(0);
    opacity: 1;
    scale: 1 1;
  }
  30% {
    transform: translateX(-20px) translateY(-30px) rotate(15deg);
    scale: 1.4 1.4;
  }
  45% {
    transform: translateX(0) translateY(-60px) rotate(5deg);
    scale: 1.2 1.2;
  }
  60% {
    transform: translateX(15px) translateY(-90px) rotate(-15deg);
    scale: 1 1;
  }
  90% {
    transform: translateX(-10px) translateY(-150px) rotate(10deg);
    opacity: 0;
    scale: 0.7 0.7;
  }
  100% {
    opacity: 0;
    scale: 0 0;
    color: var(--red);
  }
}
</style>
<script setup>
import { ref } from 'vue';
const is_liked = ref(false);
</script>
