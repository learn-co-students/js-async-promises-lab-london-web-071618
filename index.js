const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question) {
 let questCont = document.querySelectorAll(".question-container")[0];
  return questCont.innerText = question.questionText
}

function askQuestionThen(time) {
  question = questions[0];
  appendQuestion(question)
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve(question);
      }, time)
    })
}

function removeQuestion() {
  let questCont = document.querySelectorAll(".question-container")[0];
  questCont.innerHTML = ""
  toggleTrueAndFalseButtons()
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(btn) {
    btn.classList.toggle("hide")
  })
}

function displayQuestionOnClick() {
  let btn = document.querySelector('.waves-effect.btn');
  btn.addEventListener("click", () => {
    toggleTrueAndFalseButtons()
    askQuestionThenRemoveQuestion(5000);
  })
}

function selectAnswer() {
  let trueBtn = trueAndFalseButtons()[0]
  let falseBtn = trueAndFalseButtons()[1]
  trueBtn.addEventListener("click", () => {
    if(answer() === true) {
      alert("CORRECT")
    } else {
      alert("INCORRECT")
    }
  });
    falseBtn.addEventListener("click", () => {
      if(answer() === false) {
        alert("CORRECT")
      } else {
        alert("INCORRECT")
      }
  })
}

function answer() {
  return questions[0].answer
}
