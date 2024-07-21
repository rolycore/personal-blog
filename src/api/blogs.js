// src/api/blogs.js
import apiClient from './apiClient';
export const fetchPosts = () => apiClient.get('/blog/posts/');
export const createPost = (blogData) => apiClient.post('/blog/posts/', blogData);