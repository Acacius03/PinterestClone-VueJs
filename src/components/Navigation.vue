<template>
  <nav class="basis-[20%] bg-white pt-10 pr-10">
    <Branding />
    <div class="mt-6 flex flex-col gap-2">
      <NavButton :faIcon="'fa-solid fa-home'" :text="'Home'" :href="'/'" />
      <NavButton
        :faIcon="'fa-solid fa-clock'"
        :text="'Recent'"
        :href="'/recent'" />
      <NavButton
        :faIcon="'fa-solid fa-users'"
        :text="'Following'"
        :href="'/following'" />
      <h2 class="pl-[84px] mt-6 text-gray-400 text-xl">Insights</h2>
      <NavButton
        :faIcon="'fa-solid fa-comment-dots'"
        :text="'Messages'"
        :href="'/messages'" />
      <NavButton
        :faIcon="'fa-solid fa-bell'"
        :text="'Notification'"
        :href="'/notification'" />
    </div>
  </nav>
</template>
<script setup>
import Branding from '../components/Branding.vue';
import NavButton from '../components/NavButton.vue';
</script>
