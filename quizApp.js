
let UserScore = 0;

let availableQuestions = [];
// Contains all questions
let allQuestions = [];
let correctAnswers = []
let questionsAsked = 0;
// starts on minus 1 so question 0 is displayed
var counter = -1;
var questions = document.getElementById("questions");

// fetch retieves API URL 
let apiKey = "https://opentdb.com/api.php?amount=10&category=32&type=boolean";

const choices = document.getElementsByClassName("options")
console.log(choices)

fetch(apiKey).then(response =>{
    // converts the body of the response (JSON) - > then return new promise
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
        // console.log(`${key}: ${value}`)

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

var arrayLength = allQuestions.length;
// console.log (arrayLength)
   
// once button is clicked
    document.getElementById('startBtn').onclick = function (){
    
        console.log('clicked')
        // console.log(allQuestions)
        if (counter < allQuestions.length){
            questions.innerHTML = arrayLength[counter];
            counter = counter + 1;

            console.log(questions.innerHTML = allQuestions[counter])
        }
        else{
            console.log('Quiz finished')
        }

}

}

function myLoadFunction(){
    startBtn.addEventListener('click',startGame);
    
}

document.addEventListener('DOMContentLoaded', myLoadFunction)


