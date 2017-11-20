<template>
  <div class="job">
    <router-view class="view job"></router-view>
    <section class="section" v-for="job in list" :key="job.id" v-if="job.id == jobID">
      <div class="container">
        <section class="hero is-warning">
          <div class="hero-body">
          <div class="container">
            <h1 class="title"> {{ job.title }} </h1>
            <h2 class="subtitle"><strong> {{ job.company }} </strong> /  {{ job.location }} / {{ job.duration }} </h2>
          </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <p><strong>Responsibilities:</strong> {{ job.job_responsibilities }} </p>
        <p><strong>Required Qualifications</strong>: {{ job.required_qualifications }} </p>
        <p><strong>Opening Date:</strong> {{ job.opening_date }} </p>
        <p><strong>Application Deadline:</strong> {{ job.application_deadline }} </p>
        <p><strong>Application Procedures:</strong> {{ job.application_procedures }} </p>
        <p><strong>About_company:</strong> {{ job.about_company }} </p>
      </div>
    </section>
  </div>

<br>
    </section>
  </div>
</template>

<script>
import list from '@/assets/static/data.json';

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
.hero {
  width: 95%;
  height: 250px;
  margin: 0 auto;
}

.hero-body {
  padding: 0;
}

.container {
  width: 90%;
  margin: 15px auto;
}

.container p {
  padding: 5px;
}

.is-warning {
  background-color: #fade86;
}

h1, h2 {
  font-weight: normal;
  padding-top: 5%;
}
a {
  color: #42b983;
}
</style>
