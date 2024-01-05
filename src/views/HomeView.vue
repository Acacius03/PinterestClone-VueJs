<template>
  <main class="flex-1 flex flex-col relative">
    <div class="flex-1 p-10 pt-36 overflow-y-auto">
      <div id="gallery" class="columns-4 gap-x-5">
        <PhotoShowcase
          v-for="photo in photos"
          :id="photo.id"
          :imgUrl="photo.imgUrl"
          :avatarUrl="photo.avatarUrl" />
      </div>
    </div>
    <HomeSearchBar @addNewPhoto="addNewPhoto" />
  </main>
</template>
<style scoped>
.overflow-y-auto::-webkit-scrollbar {
  display: none;
}
.overflow-y-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
#gallery > * {
  width: 100%;
  margin-bottom: 10px;
  break-inside: avoid;
}
</style>

<script setup>
import { ref, defineAsyncComponent, onMounted } from 'vue';
import HomeSearchBar from '../components/HomeSearchBar.vue';
const PhotoShowcase = defineAsyncComponent(() =>
  import('../components/PhotoShowcase.vue')
);

// Global States
const photos = ref([]);

onMounted(() => {
  const savedPhotos = JSON.parse(localStorage.getItem('photos'));
  if (savedPhotos) {
    photos.value = savedPhotos;
  }
});

const addNewPhoto = () => {
  const photo = {
    id: Math.floor(Math.random() * 1000000),
    imgUrl: generateRandomImage(),
    avatarUrl: generateAvatarImage(),
  };
  photos.value.push(photo);
  savePhotosToLocalStorage();
};

const generateRandomImage = () => {
  const randomWidth = Math.floor(Math.random() * 500) + 400;
  const randomHeight = Math.floor(Math.random() * 500) + 300;
  return `https://picsum.photos/${randomWidth}/${randomHeight}`;
};

// Function to generate a new random image URL
const generateAvatarImage = () => {
  const randomId = Math.floor(Math.random() * 10); // Random width between 300 and 800
  return `https://i.pravatar.cc/40?img=${randomId}`;
};

const savePhotosToLocalStorage = () => {
  localStorage.setItem('photos', JSON.stringify(photos.value));
};
</script>
