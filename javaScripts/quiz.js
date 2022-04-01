
        // Quiz Containers
        const reviewViewRef = document.getElementById("reviewView")
        const quizViewRef = document.getElementById("quizView")
        const quizRef = document.getElementById("quiz")


        // Quiz Variables
        const scoreRef = document.getElementById("score")
        const timeTakenRef = document.getElementById("timeTaken")
        const numberOfCorrectAnswersRef = document.getElementById("numberOfCorrectAnswers")
        const timerRef = document.getElementById("timer")

        // Queation References
        const promptRef = document.getElementById("prompt")
        const optionsRef = document.querySelectorAll("#options > div > label")
        const inputsRef = document.querySelectorAll("#options > div > input")

        // Feedback Containers
        const correctAnswersRef = document.getElementById("correctAnswers")
        const wrongAnswersRef = document.getElementById("wrongAnswers")


        // Variables
        let currentScore = 0;
        let currentQuestion = 0;
        let numberOfCorrectAnswers = 0;
        let secondsLeft = 60;
        let completed = false;

        // Questions data structure
        const questions = [
            {
                "question": "Which country is referred as \"The pearl of the Indian Ocean\"?",
                "answers": ["Maldives", "Seychelles", "Sri Lanka", "Madagascar"],
                "correctAnswer": 2,
                "givenAnswer": undefined
            },
            {
                "question": "What is the name of the tallest mountain in Sri Lanka?",
                "answers": ["Pidurutalagala", "Kirigalpotha", "Knuckles", "Haputale"],
                "correctAnswer": 0,
                "givenAnswer": undefined
            },
            {
                "question": "What is the commercial capital of Sri Lanka?",
                "answers": ["Galle", "Colombo", "Kandy", "Jaffna"],
                "correctAnswer": 1,
                "givenAnswer": undefined
            },
            {
                "question": "What is the longest river in Sri Lanka?",
                "answers": ["River Nilwala", "River Gin", "River Mahaweli", "River Kalu"],
                "correctAnswer": 2,
                "givenAnswer": undefined
            },
            {
                "question": "What currency do Sri lankans use?",
                "answers": ["Dollar", "Rupee", "Euro", "Yen"],
                "correctAnswer": 1,
                "givenAnswer": undefined
            },
            {
                "question": "What language is mostly spoken in Sri Lanka?",
                "answers": ["Sinhala", "Tamil", "English", "French"],
                "correctAnswer": 0,
                "givenAnswer": undefined
            },
            {
                "question": "Which is the national bird of Sri lanka?",
                "answers": ["Parrot", "Sri lankan Sparrow", "Serendib scops owl", "Ceylon Jungle Fowl"],
                "correctAnswer": 3,
                "givenAnswer": undefined
            },
            {
                "question": "In which city the famous Dutch Fortress is situated?",
                "answers": ["Colombo", "Galle", "Jaffna", "Matara"],
                "correctAnswer": 1,
                "givenAnswer": undefined
            },
            {
                "question": "Which beach in Sri Lanka is famous for whale watching?",
                "answers": ["Negombo", "Trincomalee", "Mirissa", "Unawatuna"],
                "correctAnswer": 2,
                "givenAnswer": undefined
            },
            {
                "question": "What is the staple food of Sri Lanka?",
                "answers": ["Dhal", "Rice", "Bread", "Pasta"],
                "correctAnswer": 1,
                "givenAnswer": undefined
            }
        ]

        function setQuestion(index) {
            // Get the target question
            const question = questions[index]

            // Push the question to the UI
            promptRef.innerText = question.question

            // Push the answers to the UI
            optionsRef[0].innerText = question.answers[0]
            optionsRef[1].innerText = question.answers[1]
            optionsRef[2].innerText = question.answers[2]
            optionsRef[3].innerText = question.answers[3]
        }

        const inputs = document.querySelectorAll("#options > div > input")

        // Code from lecture note to get the selected value from the options list
        function getRadioValue(radioArray) {
            for (let i = 0; i < radioArray.length; i++) {
                if (radioArray[i].checked) {
                    return parseInt(radioArray[i].value);
                }
            }
            return undefined;
        }


        function checkAnswer() {
            // Get `value` of the correct selected input
            const selectedAnswer = getRadioValue(inputsRef);

            // Save the given answer to questions data structure for later use
            questions[currentQuestion].givenAnswer = selectedAnswer

            // Check if the given answer matches with the correct answer
            if (selectedAnswer === questions[currentQuestion].correctAnswer) {
                // Update the score
                currentScore += 2;
                numberOfCorrectAnswers += 1;
            } else {
                // Update the score
                currentScore -= 1;
            }

            // Move on the the next question
            currentQuestion += 1;

            // Check if we are out of question, if so stop the questioner
            if (currentQuestion >= questions.length) {
                showResults();
                return;
            }

            // Push the new question to the UI
            setQuestion(currentQuestion);

            // Deselect the selected option
            quizRef.reset();
        }


        // Background function
        function updateTimer() {
            // Stop if the user has answered all the question
            if (completed) {
                return;
            }

            // Reduce a second
            secondsLeft -= 1;

            // Update the counter on the UI
            timerRef.innerText = secondsLeft

            if (secondsLeft > 0) {
                // If the user is not out of time, recursively call this function after 1 second delay
                setTimeout(() => {
                    updateTimer();
                }, 1000);
            } else {
                showResults()
            }
        }

        function showResults() {

            // Hide the quiz and show the results
            reviewViewRef.classList.toggle("hidden")
            quizViewRef.classList.toggle("hidden")

            // Stop the timer
            completed = true;

            // Update UI elements
            numberOfCorrectAnswersRef.innerText = numberOfCorrectAnswers
            scoreRef.innerText = currentScore
            timeTakenRef.innerText = 60 - secondsLeft

            // Iterate through all the answers
            questions.forEach(question => {
                // Create an new HTML element
                const line = document.createElement("p");

                // Set the content of element
                line.innerHTML = `<b>${question.question}</b> <br> <b>Given Answer:</b> ${question.answers[question.givenAnswer]} | <b>Correct Answer</b>: ${question.answers[question.correctAnswer]}`;

                line.style.marginBottom = "5px"

                if (question.correctAnswer == question.givenAnswer) {
                    // If the given answer is correct append the element under correct answers div
                    correctAnswersRef.appendChild(line);
                } else {
                    // If the given answer is correct append the element under wrong answers div
                    wrongAnswersRef.appendChild(line);
                }
            });


            // spending on the final score add css class to review screen
            // which will set the background color of the UI
            if (currentScore >= 10) {
                reviewViewRef.classList.add("pass")
                document.body.style.background = "rgb(34 197 94)";
            } else {
                document.body.style.background = "rgb(225 29 72)";
            }
        }

        // At Page Load

        // Set the first question manually
        setQuestion(currentQuestion)
        // Start the timer
        updateTimer()
