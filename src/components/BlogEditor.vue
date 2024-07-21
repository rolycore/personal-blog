<template>
    <v-container>
      <v-form @submit.prevent="submitPost">
        <v-text-field v-model="title" label="Title" required></v-text-field>
        <v-textarea v-model="content" label="Content" required></v-textarea>
        <v-btn type="submit" color="blue">Create Blog</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        title: '',
        content: '',
      };
    },
    methods: {
      ...mapActions(['createPost']),
      submitPost() {
        this.createPost({
          title: this.title,
          content: this.content,
        });
        this.$router.push('/blog');
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  