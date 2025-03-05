<script setup>
const data = await useGetStory('resume');
const resumes = data.resume;
</script>

<template>
  <span class="resume">
    <a
      class="mr-1 text-decoration-none"
      v-for="item in resumes"
      :key="item.id"
      :href="item.link.url"
      target="_blank"
    >
      <v-icon
        :icon="item.icon"
        size="x-large"
      />
    </a>
  </span>
</template>
