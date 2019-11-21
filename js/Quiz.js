const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const incorrectAudio = new Audio('audio/incorrect.mp3');
const backgroundAudio = new Audio('audio/background.mp3')
const questions = [
  {
    question: 'What begint with the letter A?',
    answers: [
      { text: 'a', correct: true },
      { text: 'no', correct: false },
      { text: 'you', correct: false },
      { text: 'me', correct: false }
    ]
  },
  {
    question: 'What begint with the letter B?', // hier en voor vooe die antwoorden wil ik fotos gebruiken als het kan
    answers: [
      { text: 'help', correct: false }, // hier ook een foto
      { text: 'no', correct: true },
      { text: 'you', correct: false },
      { text: 'me', correct: false }
    ]
  },
  {
    question: 'What begint with the letter C?',
    answers: [
      { text: 'help', correct: false }, // als het fout is moet het niet naar de volgende vraag gaan
      { text: 'no', correct: true },
      { text: 'you', correct: false },
      { text: 'me', correct: false }
    ]
  },
  {
    question: 'What begint with the letter D?',
    answers: [
      { text: 'help', correct: true },
      { text: 'no', correct: true },
      { text: 'you', correct: true },
      { text: 'me', correct: true }
    ]
  }
]
let shuffledQuestions, currentQuestionIndex, i

window.addEventListener('load', session())
// window.addEventListener('load', backgroundAudio.play())s



function session() {
  if (getCookie('currentQuestion') == '' || getCookie('list') == '') {
    currentQuestionIndex = 0
    startGame()
  } else {
    shuffledQuestions = JSON.parse(getCookie('list'))
    currentQuestionIndex = getCookie('currentQuestion');
    startGame()
  }
}


nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  if (currentQuestionIndex == 0) {
    shuffledQuestions = _questions.sort(() => Math.random() - .5)
  }
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  setQuizCookie()//save current quiz config in cookie
  questionElement.innerText = question.question
  // questionAudio = new Audio();
  // console.log(voice[question.question].link)
  // questionAudio.play()
  //TODO add question image + src :DONE
  Qimg = document.createElement('img')
  Qimg.classList.add('Qimg')
  // function imglink (e){
  //     return  e.letter = question.letter
  // }
  Qimg.src = letters[question.letter].link
  questionElement.appendChild(Qimg)
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    // button.innerText = answer.text
    button.classList.add('btn')


    //TODO add answers image + src :DONE
    const img = document.createElement('img')
    img.classList.add('img')
    img.src = answer.link
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    button.appendChild(img)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  console.log(selectedButton.dataset)
  //TODO Try again:DONE
  if (!correct) {
    incorrectAudio.play()
    startButton.innerText = 'Try Again'
    startButton.classList.remove('hide')
    startButton.addEventListener('click', function () {
      startButton.classList.add('hide')
      setNextQuestion()
    })
  } else {
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      resetQuizCookie()
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}



//cookie methods
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// function checkCookie() {
//   var user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//     user = prompt("Please enter your name:", "");
//     if (user != "" && user != null) {
//       setCookie("username", user, 365);
//     }
//   }
// }
//TODO save quiz config:DONE
function setQuizCookie() {
  setCookie('currentQuestion', currentQuestionIndex, 1)
  setCookie('list', JSON.stringify(shuffledQuestions), 1)
}
//TODO reset the quiz config:DONE
function resetQuizCookie() {
  setCookie('currentQuestion', '', 1)
  setCookie('list', '', 1)
}