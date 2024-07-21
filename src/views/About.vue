<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <Header />
      <v-container class="bg-surface-variant mb-6" align-items="center" height="100%">
        <h1 class="text-h4 font-weight-black text-blue">About Me</h1>
        <p class="text-body-2 mb-4">This is the about page.</p>
      </v-container>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    components: {
      Header,
      Footer
    }
  };
  </script>
  
  <style scoped>
  </style>
  