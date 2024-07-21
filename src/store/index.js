import { createStore } from 'vuex';
import axios from 'axios';
import { fetchPosts } from '@/api/blogs';
export default createStore({
  state: {
    user: null,
    token: null,
    posts: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    setPosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    async login({ commit }, credentials) {
      const response = await axios.post('/api/login/', credentials);
      commit('setUser', response.data.user);
      commit('setToken', response.data.token);
    },
    async register({ commit }, userData) {
      const response = await axios.post('/api/register/', userData);
      commit('setUser', response.data.user);
      commit('setToken', response.data.token);
    },
    async loadPosts({ commit }) {
      try {
        const response = await fetchPosts();
        commit('setPosts', response.data);
      } catch (error) {
        console.error('Error loading posts:', error);
      }
    },
  }
});
