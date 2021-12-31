import http from "../http-common";

class QuizService {

    getAllQuestions(){
        return http.get("/rest/quiz");
    }

    addQuiz(quiz){
        return http.post("/rest/quiz",quiz);
    }

    removeQuiz(id){
        return http.delete("/rest/quiz/"+id);
    }
}

export default new QuizService();
