<template>
  <div class="filter">
    <h1>{{ msg }}</h1>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child notification is-success">
              <div class="content">
                <p class="title">Filter by</p>
                <p class="subtitle">With even more content</p>
                <div class="content">
                  <!-- Content -->
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <router-view class="view filter" name="filter"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Filter',
  data () {
    return {
      msg: 'Filters Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
