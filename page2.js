let lives = 3;

//Is an index so 0= question 1
let currentQuestionIndex = 0;

//a list of dictionaries containing question information
const questions_array = [
	{
  	question: "Q1",
  	options: ["A) A", "B) B", "C) C", "D) D"],
  	correctAnswer: 1
  	}
];

function displayQuestion() {
	const current_question = questions_array[currentQuestionIndex];
  	document.getElementById("question_display").textContent = current_question.question;
  	const buttons = document.querySelectorAll(".answer_button");
  	for (let i = 0; i < 4; i++) {
		buttons[i].textContent = question.options[i];
	}
}

function checkAnswer(option) {
	const current_question = questions_array[currentQuestionIndex];

	if (option !== question.correctAnswer) {
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
	    	alert("Correct! Moving to the next question.");
	    	currentQuestionIndex++;
	  	if (currentQuestionIndex < questions_array.length) {
	    		displayQuestion();
	  	} else {
	    		alert("You won! You answered all the questions correctly. You can progress.");
	    		document.getElementById("nextButton").classList.remove("disabled");
	  	}
	}
}

function startGame() {
	document.getElementById("story_section").style.display = "none";
	document.getElementById("game_section").style.display = "flex";
        displayQuestion();
}

function gameOver() {
	alert("Returning to home screen...");
	window.location.href = "index.html";
}

function next() {
	if (CurrentQuestionIndex >= questions_arrar.length){
		document.location="page1.html"
	}else{
    		alert("Finish the level to move on.");
	}
}
