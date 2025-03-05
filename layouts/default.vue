<script setup>
import { useDisplay } from 'vuetify';
const { mdAndDown, mdAndUp } = useDisplay();

const drawer = ref(true);
</script>

<template>
  <v-app>
    <v-app-bar
      v-if="mdAndDown"
      position="fixed"
      class="no-print"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <SocialLinks
        class="mr-4"
        :xl="true"
      ></SocialLinks>
    </v-app-bar>

    <SideMenu :showMenu="drawer" />

    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<style lang="scss">
.v-list-item--active > .v-list-item__overlay {
  opacity: 0 !important;
}
</style>
