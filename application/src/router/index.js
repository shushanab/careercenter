import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import Job from '@/components/Job'
import Filter from '@/components/Filter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      components: {
          default: List,
          Filter
      },
      props: List.data().jobs,
      methods: {
          filter () {
          }
      }
    },
    {
      path: '/job:id',
      name: 'Job',
      component: Job,
      params: {
        jobID: Job.data().jobID
      }
    }
  ]
})
