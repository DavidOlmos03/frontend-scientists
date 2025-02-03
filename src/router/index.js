import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

// Errors pages 
import NotFound from '../views/errors/NotFound.vue';
import Loading from '../views/errors/Loading.vue';
import Error from '../views/errors/InternalError.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/errors/NotFound.vue'),
  },
  {
    path: '/500',
    name: 'Error',
    component: () => import('../views/errors/InternalError.vue'),
  },
  {
    path: '/loading',
    name: 'Loading',
    component: () => import('../views/errors/Loading.vue')
  },
  {
    path: '/library',
    name: 'Library',
    component: () => import('../views/library/Library.vue'),
  },
  {
    path: '/library/mathematics',
    name: 'Mathematics',
    component: () => import('../views/library/Mathematics.vue'),
  },
  {
    path: '/library/physics',
    name: 'Physics',
    component: () => import('../views/library/Physics.vue'),
  },
  {
    path: '/library/engineering',
    name: 'Engineering',
    component: () => import('../views/library/Engineering.vue'),
  },
  {
    path: '/library/others',
    name: 'Others',
    component: () => import('../views/library/Others.vue'),
  },
  {
    path: '/library/scientist/:id',
    name: 'Scientist',
    component: () => import('../views/library/Scientist.vue'),
  }

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // routes defined
});

export default router;
