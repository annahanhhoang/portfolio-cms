<script setup>
import { useDisplay } from 'vuetify';
const { mdAndUp, lgAndUp, smAndDown } = useDisplay();

const data = await useGetStory('experience');
const experiences = data.experience_tree;
</script>

<template>
  <div class="experience-page">
    <h2 class="text-primary mb-4">Where I have been</h2>
    <v-timeline
      :class="['mx-auto', { 'w-75': lgAndUp }]"
      :density="smAndDown ? 'compact' : 'default'"
    >
      <v-timeline-item
        v-for="(item, index) in experiences"
        :key="`experience${index}`"
        dot-color="primary"
      >
        <template
          v-if="mdAndUp"
          v-slot:opposite
        >
          <span class="timeline-duration">{{ item.duration }}</span>
        </template>

        <v-card class="elevation-2">
          <v-card-title class="pb-0">{{ item.position }}</v-card-title>
          <v-card-subtitle>
            <p>{{ item.company }}</p>
          </v-card-subtitle>

          <v-card-text>
            <p>{{ item.responsibility }}</p>
            <v-chip
              v-for="(skill, i) in item.tech"
              :key="`skill${i}`"
              class="mr-2 mt-2"
            >
              {{ skill.tech_item }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
