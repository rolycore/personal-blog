import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Blog from '../views/Blog.vue';
import CreatePost from '../views/CreatePost.vue';
import CreateBlog from '../views/CreatBlog.vue';
import BlogPost from '../components/BlogPost.vue';
import Login from '../views/Login.vue';
import Register from '@/views/Register.vue';
import Post from '@/views/Post.vue';
const routes = [
  { path: '/', component: Home },
  {path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/about', component: About },
  { path: '/blog', component: Blog },
  { path: '/post', component: Post},
  { path: '/create', component: CreatePost },
  { path: '/createblog', component: CreateBlog},
  { path: '/post/:id', name: 'blog-post', component: BlogPost },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
