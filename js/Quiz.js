const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const incorrectAudio = new Audio('audio/incorrect.mp3');
const correctAudio = new Audio('audio/correct.mp3');
const backgroundAudio = new Audio('audio/background.mp3')
let shuffledQuestions, currentQuestionIndex, i

window.addEventListener('load', session())
// window.addEventListener('load', backgroundAudio.play())s



function session() {
  if (getCookie('currentQuestion') == '' || getCookie('list') == '') {
    currentQuestionIndex = 0
    startGame()
  } else {
  //TODO cookie too big limit 
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
      shuffled =_questions.sort(() => Math.random() - .5) 
      //TODO maak 26 vragen tot 5
    shuffledQuestions = []
    for(i=0;i<=4;i++ ){
      shuffledQuestions[i] = shuffled[i]
    }
    
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
  //TODO cookie too big 
  questionElement.innerHTML = `<h2> ${question.question} </h2>`
  questionElement.style.textAlign = "center"

  voicelink = voice[question.question].link
  questionAudio = new Audio(voicelink)
  questionAudio.play()

  //TODO add question image + src :DONE
  Qimg = document.createElement('img')
  Qimg.classList.add('Qimg')

  Qimg.src = letters[question.letter].link
  questionElement.appendChild(Qimg)
  
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.classList.add('btn')
    button.classList.add('img')
    button.style.backgroundImage = `url(${answer.link})` 
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
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
    correctAudio.play()
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      resetQuizCookie()
      startButton.addEventListener('click', function () {
        location.reload()
      })
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

