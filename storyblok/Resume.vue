<template>
  <span class="resume">
    <a
      class="mr-1 text-decoration-none"
      v-for="item in resumes"
      :key="item.id"
      :href="item.link"
      target="_blank"
    >
      <v-icon>{{ item.icon }}</v-icon>
    </a>
  </span>
</template>

<script setup>
const data = await useGetStory('resume');

const resumes = [
  {
    id: 'Word',
    icon: 'mdi-file-word-box',
    link: data.resume[0].link.url,
  },
  {
    id: 'PDF',
    icon: 'mdi-file-pdf-box',
    link: data.resume[1].link.url,
  },
];
</script>
