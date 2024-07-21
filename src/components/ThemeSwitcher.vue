<template>
    <v-app>
      <v-container>
        <v-btn @click="toggleTheme">{{ currentTheme }} Theme</v-btn>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentTheme: 'dark',
      };
    },
    methods: {
      toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      },
    },
  };
  </script>
  