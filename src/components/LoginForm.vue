<template>
  <v-container>
     <v-sheet class="bg-deep-purple pa-12" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="submitForm">
        <v-text-field 
        label="Username:" 
        type="text" 
        v-model="username" 
        id="username" 
        class="mb-2"
        :readonly="loading"
        :rules="[required]">
      </v-text-field>
        
   
        <v-text-field  label="Password:" type="password" v-model="password" id="password"  :readonly="loading"
        :rules="[required]" clearable hint="Enter your password to access this website"></v-text-field>
        <br>
        <v-btn :disabled="!form"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block>Login</v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</v-container>

  </template>
  
  <script>
  import { login } from '../api/auth';
  
  export default {
    data() {
      return {
        form: false,
        username: '',
        password: '',
        loading: false,
      };
    },
    methods: {
      async submitForm() {
        if (!this.form) return
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
        try {
          const response = await login({ username: this.username, password: this.password });
          this.$store.commit('setUser', response.data.user);
          this.$store.commit('setToken', response.data.token);
          this.$router.push('/');
        } catch (error) {
          console.error(error);
          
        }
        
      }
    }
  };
  </script>
     
     <style scoped>
     /* Agrega estilos específicos para este componente aquí */
     </style>