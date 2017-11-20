<template>
  <div class="list">

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child notification is-filter">
              <div class="content">
                <div class="content">

                  <div class="field is-horizontal">
                    <div class="field-body">
                      <div class="field">
                        <p class="control is-expanded has-icons-left">
                          <input class="input is-success" v-model="search" type="search" placeholder="Filter Jobs by Audience/Profession or Company Name">
                          <span class="icon is-small is-left">
                            <i class="fa fa-briefcase"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

    <router-view class="view list" name="list"></router-view>
    <section class="section" v-for="job in filterJobs">
      <div class="container">
        <h3 class="title">{{ job.title }}</h3>
        <h4 class="subtitle">
          {{ job.company }} / {{ job.audience }} {{ job.location }} / {{ job.duration }}
        </h4>
        <router-link :to="{ path: 'job/'+job.id, params: { jobID: job.id }}">
          <small>read more...</small>
        </router-link>
      </div>
    <hr>
    </section>
  </div><!-- end .list -->
</template>

<script>

import list from '/workspace/shushan/application/static/data.json';

export default {
  data() {
    return {
      jobs: [].concat(list).reverse(),
      search: ""
    }
  },
  computed: {
    filterJobs: function() {
      return this.jobs.filter((job) => {
        return job.title.toLowerCase().match(this.search)
            || job.company.toLowerCase().match(this.search) 
 
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3, h4 {
  font-weight: normal;
}

h3 {
  font-size: 25px;
}

h4 {
  font-size: 18px;
}

.list {
  padding-top: 5%;
}

.section {
  padding-top: 0;
  height: 135px;
}

.is-ancestor {
  margin: auto 0;
}

.is-filter {
  background-color: #9dfbd7;
  color: white;
}
</style>
