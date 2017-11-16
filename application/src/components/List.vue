<template>
  <div class="list">
    <h1>{{ msg }}</h1>
    <router-view class="view list" name="list"></router-view>
    <section class="section">

      <div class="container">
        <h1 class="title">[Job Title]</h1>
        <h2 class="subtitle">
          [A simple job <strong>details</strong> here]
        </h2>
      </div>
    </section>

    <hr>
    <section class="section">
      <div class="container">
        <h1 class="title">[Job Title]</h1>
        <h2 class="subtitle">
          [A simple job <strong>details</strong> here]
        </h2>
      </div>
    </section>
    <hr>
    <section class="section">
      <div class="container">
        <h1 class="title">[Job Title]</h1>
        <h2 class="subtitle">
          [A simple job <strong>details</strong> here]
        </h2>
      </div>
    </section>
    <hr>
    <section class="section">
      <div class="container">
        <h1 class="title">[Job Title]</h1>
        <h2 class="subtitle">
          [A simple job <strong>details</strong> here]
        </h2>
      </div>
    </section>

  </div><!-- end .container -->
</div></div></div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      msg: 'Jobs List'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
