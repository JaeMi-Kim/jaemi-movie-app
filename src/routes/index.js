import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
  // hash
  // https://google.com/#/search
  history: createWebHashHistory(),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  // pages
  // https://google.com/about
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)', // 명칭을 마음대로 작성해도 된다. pathMatch
      component: NotFound
    }
  ]
})