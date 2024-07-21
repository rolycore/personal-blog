<template>
  <v-container>
    <v-row>
      <v-col v-for="post in posts" :key="post.id" cols="12" md="6">
        <v-card>
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-text>{{ post.content }}</v-card-text>
          <v-card-actions>
            <v-btn text :to="{ name: 'blog-post', params: { id: post.id } }">Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { fetchPosts } from '@/api/blogs';

export default {
  name: 'BlogList',
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    try {
      const response = await fetchPosts();
      this.posts = response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  },
};
</script>

<style scoped>
</style>
