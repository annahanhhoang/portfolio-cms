<script setup>
const data = await useGetStory('sociallink');
const socialLinks = data.social_links;
</script>

<template>
  <div class="text-center">
    <a
      v-for="(item, index) in socialLinks"
      :key="`socialLink${index}`"
      :href="item.link.url.includes('@') ? `mailto:${item.link.url}` : item.link.url"
      :class="['text-decoration-none', { 'mr-4': index < socialLinks.length - 1 }]"
    >
      <v-icon
        :icon="item.icon"
        size="x-large"
      />
    </a>
  </div>
</template>
