var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "What does HTML stand for?",
    choices: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Hyper Time Money Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    title: "Who is making the Web standards?",
    choices: ["The World Wide Web Consortium", "Microsoft", "Apple", "Google"],
    answer: "The World Wide Web Consortium"
  },
  {
    title: "Which is the correct HTML element for the largest heading:",
    choices: ["heading", "h6", "h1", "head"],
    answer: "h1"
  }
];

var current = 0;
var score = 0;

  //setting start button to display questions when clicked.
  $('#start').on('click', function() {
    $('.dissapear').hide();
    getQuestions()  
  })
  
  // Display questions and choices.
  function getQuestions() {
      var title = questions[current].title;
      var choices = questions[current].choices;

      $('#game').html(`<h4>${title}</h4>
      ${getChoices(choices)}
      `);
  }

  //Get choices from the array
  function getChoices(choices) {
      var result = '';

      for (var i = 0; i < choices.length; i++) 
      {
          result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
      }

      return result;
  }

  //Next question when user input is entered.
  $(document).on('click', '.choice', function() {
      var selectedAnswer = $(this).attr('data-answer');
      var correctAnswer = questions[current].answer;

      if (correctAnswer === selectedAnswer) 
      {
          score++;
          nextQuestion();
      }
      else 
      {
          nextQuestion()
      }
  })

  //Next question when the user response is recorded
  function nextQuestion() {
    var isGameOver = (questions.length - 1) === current;
    if (isGameOver) 
    {
        displayResult();
    }
    
    else 
    {
        current++;
        getQuestions();
    }
}

  //Display the results from the game  
  function displayResult() {
      
    var quizOver = `<p>Quiz Over!</p>
      <p>You got ${score} out of 5 questions correct</p>
      <button class='btn btn-primary' id='reset'>Reset Quiz</button>`;

      $('#game').html(quizOver);
  }
  
  //Activate the reset game button
  $(document).on('click', '#reset', function () {
    score = 0;
    current = 0;

    getQuestions()
  })

  //Set the local storage to hold the score and user name
  localStorage.setItem('score', score)