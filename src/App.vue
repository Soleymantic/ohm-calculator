<template>
  <nav class="navbar navbar-expand-lg navbar-light custom-green">
    <a class="navbar-brand" href="#">Ohm-Calculator</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link @click="changeNav('calc')" :class="[ activeCalc ? 'nav-item nav-link active' : 'nav-item nav-link']" to="/">Calculator <span class="sr-only">(current)</span></router-link>
        <router-link @click="changeNav('quiz')" :class="[ activeQuiz ? 'nav-item nav-link active' : 'nav-item nav-link']" to="/quiz">Quiz</router-link>
        <router-link @click="changeNav('files')" :class="[ activeFiles ? 'nav-item nav-link active' : 'nav-item nav-link']" to="/files">Files</router-link>
        </div>
    </div>
  </nav>
  <div class="router-view">
    <router-view/>
  </div>

</template>

<script>
export default {
  name: "App",
  data(){
    return {
      activeCalc: true,
      activeQuiz: false,
      activeFiles: false
    };
  },
  methods:{
    changeNav(nav){
      if(nav == 'calc'){
        this.activeCalc = true;
        this.activeFiles = false;
        this.activeQuiz = false;
      }

      if(nav == 'quiz'){
        this.activeCalc = false;
        this.activeFiles = false;
        this.activeQuiz = true;
      }

      if(nav == 'files'){
        this.activeCalc = false;
        this.activeFiles = true;
        this.activeQuiz = false;
      }
    }
  }
}
</script>

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

.custom-green{
  background-color: lightgreen;
  border-bottom: 2px solid darkgray;
}
</style>
