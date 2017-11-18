<template>
  <div class="list">
    <router-view class="view list" name="list"></router-view>
    <section class="section" v-for="job in jobs">
      <div class="container">
        <h3 class="title">{{ job.title }}</h3>
        <h4 class="subtitle">
          {{ job.company }}, {{ job.location }}, {{ job.audience }}
        </h4>
        <router-link :to="{ path: 'job/'+job.id, params: { jobID: job.id }}"><small>read more...</small></router-link>
      </div>
    <hr>
    </section>
    <router-view class="view filter" name="filter"></router-view>
  </div><!-- end .list -->
</template>

<script>

import list from '/workspace/shushan/application/static/data.json';
import Filter from '@/components/Filter'

export default {
  data() {
    return {
      jobs: list
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3, h4 {
  font-weight: normal;
}
.list {
  padding-top: 5%;
}
.section {
  padding-top: 0;
}
</style>
