<template>
  <div class="home">
    <router-view class="view home"></router-view>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ msg }}</h1>
          <h2 class="subtitle">
             It's time to raise up
          </h2>
				  <div class="field is-grouped">
					  <p class="control is-expanded">
						  <input class="input" type="text" placeholder="Find your next job apportunity">
					  </p>
					  <p class="control">
              <!-- TODO handle a click, and redirect to list page -->
						  <a class="button is-primary">
							  Search
						  </a>
					  </p>
          </div>

        </div>
      </div>
    </section>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">

        <div class="tile">

          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">Last added jobs</p>
              <ul>
                <li>
                  <a> Lorem ipsum...</a>
                  <span class="tag is-success"> New! </span>
                </li>
                <li>
                  <a> Front-end developer</a>
                  <span class="tag is-success"> New! </span>
                </li>
                <li>
                  <a> Dolar ament </a>
                  <span class="tag is-success"> New! </span>
                </li>
                <li>
                  <a> Web designer</a>
                  <span class="tag is-success"> New! </span>
                </li>
                <li>
                  <a> Front-end developer</a>
                  <span class="tag is-success"> New! </span>
                </li>
                <li>
                  <a> Dolar ament </a>
                  <span class="tag is-success"> New! </span>
                </li>
                <li>
                  <a> Web designer</a>
                  <span class="tag is-success"> New! </span>
                </li>
                <li>
                  <a> Front-end developer</a>
                  <span class="tag is-success"> New! </span>
                </li>
                <li> 
                  <a> Web designer</a>
                  <span class="tag is-success"> New! </span>
                </li>
              </ul>
            </article>
          </div>

          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Sign In or Sign Up</p>
              <p class="subtitle"> to post a job</p>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="email" placeholder="Email">
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fa fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input class="input" type="password" placeholder="Password">
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <button class="button is-success">
                    Login
                  </button>
                </p>
              </div>
            </article>
          </div>

          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-danger">
              <p class="title">ADV here...</p>
              <p class="subtitle">This is a  details</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">...one else</p>
              <p class="subtitle">More details</p>
            </article>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Career Center'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.is-ancestor {
    margin: 0 auto;
}

.container{
    text-align: center;
    padding-top: 3%;
    margin: 0 auto;
}

.container h1 {
    font-weight: 700;
    font-size: 4em;
    text-shadow: 0px 3px 2px white,
                 0px 3px 2px #00d1b2, 
                 0px 3px 2px grey; 
}
</style>
