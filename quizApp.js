let scoreBoard = document.getElementById('score');
let UserScore = 0;

var counter = 0;
// fetch retieves API URL 
// .then works with the JSON after its been retrieved
fetch("https://opentdb.com/api.php?amount=10&category=32&type=boolean").then(function(response){
    // converts the body of the response (JSON) - > then return new promise
    return response.json();
    startQuiz()

}).then(function(data){

    const {question} = data.results[0];
    const {correct_answer} = data.results[0];
     
    console.log("question:" + question)
    console.log("correct_answer: " + correct_answer)



    for (var i = 0; i < question.length; i++){
        for (var j = 0; i < correct_answer.length;j++){
    var questions = document.getElementById('questions').innerHTML = question[i];
    if (document.getElementById('true').clicked == true && correct_answer[j] == 'True'){
        

    }
}

}
})
.catch(function(error){
    console.log("Something went wrong retrieveing the JSON")

})

