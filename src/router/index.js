import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Calculator',
    component: () => import(/* webpackChunkName: "about" */ '../components/OhmCalculator.vue')
  },
  {
    path: '/quiz',
    name: 'Quiz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Quiz.vue')
  },
  {
    path: "/editFiles",
    name: 'EditFiles',
    component: () => import(/* webpackChunkName: "about" */ '../components/UploadFiles.vue')
  },
  {
    path: "/editQuiz",
    name: 'EditQuiz',
    component: () => import(/* webpackChunkName: "about" */ '../components/EditQuiz.vue')
  },
  {
    path: "/files",
    name: 'Files',
    component: () => import(/* webpackChunkName: "about" */ '../components/Files.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
