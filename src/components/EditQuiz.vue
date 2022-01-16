<template>
  <div class="card">
    <div class="card-body">
      <input v-model="question" class="form-control form-control-lg" type="text" placeholder="Frage">
    </div>
  </div>
  <div class="mt-3"></div>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <div class="card">
          <div @click="correctAnswer1" :class="[ answer1.correct ? 'card-body lg-card':'card-body']">
            <input v-model="answer1.answer" class="form-control form-control-lg" type="text" placeholder="Antwort #1">
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card">
          <div @click="correctAnswer2" :class="[ answer2.correct ? 'card-body lg-card':'card-body']">
            <input v-model="answer2.answer" class="form-control form-control-lg" type="text" placeholder="Antwort #2">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <div class="card">
          <div @click="correctAnswer3" :class="[ answer3.correct ? 'card-body lg-card':'card-body']">
            <input v-model="answer3.answer" class="form-control form-control-lg" type="text" placeholder="Antwort #3">
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card">
          <div @click="correctAnswer4" :class="[ answer4.correct ? 'card-body lg-card':'card-body']">
            <input v-model="answer4.answer" class="form-control form-control-lg" type="text" placeholder="Antwort #4">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-3"></div>
  <div class="container">
    <div class="row">
      <div class="col-sm message">
        {{ message }}
      </div>
      <div class="col-sm">
        <button :disabled="!valid" @click="addQuiz" type="button" class="btn btn-success btn-lg btn-block">Quiz hinzuf&uuml;gen</button>
      </div>
    </div>
  </div>
  <div class="mt-5"></div>
  <div class="card">
    <div class="card-header">Quizliste</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"
          v-for="(quiz, index) in quizList"
          :key="index"
      >
        <a>{{ quiz.question.question }}</a>
        <button @click="deleteQuiz(quiz.question.id)" class="btn btn-danger">L&ouml;schen</button>
      </li>
    </ul>
  </div>
</template>

<script>
import QuizService from "../services/QuizService";

export default {
  name: "EditQuiz",
  data(){
    return {
      quizList: [],
      message: "",
      question: "",
      answer1: {
        answer: "",
        correct: false
      },
      answer2: {
        answer: "",
        correct: false
      },
      answer3: {
        answer: "",
        correct: false
      },
      answer4: {
        answer: "",
        correct: false
      },

      quiz: undefined,
    }
  },
  mounted(){
    QuizService.getAllQuestions().then((response) => {
      this.quizList = response.data;
    });
  },
  computed: {
    valid(){
      return this.question.length > 0 &&
          this.answer1.answer.length > 0 &&
          this.answer2.answer.length > 0 &&
          this.answer3.answer.length > 0 &&
          this.answer4.answer.length > 0;
    }
  },
  methods: {
    deleteQuiz(quizId){
      QuizService.removeQuiz(quizId).then(() => {
        QuizService.getAllQuestions().then((response) => {
          this.quizList = response.data;
        });
      });
    },
    correctAnswer1(){
      this.answer1.correct = !this.answer1.correct;
    },
    correctAnswer2(){
      this.answer2.correct = !this.answer2.correct;
    },
    correctAnswer3(){
      this.answer3.correct = !this.answer3.correct;
    },
    correctAnswer4(){
      this.answer4.correct = !this.answer4.correct;
    },
    addQuiz(){
      this.quiz = {
        question: this.question,
        answers: [this.answer1, this.answer2, this.answer3, this.answer4]
      }

      QuizService.addQuiz(this.quiz).then(() => {
        this.message = "Quiz successfully added to database.."
        this.reset();
        QuizService.getAllQuestions().then((response) => {
          this.quizList = response.data;
        });
      });
    },
    reset(){
      this.quiz = undefined;
      this.question = "";
      this.answer1.answer = "";
      this.answer1.correct = false;
      this.answer2.answer = "";
      this.answer2.correct = false;
      this.answer3.answer = "";
      this.answer3.correct = false;
      this.answer4.answer = "";
      this.answer4.correct = false;
    }
  }
}
</script>

<style scoped>

.col-sm{
  padding-left: 0px;
  padding-right: 0px;
}

.lg-card{
  background-color: lightgreen;
}

.message{
  color: darkseagreen;
  padding: 15px;
}

li.list-group-item{
  display: flex;
  justify-content: space-between;
}

</style>
