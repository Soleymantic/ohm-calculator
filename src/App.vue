<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-darkgrey">
    <a class="navbar-brand" href="#">Ohm-Calculator</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link active" to="/">Calculator <span class="sr-only">(current)</span></router-link>
        <router-link class="nav-item nav-link active" to="/quiz">Quiz</router-link>
        <router-link class="nav-item nav-link active" to="/files">Files</router-link>
        <router-link class="nav-item nav-link active" to="/editQuiz">Edit Quiz</router-link>
        <router-link class="nav-item nav-link active" to="/editFiles">Edit Files</router-link>
      </div>
    </div>
  </nav>
  <div id="nav">
    <router-link to="/">Ohm Calculator</router-link> |
    <router-link to="/quiz">Quiz</router-link> |
    <router-link to="/files">Files</router-link>
  </div>
  <div class="router-view">
    <router-view/>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.router-view{
  margin: auto;
  width: 50%;
  padding: 10px
;
}

.bg-darkgrey{
  background-color: darkgray;
}
</style>
