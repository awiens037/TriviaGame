//When page loads, begin running code//
//Set VARS//
//first-fifth answers set to 2 as 0 and 1 will be used later to determine if correct//
$(document).ready(function() {
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var unanswered = 0; 
	var timeRemaining = 25;
	var firstAnswer = 2;
	var secondAnswer = 2;
	var thirdAnswer =2;
	var fourthAnswer =2;
	var fifthAnswer =2;
	var intervalId;

//following code hides the questions/radio buttons in #gameplay div//
	$('#GamePlay').hide();

//When start button clicked, show gameplay q's/buttons, hide start div and button//
//initiate() to call timer function added next//
	$('.StartButton').on('click', function() {
		$('#GamePlay').show();
		$('#GameStart').hide();
		initiate();
	});

//stop function//
	function stop() {
		clearInterval(intervalId);
	}

//Timer function and interval set//
	function initiate() {
		intervalId = setInterval(decrement, 1000);
	}

//Decrement function//
	function decrement() {
//tells function to reduce time remaining by 1 when ran//
		timeRemaining -= 1;

//links timer to html for text and shows time remaining//
		$('#Timer').html('Time Left: ' + timeRemaining)

//if time remaining = 0, stop game, alert time up, total scores, new background and text//
		if (timeRemaining === 0) {
			stop();
			alert('Time is Up!');

//adds up correct answers. If answer correct, value 1 is added. value 0 if incorrect//
			correctAnswers = firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer;

//if answer = 0, add an incorrect answer//
			if (firstAnswer === 0) {
				incorrectAnswers++;
			}
			if (secondAnswer === 0) {
				incorrectAnswers++;
			}
			if (thirdAnswer === 0) {
				incorrectAnswers++;
			}
			if (fourthAnswer === 0) {
				incorrectAnswers++;
			}
			if (fifthAnswer === 0) {
				incorrectAnswers++;
			}
//if unanswered, add to unanswered. value set to 2 at vars section//
//also have to set correct answers -2 so it wont count//
			if (firstAnswer === 2) {
				unanswered++;
				correctAnswers = correctAnswers - 2;
			}
			if (secondAnswer === 2) {
				unanswered++;
				correctAnswers = correctAnswers - 2;
			}
			if (thirdAnswer === 2) {
				unanswered++;
				correctAnswers = correctAnswers - 2;
			}
			if (fourthAnswer === 2) {
				unanswered++;
				correctAnswers = correctAnswers - 2;
			}
			if (fifthAnswer === 2) {
				unanswered++;
				correctAnswers = correctAnswers - 2;
			}

//Set up Game Over page. Link new background, set up html//
			$('#GamePlay').css('background-image', 'url(assets/images/vader.png)')
			$('#GamePlay').html("<h1>" + "You\'re Training Is Now Complete" + "<br>" + "Correct Answers: " + correctAnswers + "<br>" + "Incorrect Answers: " + incorrectAnswers + "<br>" + "Questions Unanswered: " + unanswered + "</h1>");
		}
	}

//set correct answers to 1, incorrect to zero//
	$("input[name='q1']").click(function() {
		var userAnswer = $("input[name='q1']:checked").val();

		if (userAnswer === "AdmiralAkbar") {
			firstAnswer = 1;
		} else {
			firstAnswer = 0;
		}
	});

	$("input[name='q2']").click(function() {
		var userAnswer = $("input[name='q2']:checked").val();

		if (userAnswer === "Romulus") {
			secondAnswer = 1;
		} else {
			secondAnswer = 0;
		}
	});

	$("input[name='q3']").click(function() {
		var userAnswer = $("input[name='q3']:checked").val();

		if (userAnswer === "Viper") {
			thirdAnswer = 1;
		} else {
			thirdAnswer = 0;
		}
	});

	$("input[name='q4']").click(function() {
		var userAnswer = $("input[name='q4']:checked").val();

		if (userAnswer === "TheFormics") {
			fourthAnswer = 1;
		} else {
			fourthAnswer = 0;
		}
	});

	$("input[name='q5']").click(function() {
		var userAnswer = $("input[name='q5']:checked").val();

		if (userAnswer === "PillarOfAutumn") {
			fifthAnswer = 1;
		} else {
			fifthAnswer = 0;
		}
	});

});

