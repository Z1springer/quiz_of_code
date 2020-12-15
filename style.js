console.log("It is linked, yay")
console.log(window)

// Score is be based on how much time they have left in the quiz
// Questions CAN be about anything you want, but if you will not be doing coding questions then it MUST be school appropriate (PG-13 or Rated T if that helps). 
// I will be working with the only other thing I know to be techy and confusing more often than not to outsiders; Star Trek!




// GIVEN I am taking a code quiz

// WHEN I click the start button

// make an HTML button and addEventListoner
document.getElementById("startButton").addEventListener("click", function () {
    console.log("Quiz Commences")
    var startTime = 180
    setInterval(function () {
        startTime--
        console.log(startTime);
    }, 1000)
})

// THEN a timer starts and I am presented with a question

//TODO: in the eventListoner from the previous step I activate the timer (add timer last)

// store questions within an array of objects. Each object can have a question and choices while singling out the correct choice.


var currentQuestionsIndex = 0;



var questions = [ //each set of questions, choices, and correctAnswers is considered one object in the array; questions
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

// show the first question from the array.

// show the choices of each question

// show the question to the user in browser

// show choices to the user in the browser

var questionIndex = 0;

function showQuestions() {

    document.getElementById("question").textContent = questions[questionIndex].question

    document.getElementById("answer1").textContent = questions[questionIndex].choices[0]
    document.getElementById("answer1").setAttribute("data", questions[questionIndex].choices[0]) //it works yay!

    document.getElementById("answer2").textContent = questions[questionIndex].choices[1]
    document.getElementById("answer2").setAttribute("data", questions[questionIndex].choices[1])

    document.getElementById("answer3").textContent = questions[questionIndex].choices[2]
    document.getElementById("answer3").setAttribute("data", questions[questionIndex].choices[2])

    document.getElementById("answer4").textContent = questions[questionIndex].choices[3]
    document.getElementById("answer4").setAttribute("data", questions[questionIndex].choices[3])
}

showQuestions()

// get answer from user

document.querySelectorAll(".choice").forEach(function (each) {
    each.addEventListener("click", function (event) {
        let answerFromUser = event.target.getAttribute("data")
        console.log(questions[currentQuestionsIndex].correctAnswer)

        if (answerFromUser === questions[currentQuestionsIndex].correctAnswer) {
            console.log("You should be in Starfleet!")
        } else {
            console.log("Seems Star Wars may be more your speed.")
        }
        questionIndex++
        if (questionIndex < 6) {
            showQuestions()
        } else {
            alert("GAME OVER")
        }
        // console.log(questions[currentQuestionsIndex].question)
    })
})


// THEN I am presented with another question

//TODO: determine what user chose as their answer. add a click eventListoner to all of the choices

//TODO: compare what user chose with correct answer (if statements)

//TODO: store the correct answer in a finalScore var

// WHEN I answer a question incorrectly

//TODO: inform the user with a caption underneath the question that they chose the wrong answer

//TODO: log the incorrect answer into the finalScore Var

// THEN time is subtracted from the clock

//TODO: Work on the timer and how it interacts with right/wrong answers towards the end

// WHEN all questions are answered or the timer reaches 0

//TODO: display final score according to how much time remained after the questions were answered

//TODO: log and display final score(time) on a high score board that will save in local storage

// THEN the game is over (use alerts)

//TODO: display a congratulatory message that they finished with x amount of time left

//TODO: offer commiserations that they were unable to finish in the time allotted

//TODO: prompt the user with a confirm; "Would you like to try again?"

// WHEN the game is over

//TODO: display 'Quiz Concluded' in large bright letters on the users screen

// THEN I can save my initials and score

//TODO: use a sort method to display the score board with final scores and initials

//TODO: on the same page as the 'Quiz Concluded', prompt the user with a request to enter their name for the score board


