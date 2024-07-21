<template>
    <v-container>
      <v-card>
        <v-card-title>{{ post.title }}</v-card-title>
        <v-card-text v-html="post.content"></v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['posts']),
      post() {
        return this.posts.find(post => post.id === parseInt(this.$route.params.id));
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  