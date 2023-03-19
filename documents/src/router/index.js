import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { projectAuth } from '@/firebase/config'

const requireAuth = (to,from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name:"home" })
  } else {
    next();
  }
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/LogInForm.vue")
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../components/SignUpForm.vue")
  },
  {
    path: '/room',
    name: 'thoughtfield',
    component: () => import('../components/ThoughtField.vue'),
    beforeEnter: requireAuth
  },
  {
    path: "/allnotes",
    name: "allnotes",
    component: () => import("../components/NoteDetails.vue"),
    beforeEnter: requireAuth
  },
  {
    path: '/:catchAll(.*)',
    name: "notfound",
    component: () => import("../components/NotFoundPage.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
