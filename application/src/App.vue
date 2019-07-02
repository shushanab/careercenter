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

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Career Center </strong>
            <small> created by
              <a target="_blank" href="https://tumo.org/">&copy; TUMO | CENTER FOR
                <span style="color:#b30047"> CREATIVE</span>TECHNOLOGIES
              </a>.
            </small>
          </p>

          <p> The source code is licensed
            <small>
              <a target="_blank" href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            </small>
            <div class="column has-text-center">
              <a class="icon" href="https://www.linkedin.com/"><i class="fa fa-linkedin"></i></a>
              <a class="icon" href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
              <a class="icon" href="https://twitter.com/"><i class="fa fa-twitter"></i></a>
              <a class="icon" href="https://plus.google.com/"><i class="fa fa-google-plus"></i></a>
            </div>
          </p>
        </div> <!-- end .content -->
      </div> <!-- end .container -->
    </footer>
  </div>
</template>

<script>

import list from '@/assets/static/data.json';
export default {
  name: 'app',
  props: {
    l: {
      type: Array,
      default: this.jobs
    }
  },
  data: function (){
    return {
      jobs: list,
      isActive: false
    }
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
      return this.isActive;
    }
  }
}

</script>

<style>
.navbar-brand a {
  font-weight: bold;
}

</style>
