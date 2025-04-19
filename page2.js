let lives = 3;

//Is an index so 0= question 1
let currentQuestionIndex = 0;

//a list of dictionaries containing question information
const questions_array = [
	{
  	question: "When used to denote time, what does PM stand for?",
  	options: ["A) Pre Midnight", "B) Post Meridiem", "C) Past Morning", "D) Post Morning"],
  	correctAnswer: 2
  	}
];

function displayQuestion() {
	const current_question = questions_array[currentQuestionIndex];
  	document.getElementById("question_display").textContent = current_question.question;
  	const buttons = document.querySelectorAll(".answer_button");
  	for (let i = 0; i < 4; i++) {
		buttons[i].textContent = current_question.options[i];
	}
}

function checkAnswer(option) {
	const current_question = questions_array[currentQuestionIndex];

	if (option !== current_question.correctAnswer) {
		lives--;
	  	document.getElementById("lives").textContent = lives;
	  	if (lives <= 0) {
		//add sfx?
		alert("Game Over! You've run out of lives.");
		gameOver();
		} else {
			alert("Wrong answer! Try again.");
		}
	} else {
	    	currentQuestionIndex++;
	  	if (currentQuestionIndex < questions_array.length) {
			alert("Correct! Moving to the next question.");
	    		displayQuestion();
	  	} else {
	    		alert("You won! You answered all the questions correctly. You can progress.");
	    		document.getElementById("nextButton").classList.remove("disabled");
	  	}
	}
}

function startGame() {
	document.getElementById("story").style.display = "none";
	document.getElementById("game").style.display = "flex";
        displayQuestion();
}

function gameOver() {
	alert("Returning to home screen...");
	window.location.href = "index.html";
}

function next() {
	if (currentQuestionIndex >= questions_array.length){
		document.location="page3.html"
	}else{
    		alert("Finish the level to move on.");
	}
}
