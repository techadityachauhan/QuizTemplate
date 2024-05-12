const questions = [
    {
      question: "Which element is used to define a hyperlink in HTML?",
      answers: [
        { text: "<a>", correct: true },
        { text: "<link>", correct: false },
        { text: "<p>", correct: false },
        { text: "<div>", correct: false },
      ],
      selected: null,
    },
    {
      question: "What does CSS stand for?",
      answers: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Creative Style Sheets", correct: false },
        { text: "Computer Style Sheets", correct: false },
        { text: "Colorful Style Sheets", correct: false },
      ],
      selected: null,
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      answers: [
        { text: "var", correct: true },
        { text: "int", correct: false },
        { text: "let", correct: false },
        { text: "const", correct: false },
      ],
      selected: null,
    },
    {
      question: "What is the purpose of the HTML <head> element?",
      answers: [
        { text: "To define the header of a document", correct: true },
        { text: "To define a heading for a section", correct: false },
        { text: "To define a hyperlink", correct: false },
        { text: "To define a paragraph", correct: false },
      ],
      selected: null,
    },
    {
      question: "Which CSS property is used to set the text color of an element?",
      answers: [
        { text: "color", correct: true },
        { text: "background-color", correct: false },
        { text: "font-color", correct: false },
        { text: "text-color", correct: false },
      ],
      selected: null,
    },
    {
      question:
        "What keyword is used to declare a constant variable in JavaScript?",
      answers: [
        { text: "const", correct: true },
        { text: "let", correct: false },
        { text: "var", correct: false },
        { text: "final", correct: false },
      ],
      selected: null,
    },
    {
      question: "Which of the following is NOT a valid data type in JavaScript?",
      answers: [
        { text: "float", correct: true },
        { text: "string", correct: false },
        { text: "boolean", correct: false },
        { text: "object", correct: false },
      ],
      selected: null,
    },
    {
      question: "In HTML, which tag is used to define an unordered list?",
      answers: [
        { text: "<ul>", correct: true },
        { text: "<ol>", correct: false },
        { text: "<li>", correct: false },
        { text: "<dl>", correct: false },
      ],
      selected: null,
    },
    {
      question: "What does the CSS property 'font-weight' determine?",
      answers: [
        { text: "The thickness of the font", correct: true },
        { text: "The font style", correct: false },
        { text: "The font color", correct: false },
        { text: "The font size", correct: false },
      ],
      selected: null,
    },
    {
      question: "In JavaScript, which symbol is used for single-line comments?",
      answers: [
        { text: "//", correct: true },
        { text: "#", correct: false },
        { text: "--", correct: false },
        { text: "/* */", correct: false },
      ],
      selected: null,
    },
    {
      question: "Which of the following is NOT a valid CSS selector?",
      answers: [
        { text: "!important", correct: true },
        { text: ".class", correct: false },
        { text: "#id", correct: false },
        { text: "element", correct: false },
      ],
      selected: null,
    },
    {
      question: "What is the purpose of the HTML <footer> element?",
      answers: [
        { text: "To define a footer for a document or section", correct: true },
        { text: "To define a header for a document or section", correct: false },
        { text: "To define a navigation menu", correct: false },
        { text: "To define a paragraph", correct: false },
      ],
      selected: null,
    },
    {
      question: "What is the purpose of the CSS 'z-index' property?",
      answers: [
        { text: "To control the stacking order of elements", correct: true },
        { text: "To set the width of an element", correct: false },
        { text: "To set the height of an element", correct: false },
        { text: "To control the opacity of an element", correct: false },
      ],
      selected: null,
    },
    {
      question:
        "What is the correct syntax for a JavaScript function declaration?",
      answers: [
        { text: "function myFunction() {}", correct: true },
        { text: "myFunction = function() {}", correct: false },
        { text: "myFunction(): {}", correct: false },
        { text: "def myFunction(): {}", correct: false },
      ],
      selected: null,
    },
    {
      question: "When is the body tag used?",
      answers: [
        { text: "Before the HEAD tag", correct: false },
        { text: "After the HEAD tag", correct: true },
        { text: "Inside the HEAD tag", correct: false },
        { text: "After the TITLE tag", correct: false },
      ],
      selected: null,
    },
    {
      question: "What does the CSS property 'float' do?",
      answers: [
        {
          text: "Allows an element to be positioned to the left or right of its container",
          correct: true,
        },
        { text: "Changes the opacity of an element", correct: false },
        { text: "Increases the size of an element", correct: false },
        { text: "Adds a border around an element", correct: false },
      ],
      selected: null,
    },
    {
      question: "Which HTML tag is used to define a checkbox input field?",
      answers: [
        { text: "<input type='checkbox'>", correct: true },
        { text: "<checkbox>", correct: false },
        { text: "<check>", correct: false },
        { text: "<box>", correct: false },
      ],
      selected: null,
    },
    {
      question: "What is the purpose of the JavaScript 'setTimeout()' function?",
      answers: [
        { text: "Executes a function after a specified delay", correct: true },
        { text: "Sets the interval for executing a function", correct: false },
        { text: "Clears the timeout for a function", correct: false },
        { text: "Returns the current date and time", correct: false },
      ],
      selected: null,
    },
    {
      question:
        "In CSS, which property is used to specify the font family for text?",
      answers: [
        { text: "font-family", correct: true },
        { text: "text-font", correct: false },
        { text: "font-style", correct: false },
        { text: "text-family", correct: false },
      ],
      selected: null,
    },
    {
      question:
        "Which JavaScript method is used to add new elements to the end of an array and returns the new length?",
      answers: [
        { text: "push()", correct: true },
        { text: "pop()", correct: false },
        { text: "splice()", correct: false },
        { text: "concat()", correct: false },
      ],
      selected: null,
    },
  ];
  
  const timerElement = document.getElementById("timer");
  const timeDisplay = document.getElementById("time");
  let timeLeft = 600;
  
  function startTimer() {
    const timerInterval = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timeDisplay.textContent = "00:00";
        showScore();
      } else {
        const minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        seconds = seconds < 3 ? "0" + seconds : seconds;
        timeDisplay.textContent = `${minutes}:${seconds}`;
        timeLeft--;
      }
    }, 1000);
  }
  
  startTimer();
  
  const questionElement = document.getElementById("question");
  const nextButton = document.getElementById("next_btn");
  const prevButton = document.getElementById("prev_btn");
  
  let score = 0;
  let questionsPerPage = 5;
  let totalQuestions = Math.min(questions.length, 20);
  let totalPages = Math.ceil(totalQuestions / questionsPerPage);
  let currentPage = 1;
  
  function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  shuffleQuestions(questions);
  
  function generatePageQuestions() {
    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, totalQuestions);
    return questions.slice(startIndex, endIndex);
  }
  
  function startQuiz() {
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const pageQuestions = generatePageQuestions();
  
    pageQuestions.forEach((currentQuestion, index) => {
      const questionIndex = (currentPage - 1) * questionsPerPage + index;
      let questionText = `${questionIndex + 1}. ${currentQuestion.question}`;
  
      let questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
      questionDiv.textContent = questionText;
      questionElement.appendChild(questionDiv);
  
      currentQuestion.answers.forEach((answer, ansIndex) => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
  
        if (currentQuestion.selected === ansIndex) {
          button.classList.add("selected");
        }
  
        button.addEventListener("click", () =>
          selectAnswer(currentQuestion, ansIndex)
        );
        questionDiv.appendChild(button);
      });
    });
  
    checkAllAnswered();
  }
  
  function resetState() {
    while (questionElement.firstChild) {
      questionElement.removeChild(questionElement.firstChild);
    }
  }
  
  function selectAnswer(question, ansIndex) {
    question.selected = ansIndex;
    showQuestion();
  }
  
  function checkAllAnswered() {
    const pageQuestions = generatePageQuestions();
    const allAnswered = pageQuestions.every(
      (question) => question.selected !== null
    );
  
    if (allAnswered && currentPage < totalPages) {
      nextButton.style.display = "block";
      nextButton.textContent = "Next";
    } else if (allAnswered && currentPage === totalPages) {
      nextButton.style.display = "block";
      nextButton.textContent = "Finish";
    } else {
      nextButton.style.display = "none";
    }
  
    if (currentPage > 1) {
      prevButton.style.display = "block";
    } else {
      prevButton.style.display = "none";
    }
  }
  
  function handleNextButton() {
    currentPage++;
    showQuestion();
    scrollToTop();
  }
  
  function handlePrevButton() {
    currentPage--;
    showQuestion();
    scrollToTop();
  }
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  
  function showScore() {
    resetState();
  
    questions.forEach((question, index) => {
      const selectedAnswer = question.selected;
      const correctAnswer = question.answers.findIndex((answer) => answer.correct);
  
      if (selectedAnswer === correctAnswer) {
        score++;
      }
    });
  
    questionElement.innerHTML = `You scored ${score} out of ${totalQuestions}!`;
    nextButton.style.display = "none";
    prevButton.style.display = "none";
  
  
    const correctAnswersContainer = document.getElementById("correct-answers");
    correctAnswersContainer.innerHTML = "<h2>Correct Answers and Wrong Answers:</h2>";
  
    questions.forEach((question, index) => {
      const correctAnswerIndex = question.answers.findIndex((answer) => answer.correct);
      const correctAnswer = question.answers[correctAnswerIndex].text;
      const selectedAnswer = question.selected !== null ? question.answers[question.selected].text : "Not answered";
  
      const answerBox = document.createElement("div");
      answerBox.classList.add("answer-box");
  
      if (question.selected === correctAnswerIndex) {
        answerBox.classList.add("correct");
        answerBox.innerHTML = `${index + 1}. ${question.question} <br> Correct Answer: ${correctAnswer}`;
      } else {
        answerBox.classList.add("wrong");
        answerBox.innerHTML = `${index + 1}. ${question.question} <br> Correct Answer: ${correctAnswer} <br> Your Answer: ${selectedAnswer}`;
      }
  
      correctAnswersContainer.appendChild(answerBox);
    });
  }
  
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      handleNextButton();
    } else {
      showScore();
    }
  });
  
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      handlePrevButton();
    }
  });
  
  startQuiz();