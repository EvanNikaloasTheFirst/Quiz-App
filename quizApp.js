let UserScore = document.getElementById('score');
var response = document.getElementById('response')
let onePoint = 1;
let score = 0;
// Contains all questions
let allQuestions = [];
let correctAnswers = [];
let correctChoice;
// starts on minus 1 so question 0 is displayed
var counter = -1;
var questions = document.getElementById("questions");
var trueBtn = document.getElementById('trueBtn');
var falseBtn = document.getElementById('falseBtn');

// fetch retieves API URL 
let apiKey = "https://opentdb.com/api.php?amount=10&category=32&type=boolean";

const choices = document.getElementsByClassName("options")
console.log(choices)

fetch(apiKey).then(response =>{
    // converts the body of the response (JSON) -> then return new promise
    return response.json();
    
//.then = when the data has loaded
}).then(QuizQuestions => {

// Maps all the indiviual questions within the array to become singular objects
QuizQuestions.results.map(QuizQuestion => {
    const formattedQuestion = {
        question: QuizQuestion.question
    };

    

// itterates over all questions and pushes it to a new array
    for (const [key,value] of Object.entries(formattedQuestion)){
        // console.log(`${key}: ${value}`)

        allQuestions.push(value)
    }
    // console.log(allQuestions)

    // correct answer for each question
    const correctAnswer = [QuizQuestion.correct_answer]
    // pushed all of the correct answers into an array
    for (const [key,value] of Object.entries(correctAnswer)){

        correctAnswers.push(value)
    }
    // console.log(correctAnswers)

     startGame ()
})
})
.catch(function(error){
    console.log("Something went wrong retrieving the JSON")

})


function startGame (formattedQuestion){

    // get the amount of questions in a number
var arrayLength = allQuestions.length;

var answersLength = correctAnswers.length;
// console.log(answersLength)

   
// once button is clicked
    document.getElementById('startBtn').onclick = function (){
    /* check button is clicked
        console.log('clicked') */
// REF: https://www.demo2s.com/javascript/javascript-button-loop-an-array-on-click.html



        if (counter <= allQuestions.length) {
            // traverses through array of questions
            questions.innerHTML = arrayLength[counter];

            // stores the correct answer in 'correctChoice'
            correctChoice = answersLength[counter]
          
            counter = counter + 1;

            console.log(questions.innerHTML = allQuestions[counter]);
            console.log('correct answer: ' + correctAnswers[counter])

             trueButtonClicked()
             falseButtonClicked()
             
        }
        else if (counter == allQuestions.length) {
            questions.innerHTML = 'Quiz Finished'
            console.log('Quiz finished')
        }
}


}

function trueButtonClicked(correctAnswer){
document.getElementById('trueBtn').addEventListener("click", () => {
trueButtonClicked.called = true;
console.log(trueButtonClicked.called)

if (correctAnswers[counter] == 'True' && trueButtonClicked.called){
    response.innerHTML = 'Correct, Next question';
    score += onePoint;
    UserScore.innerHTML = score;
    console.log(score)

    // Once answer is submitted User cannot change their response
    trueBtn.disabled = true;
    falseBtn.disabled = true;

}
else {
    response.innerHTML = 'Incorrect, Next Question';
    trueBtn.disabled = true;
    falseBtn.disabled = true;
}
 }); 
 response.innerHTML = '?'
 trueBtn.disabled = false;
 falseBtn.disabled = false;
}

function falseButtonClicked(correctAnswer){
    document.getElementById('falseBtn').addEventListener("click", () => {
    falseButtonClicked.called = true;
    
    if (correctAnswers[counter] == 'False' && falseButtonClicked.called){
        response.innerHTML = 'Correct, Next question';
        score += onePoint;
        UserScore.innerHTML = score;
        console.log(score)
        trueBtn.disabled = true;
        falseBtn.disabled = true;
    }
    else {
        response.innerHTML = 'Incorrect, Next Question';
        trueBtn.disabled = true;
        falseBtn.disabled = true;
    }
     }); 
    }
function myLoadFunction(){
    startBtn.addEventListener('click',startGame);
    
}
document.addEventListener('DOMContentLoaded', myLoadFunction)


