<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <v-footer
    app
    height="auto"
    class="justify-center align-center no-print"
  >
    <v-card
      class="flex"
      flat
      rounded="0"
    >
      <v-card-actions class="justify-center">
        <p>&copy;{{ currentYear }} - <strong>Anna Hoang</strong></p>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
