// Need to add questions here - around 4 of 5, will the questions be an array? and how do I make them on different pages?
const questions = [
    {
      question: "Commonly used data types DO NOT include:",
      options: ["Strings", "Booleans", "Alerts", "Numbers"],
      answer: 2
    },
    
    {
      question: "The condition in an if/else statement is enclosed with:",
      options: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
      answer: 2
    },
    {
      question: "String values must be enclosed within ____ when being assigned to variables.",
      options: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
      answer: 3
    },
    {
      question: "Commonly used data types DO NOT include:",
      options: ["Strings", "Booleans", "Alerts", "Numbers"],
      answer: 2
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  const startButton = document.getElementById('startButton');
  const quizContainer = document.getElementById('quizContainer');
  const questionText = document.getElementById('question');
  const optionsList = document.getElementById('options');
  const feedback = document.getElementById('feedback');
  const nextButton = document.getElementById('nextButton');
  const resultContainer = document.getElementById('resultContainer');
  const scoreDisplay = document.getElementById('score');
  const initialsInput = document.getElementById('initials');
  const submitScoreButton = document.getElementById('submitScore');
  let timerEl = document.getElementById('countdown');

  //var timerEl = document.getElementById('countdown');
  
  //const timeLeft = 75; //Declaring the total time that the user has

//This comment is for the timer- I need a variable that has time interval - look at 04-10 Stu-Timers var timeInterval = setInterval(function ()

function countdown() {

  let timeLeft = 75;

var timeInterval = setInterval(function () {
  // As long as the `timeLeft` is greater than 1
  if (timeLeft > 1) {
    // Set the `textContent` of `timerEl` to show the remaining seconds
    timerEl.textContent = timeLeft + ' seconds remaining';
    // Decrement `timeLeft` by 1
    timeLeft--; 
  } else if (timeLeft === 1) {
    // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
    timerEl.textContent = timeLeft + ' second remaining';
    timeLeft--;
  } else {
    // Once `timeLeft` gets to 0, set `timerEl` to an empty string
    timerEl.textContent = '';
    // Use `clearInterval()` to stop the timer
    clearInterval(timeInterval);
    // Call the `displayMessage()` function
    displayMessage();
  }
}, 1000);

}
//Function to start the timer
countdown();

// Function to start quiz 
  function startQuiz() {
    startButton.style.display = 'none';
    quizContainer.style.display = 'block';
    displayQuestion();
  }
  // Function to display questions and options
  function displayQuestion() {
    const current = questions[currentQuestion];
    questionText.textContent = current.question;
    optionsList.innerHTML = '';
  
    current.options.forEach((option, index) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', () => checkAnswer(index));
      li.appendChild(button);
      optionsList.appendChild(li);
    });
  }
  
  // Function to check selected answer
  function checkAnswer(index) {
    const current = questions[currentQuestion];
  
    if (index === current.answer) {
      feedback.textContent = 'Correct!';
      score++;
    } else {
      feedback.textContent = 'Wrong!';
    }
  
    feedback.style.display = 'block';
    nextButton.style.display = 'block';
    optionsList.style.pointerEvents = 'none';
  }
  
  // Function to load next question
  function nextQuestion() {
    feedback.style.display = 'none';
    nextButton.style.display = 'none';
    optionsList.style.pointerEvents = 'auto';
  
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to end the quiz
  function endQuiz() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreDisplay.textContent = score;
  }

  //Add code to get feedback on high score - need to 
  //For the local storage - look into 04-26 local storage line 33 as an example JSON.parse and line 46
  
  function initials() {
    var storedHighScores =JSON.parse(localStorage.getItem("HighScores"));

    if (storedHighScores !== null){
      HighScoress = storedHighScores;
    }
    renderHighScores();
  }
  function storeHighScores (){
    localStorage.setItem("HighScores",JSON.stringify(HighScores));
  }
  // Event listeners
  startButton.addEventListener('click', startQuiz);
  nextButton.addEventListener('click', nextQuestion);
  
  submitScoreButton.addEventListener('click', () => {
    const initials = initialsInput.value.trim();
    // Save initials and score
    console.log(`Initials: ${initials}, Score: ${score}`);
    // Add code to handle saving the score 
  });
  
  // Start quiz on page load
  displayQuestion();
  