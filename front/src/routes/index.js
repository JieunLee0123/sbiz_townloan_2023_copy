import Vue from 'vue'
import Router from 'vue-router'
import MoviesPage from '@/components/MoviesPage'
import MovieDetailPage from '@/components/MovieDetailPage'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/movies',
      name: 'movies',
      component: MoviesPage
    },
    {
      path: '/movies/:id',
      name: 'detail',
      component: MovieDetailPage
    }
  ]
})