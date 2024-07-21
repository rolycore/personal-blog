<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <v-container>
      <v-container>
          <h1>Login</h1>
        </v-container>
      <LoginForm />
    </v-container>
  </template>
  
  <script>
  import LoginForm from '../components/LoginForm.vue';
  
  export default {
    components: {
      LoginForm
    }
  };
  </script>
    <style scoped>
    h1{
      text-align: center;
    }
  </style>