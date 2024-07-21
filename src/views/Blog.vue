<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <Header />
      <v-container class="bg-surface-variant mb-6" align-items="center" height="100%">
       <h1 class="text-h4 font-weight-black text-blue">Lista de Blog</h1>
        <BlogList />
      </v-container>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import BlogList from '../components/BlogList.vue';
  
  export default {
    components: {
      Header,
      Footer,
      BlogList
    }
  };
  </script>
  
  <style scoped>
  </style>
  