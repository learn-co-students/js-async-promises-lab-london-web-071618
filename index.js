const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

const appendQuestion = question => {
  const container = document.querySelector('.question-container')
  container.innerHTML = question.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve) => {
    setTimeout(function(){
      resolve(question)
    }, time)
    })
  }

const removeQuestion = () => {
  return new Promise(() => {
    const container = document.querySelector('.question-container')
    container.innerHTML = ''
  })
}

const askQuestionThenRemoveQuestion = time => askQuestionThen(time).then(removeQuestion)

const trueAndFalseButtons = () => {
  const trueFalseList = document.querySelector('.true-false-list')
  const buttons = trueFalseList.querySelectorAll('.btn')
  debugger
  return buttons
}


const toggleTrueAndFalseButtons = () => {
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle('hide')
  })
}

const displayQuestionOnClick = () => {
  const button = document.querySelector('a')
  return button.addEventListener('click', () => {
    askQuestionThenRemoveQuestion(5000)
  })
}
