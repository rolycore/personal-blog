<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <Header />
      <v-container class="bg-surface-variant mb-6" align-items="center" height="100%">
        <h1 class="text-h4 font-weight-black text-blue">Lista de Post</h1>
        <PostList />
      </v-container>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import PostList from '../components/PostList.vue';
  
  export default {
    components: {
      Header,
      Footer,
      PostList
    }
  };
  </script>
  
  <style scoped>
  </style>
  