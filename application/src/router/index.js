import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import Job from '@/components/Job'

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
          default: List
      },
      props: List.data().jobs,
    },
    {
      path: '/job/:id',
      name: 'Job',
      components: {
          default: Job
      },
      params: {
        jobID: Job.data().jobID
      }
    }
  ]
})
