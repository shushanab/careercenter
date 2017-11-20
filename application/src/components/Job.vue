<template>
  <div class="job">
    <router-view class="view job"></router-view>
    <section class="section" v-for="job in list" :key="job.id" v-if="job.id == jobID">
      <div>title: {{ job.title }} </div>
      <p>company: {{ job.company }} </p>
      <p>location: {{ job.location }} </p>
      <p>term: {{ job.term }} </p>
      <p>duration: {{ job.duration }} </p>
      <p>job_responsibilities: {{ job.job_responsibilities }} </p>
      <p>required_qualifications: {{ job.required_qualifications }} </p>
      <p>application_procedures: {{ job.application_procedures }} </p>
      <p>opening_date: {{ job.opening_date }} </p>
      <p>application_deadline: {{ job.application_deadline }} </p>
      <p>about_company: {{ job.about_company }} </p>
    </section>
  </div>
</template>

<script>
import list from '/workspace/shushan/application/static/data.json';

export default {
  name: 'Job',
  data () {
    return {
      msg: 'Welcome to Job Detailed Page',
      jobID: window.location.href.split('job/')[1],
      list: list
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  padding-top: 5%;
}
a {
  color: #42b983;
}
</style>
