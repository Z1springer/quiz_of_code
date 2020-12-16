console.log("It is linked, yay")
console.log(window)

// Score is be based on how much time they have left in the quiz
// Questions CAN be about anything you want, but if you will not be doing coding questions then it MUST be school appropriate (PG-13 or Rated T if that helps). 
// I will be working with the only other thing I know to be techy and confusing more often than not to outsiders; Star Trek!


// GIVEN I am taking a code quiz

// WHEN I click the start button

document.getElementById("startButton").addEventListener("click", function () {
    console.log("Quiz Commences");
    document.getElementById("quizForm").style.display = "block";
    setTimer()
})

// THEN a timer starts and I am presented with a question

var startTime = 80
var timer = ""
function setTimer() {
    timer = setInterval(function () {
        startTime--;
        console.log(startTime);
        document.getElementById("time").textContent = startTime
        if (startTime === 0) {
            clearInterval(timer);
            alert("TIMES UP")
        }
    }, 1000)
}

var currentQuestionsIndex = 0;

var questions = [ //each set of questions, choices, and correctAnswers is considered one object in the array; 'questions'
    {
        question: 'What Class of ship is the Enterprise-D?',
        choices: ['Nebula', 'Constitution', 'Galaxy', 'Excelsior'],
        correctAnswer: 'Galaxy'
    },
    {
        question: 'Humanity first made contact with which Alien race?',
        choices: ['Betazoids', 'Klingons', 'Ferengi', 'Vulcans'],
        correctAnswer: 'Vulcans'
    },
    {
        question: 'What kind of defensive hand weapon is common for Starfleet Officers?',
        choices: ['Phaser', 'Handgun', 'Taser', 'Disruptor'],
        correctAnswer: 'Phaser'
    },
    {
        question: 'Who was the Captain of the Enterprise-D?',
        choices: ['Kirk', 'Picard', 'Janeway', 'Sisko'],
        correctAnswer: 'Picard'
    },
    {
        question: 'Which is a type of Klingon Ship?',
        choices: ['Duck-of-War', 'Chicken-of-Death', 'Bird-of-Prey', 'Fowl-of-Fighting'],
        correctAnswer: 'Bird-of-Prey'
    },
    {
        question: 'Who is one of the major rivals for the United Federation of Planets in the series Deep Space 9?',
        choices: ['The Klingon Empire', 'The Ferengi Alliance', 'The Sheliak Corporate', 'The Cardassian Union'],
        correctAnswer: 'The Cardassian Union'
    },
    {
        question: 'What was the name of the ship lost in the Delta Quadrant for seven years?',
        choices: ['USS Voyager', 'USS Wayfarer', 'USS Traveler', 'USS Pathfinder'],
        correctAnswer: 'USS Voyager'
    }
]

// WHEN I answer a question

var questionIndex = 0;

function showQuestions() {

    document.getElementById("question").textContent = questions[questionIndex].question

    document.getElementById("answer1").textContent = questions[questionIndex].choices[0]
    document.getElementById("answer1").setAttribute("data", questions[questionIndex].choices[0])

    document.getElementById("answer2").textContent = questions[questionIndex].choices[1]
    document.getElementById("answer2").setAttribute("data", questions[questionIndex].choices[1])

    document.getElementById("answer3").textContent = questions[questionIndex].choices[2]
    document.getElementById("answer3").setAttribute("data", questions[questionIndex].choices[2])

    document.getElementById("answer4").textContent = questions[questionIndex].choices[3]
    document.getElementById("answer4").setAttribute("data", questions[questionIndex].choices[3])
}

showQuestions()

// THEN I am presented with another question

document.querySelectorAll(".choice").forEach(function (each) {
    each.addEventListener("click", function (event) {
        let answerFromUser = event.target.getAttribute("data");
        // WHEN I answer a question incorrectly
        // THEN time is subtracted from the clock
        if (answerFromUser === questions[currentQuestionsIndex].correctAnswer) {
            startTime + 10;
        } else {
            startTime - 10;
        }
        questionIndex++
        if (questionIndex < 6) {
            // WHEN all questions are answered or the timer reaches 0
            showQuestions()

        } else {// THEN the game is over
            clearInterval(timer);
            alert(startTime)
            var userInits = prompt("What are your initials?")
            var userObj = {
                initials: userInits,
                score: score
            }
            storedScores.push(userObj)
            localStorage.setItem('finalTime', JSON.stringify(storedScores))
            renderScores();
        }
    })
})

// WHEN the game is over

// THEN I can save my initials and score

// Tried looking up ways to show the score via JavaScript, and found almost everyone using jquery, so I do not know how I am supposed to get this score to show up on my separate page, really wish that I did though.

var score = 0
var storedScores = JSON.parse(localStorage.getItem('finalTime')) || []

function renderScores() {

    for (var i = 0; i < storedScores.length; i++) {
        var newLi = document.createElement("li")
        newLi.textContent = (userObj)
        document.getElementById("scoresList").append(newLi)
    }
}