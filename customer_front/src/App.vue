<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/create" class="nav-link">Create Customer</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users" class="nav-link">Customers</router-link>
          </li>
        </ul>
      </nav>
      <br />
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>


<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

</style>
