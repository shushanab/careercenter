<template>
  <div class="job">
    <h1>{{ msg }}</h1>
    <router-view class="view job"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Job',
  data () {
    return {
      msg: 'Welcome to Job Detailed Page',
      jobID: window.location.href.split('job/')[1]
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
