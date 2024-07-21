<template>
    <div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  };
  </script>
   
   <style scoped>
   /* Agrega estilos específicos para este componente aquí */
   </style>