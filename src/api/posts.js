// src/api/posts.js
import apiClient from './apiClient';

export const fetchPosts = () => apiClient.get('/posts/posts/');
export const createPost = (postData) => apiClient.post('/posts/posts/', postData);
