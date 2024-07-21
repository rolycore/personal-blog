<template>
  <v-app-bar app>
    <v-img  :width="50" :height="50" alt="SST logo" src="@/assets/LOGO-SHALOM.png"> </v-img>
    <v-toolbar-title class="text-uppercase grey--text">SST Blog</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat color="grey" text to="/">Home</v-btn>
    <v-btn flat color="grey" text to="/about">About</v-btn>
    <v-btn flat color="grey" text to="/blog">Blog</v-btn>
    <v-btn flat color="grey" text to="/post">Post</v-btn>
    <v-btn flat color="grey" text to="/create">Create Post</v-btn>
    <v-btn flat color="grey" text to="/createblog">Create Blog</v-btn>
    <v-btn flat color="blue" text to="/login">Login</v-btn>
    <v-btn flat color="green" text to="/register">Register</v-btn>
  </v-app-bar>
</template>

<script>

export default {
  name: 'AppHeader',
  
};
</script>

<style scoped>
</style>
