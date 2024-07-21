<template>
    <div>
      <Header />
      <v-container class="bg-surface-variant mb-6" align-items="center" height="100%">
        <h1 class="text-h4 font-weight-black text-blue">Create Blog</h1>
        <BlogEditor />
      
      </v-container>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import BlogEditor from '../components/BlogEditor.vue';
 
  
  export default {
    components: {
      Header,
      Footer,
      BlogEditor,
   
    }
  };
  </script>
  
  <style scoped>
  </style>
  