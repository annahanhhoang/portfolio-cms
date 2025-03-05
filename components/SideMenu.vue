<script setup>
import { useDisplay } from 'vuetify';

const props = defineProps({
  showMenu: Boolean,
});
const drawer = ref(props.showMenu);

const { mdAndUp } = useDisplay();

const menu = [
  { title: 'Home', icon: 'mdi-home', to: '/home' },
  {
    title: 'About Me',
    icon: 'mdi-account',
    to: '/home#about-section',
    target: '_self',
  },
  {
    title: 'Experience',
    icon: 'mdi-briefcase',
    to: '/home#experience-section',
    target: '_self',
  },
  {
    title: 'Skills and Educations',
    icon: 'mdi-school',
    to: '/home#skill-section',
    target: '_self',
  },
  {
    title: 'My Projects',
    icon: 'mdi-lightbulb-on',
    to: '/home#projects-section',
    target: '_self',
  },
  {
    title: 'Resume',
    icon: 'mdi-file',
    to: '',
    target: '_blank',
  },
];
</script>

<template>
  <v-navigation-drawer v-model="drawer">
    <v-list>
      <v-list-item class="text-center">
        <v-img
          class="mt-4 mx-auto"
          src="@/assets/images/logo.svg"
          width="192"
          height="192"
        />

        <p class="text-h4">Anna Hoang</p>

        <p class="menu-position">Front-End Developer</p>
      </v-list-item>
    </v-list>

    <v-divider />

    <v-list
      nav
      :lines="false"
    >
      <v-list-item
        v-for="(item, index) in menu"
        :key="item.title"
        :target="item.target"
        :to="item.to"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title>
          {{ item.title }}
          <Resume v-if="index === menu.length - 1" />
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <SocialLinks
        v-if="mdAndUp"
        class="mb-6"
      ></SocialLinks>
    </template>
  </v-navigation-drawer>
</template>
