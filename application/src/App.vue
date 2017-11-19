<template>
  <div id="app">
    <nav class="navbar is-primary is-fixed-top">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item r-item">
          <span class="icon">
            <i class="fa fa-briefcase"></i>
          </span>Career Center
        </router-link>
      </div>

      <div class="navbar-burger burger" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="navbar-menu" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
        <div class="navbar-end">
          <router-link to="/" class="navbar-item r-item">
            <span class="icon">
              <i class="fa fa-home"></i>
            </span> Home
          </router-link>
          <router-link to="/list" class="navbar-item r-item">
            <span class="icon">
              <i class="fa fa-list"></i>
            </span> Jobs list
          </router-link>
          <router-link to="/resources" class="navbar-item r-item">
            <span class="icon">
              <i class="fa fa-wrench"></i>
            </span> Resources
          </router-link>
          <router-link to="/about" class="navbar-item r-item">
            <span class="icon">
              <i class="fa fa-users"></i>
            </span> About Us
          </router-link>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>

import list from '/workspace/shushan/application/static/data.json';
export default {
  name: 'app',
  data: function (){
    return {
      jobs: list,
      isActive: false
    }
  },
  methods: {
    toggleNav: function() {
      this.isActive =  !this.isActive
    }
  }
}

</script>

<style>
.navbar-brand a {
  font-weight: bold;
}

</style>
