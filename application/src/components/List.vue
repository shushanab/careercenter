<template>
  <div class="list">
    <router-view class="view list" name="list"></router-view>
    <section class="section" v-for="job in jobs">
      <div class="container">
        <h1 class="title">{{ job.job }}</h1>
        <h2 class="subtitle">
          {{ job.company }}, {{ job.location }}, {{ job.audience }}
        </h2>
        <a><small>read more...</small></a>
      </div>
    <hr>
    </section>

  </div><!-- end .container -->
</div></div></div>
</template>

<script>
import list from '/workspace/shushan/application/static/data.json';

export default {
  data() {
    return {
      jobs: [
        list[0], list[1], list[2], list[3]
      ]
    };
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.list {
  padding-top: 5%;
}
</style>
