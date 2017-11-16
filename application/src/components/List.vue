<template>
  <div class="list">
    <router-view class="view list" name="list"></router-view>
    <section class="section" v-for="job in jobs">
      <div class="container">
        <h3 class="title">{{ job.job }}</h3>
        <h4 class="subtitle">
          {{ job.company }}, {{ job.location }}, {{ job.audience }}
        </h4>
        <a><small>read more...</small></a>
      </div>
    <hr>
    </section>
  </div><!-- end .list -->
</template>

<script>
import lists from '/workspace/shushan/application/static/data.json';

export default {
  data() {
    return {
      jobs: [
        lists[0], lists[1], lists[2], lists[3]
      ]
    };
  }
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
