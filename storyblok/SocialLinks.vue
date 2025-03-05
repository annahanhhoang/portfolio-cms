<template>
  <div class="text-center">
    <a
      v-for="(item, index) in socialLinks"
      :key="`socialLink${index}`"
      :href="item.link"
      :class="['text-decoration-none', { 'mr-4': index < socialLinks.length - 1 }]"
    >
      <i
        :class="['pi', item.icon]"
        style="font-size: 1.5rem"
      />
    </a>
  </div>
</template>

<script setup>
const data = await useGetStory('sociallink');
let linkedin, github, email;
data.social_links.forEach((item) => {
  const { url } = item.link;
  if (url.includes('linkedin')) {
    linkedin = url;
  } else if (url.includes('github')) {
    github = url;
  } else {
    email = url;
  }
});

const socialLinks = [
  {
    icon: 'mdi-linkedin',
    link: linkedin,
  },
  {
    icon: 'mdi-github',
    link: github,
  },
  {
    icon: 'mdi-email',
    link: `mailto:${email}`,
  },
];
</script>
