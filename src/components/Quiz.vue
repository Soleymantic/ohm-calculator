<template>
  <div v-if="this.quizSize > 0 && (this.currentQuestion < this.quizSize)" class="quiz-table">
    <div class="card">
      <div v-if="quiz.length > 0" class="card-body">
        {{ quiz[currentQuestion].question.question }}
      </div>
    </div>
    <div class="mt-3"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="card">
            <div v-if="quiz.length > 0" @click="selectAnswer1" :class="[ this.selected.includes(0) ? 'lg-card card-body' : 'card-body']">
              {{ quiz[currentQuestion].answers[0].answer }}
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card">
            <div v-if="quiz.length > 0" @click="selectAnswer2" :class="[ this.selected.includes(1) ? 'lg-card card-body' : 'card-body']">
              {{ quiz[currentQuestion].answers[1].answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="card">
            <div v-if="quiz.length > 0" @click="selectAnswer3" :class="[ this.selected.includes(2) ? 'lg-card card-body' : 'card-body']">
              {{ quiz[currentQuestion].answers[2].answer }}
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card">
            <div v-if="quiz.length > 0" @click="selectAnswer4" :class="[ this.selected.includes(3) ? 'lg-card card-body' : 'card-body']">
              {{ quiz[currentQuestion].answers[3].answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3"></div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
        </div>
        <div class="col-sm">
          <button @click="nextQuestion" type="button" class="btn btn-success btn-lg btn-block">N&auml;chste Frage</button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="this.currentQuestion == this.quizSize" class="card">
      <div v-if="quiz.length > 0" class="card-body">
        Sie haben {{ correctAnswers }} von {{ quizSize }} Fragen richtig beantwortet!
      </div>
  </div>
  <div class="mt-3"></div>
  <div v-if="this.currentQuestion == this.quizSize" class="container">
    <div class="row">
      <div class="col-sm">
      </div>
      <div class="col-sm">
        <button @click="repeat" type="button" class="btn btn-success btn-lg btn-block">Wiederholen</button>
      </div>
    </div>
  </div>
</template>

<script>
import QuizService from "../services/QuizService";
import router from "../router/index";
export default {
  name: "Quiz",
  data(){
    return {
      currentQuestion: 0,
      correctAnswers: 0,
      quizSize: 0,
      quiz: [],
      selected: []
    }
  },
  mounted() {
    QuizService.getAllQuestions().then((response) => {
      this.quiz = response.data;
      this.quizSize = this.quiz.length;
    });
  },
  methods:{
    selectAnswer1(){
      if(!this.selected.includes(0)){
        this.selected.push(0);
      } else {
        var index = this.selected.indexOf(0);
        if(index > -1){
          this.selected.splice(index,1);
        }
      }
      console.log(this.selected);
    },
    selectAnswer2(){
      if(!this.selected.includes(1)){
        this.selected.push(1);
      } else {
        var index = this.selected.indexOf(1);
        if(index > -1){
          this.selected.splice(index,1);
        }
      }
      console.log(this.selected);
    },
    selectAnswer3(){
      if(!this.selected.includes(2)){
        this.selected.push(2);
      } else {
        var index = this.selected.indexOf(2);
        if(index > -1){
          this.selected.splice(index,1);
        }
      }
      console.log(this.selected);
    },
    selectAnswer4(){
      if(!this.selected.includes(3)){
        this.selected.push(3);
      } else {
        var index = this.selected.indexOf(3);
        if(index > -1){
          this.selected.splice(index,1);
        }
      }
      console.log(this.selected);
    },
    nextQuestion(){
      var correct = true;

      const correctAnswers = this.quiz[this.currentQuestion].answers.filter(ans => ans.correct == true);

      if(correctAnswers.length == this.selected.length){
        this.selected.forEach(index => {
          if(!this.quiz[this.currentQuestion].answers[index].correct){
            correct = false;
          }
        });
      } else {
        correct = false;
      }

      if(correct){
        this.correctAnswers++;
      }
      this.currentQuestion++;
      this.selected = [];
      console.log(correct);
    },
    repeat(){
      this.currentQuestion = 0;
      router.push('Quiz');
    }
  }
}
</script>

<style scoped>
.col-sm{
  padding-left: 0px;
  padding-right: 0px;
}.col-sm{
   padding-left: 0px;
   padding-right: 0px;
 }
.lg-card{
  background-color: lightgreen;
}
</style>
