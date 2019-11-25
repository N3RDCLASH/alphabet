quiz = document.getElementById('quiz')
game = document.getElementById('game')
button = document.createElement('button')
quiz.appendChild(button)
game.appendChild(button)




function show(){
button.classList.remove('hide')
}

function hide(){
button.classList.add('hide')
}