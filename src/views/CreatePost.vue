<template>
    <div>
      <Header />
      <v-container class="bg-surface-variant mb-6" align-items="center" height="100%">
        <h1 class="text-h4 font-weight-black text-blue">Create Post</h1>
        <PostForm />
      
      </v-container>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  import PostForm from '../components/PostForm.vue';
 
  
  export default {
    components: {
      Header,
      Footer,
      PostForm,
   
    }
  };
  </script>
  
  <style scoped>
  </style>
  