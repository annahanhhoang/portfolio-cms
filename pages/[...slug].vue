<script setup>
const { slug } = useRoute().params;
let storyName, layout;
if (slug && slug.length > 0) {
  storyName = slug.join('/');
  layout = 'default';
} else {
  storyName = 'home';
  layout = 'custom';
}

definePageMeta({
  layout: false,
});

const story = await useAsyncStoryblok(storyName, { version: 'draft' });
</script>

<template>
  <NuxtLayout :layout="layout">
    <StoryblokComponent
      v-for="blok in story.data.story.content.body"
      :key="blok._uid"
      :blok="blok"
    />
  </NuxtLayout>
</template>
