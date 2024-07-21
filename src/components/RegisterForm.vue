<template>
   <v-container>

   
    <v-sheet class="bg-deep-purple pa-12" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form  v-model="form" @submit.prevent="submitForm">
        <v-text-field 
        type="text" 
        v-model="username" 
        :readonly="loading"
          :rules="[required]"
          class="mb-2"
        id="username" 
        label="Username:"
          clearable>
        </v-text-field>
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          label="Email"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          label="Password"
          placeholder="Enter your password"
          clearable
        ></v-text-field>
        <br>
        <v-btn    :disabled="!form"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block>Register</v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</v-container>
  </template>
  
  <script>
  import { register } from '../api/auth';
  
  export default {
    data() {
      return {
        form: false,
        username: '',
        email: '',
        password: '',
        loading: false,
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await register({
            username: this.username,
            email: this.email,
            password: this.password
          });
          if (!this.form) return
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
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