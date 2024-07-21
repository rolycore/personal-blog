<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Header />    
      <v-container class="bg-surface-variant mb-6" align-items="center" height="100%">
        <h1 class="text-h4 font-weight-black text-blue">Welcome to My Personal Blog</h1>
        <p class="text-body-2 mb-4">This is the home page.</p>
        <BlogList />
        <PostList />
      </v-container>
      <Footer />
    </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import PostList from '../components/PostList.vue';
  import BlogList from '@/components/BlogList.vue';
  export default {
    components: {
      Header,
      BlogList,
      PostList,
      Footer,
    }
  };
  </script>
  
  <style scoped>
  </style>
  