<template>
  <p></p>
  <div class="selection">
    <button @click="toFiles" class="btn btn-primary">Upload Files</button>
    <button @click="toQuiz" class="btn btn-primary">Edit Quiz</button>
  </div>
</template>

<script>
import router from '../router/index';
export default {
  name: "Admin",
  data(){

  },
  mounted(){

  },
  methods: {
    toFiles(){
      router.push('EditFiles');
    },
    toQuiz(){
      router.push('EditQuiz');
    }
  }
}
</script>

<style scoped>
.selection{
  display: flex;
  justify-content: space-around;
}
</style>
