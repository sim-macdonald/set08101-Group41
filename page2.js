let lives = 3;

//Is an index so 0= question 1
let currentQuestionIndex = 0;

//a list of dictionaries containing question information
const questions_array = [
	{
  	question: "When used to denote time, what does PM stand for?",
  	options: ["A) Pre Midnight", "B) Post Meridiem", "C) Past Morning", "D) Post Morning"],
  	correctAnswer: 2
  	},
	{
  	question: "In our solar system, which planet is closest to the Sun?",
  	options: ["A) Jupiter", "B) Mercury", "C) Mars", "D) Earth"],
  	correctAnswer: 2
  	},
	{
  	question: "When dealing with computers, what does CPU stand for?",
  	options: ["A)Computing Power Unit ", "B) Core Performance Unit", "C) Conductive Power Unit", "D) Central Processing Unit"],
  	correctAnswer: 4
  	},
	{
  	question: "What is the name of the sea that boarders Turkey and southeastern Europe?",
  	options: ["A) Black Sea", "B) Red Sea", "C) Caspian Sea", "D) Mediterranean Sea"],
  	correctAnswer: 1
  	},
	{
  	question: "What is the most spoken native language in the world?",
  	options: ["A) Arabic", "B) Spanish", "C) English", "D) Mandarin Chinese"],
  	correctAnswer: 4
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
		var wolfSound = document.createElement("audio");
		wolfSound.src = "wolf-howling-type-03-293313.mp3";
		wolfSound.play();
		alert("'Game Over!' The wolf said gleefully. 'Now it's dinner time!'");
		gameOver();
		} else {
			alert("Wrong answer! Try again.");
		}
	} else {
	    	currentQuestionIndex++;
	  	if (currentQuestionIndex < questions_array.length) {
	    		displayQuestion();
	  	} else {
	    		alert("'Very smart, child. You have bested me.' The wolf sighs 'Head to the east and you should find your way home. Now go, before I change my mind'");
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
