<template>
  <div id="app">
    <nav class="navbar is-primary is-fixed-top">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item r-item">Career Center</router-link>
      </div>

      <div class="navbar-burger burger">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <router-link to="/" class="navbar-item r-item">Home</router-link>
          <router-link to="/list" class="navbar-item r-item">Jobs list</router-link>
          <router-link to="/job" class="navbar-item r-item">Job</router-link>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.navbar-brand a {
  font-weight: bold;
}

</style>
