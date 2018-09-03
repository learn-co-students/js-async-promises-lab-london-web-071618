const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]


let question;

function appendQuestion(question) {
  document.querySelector('div.question-container').innerText = question['questionText'];
}


function askQuestionThen(time) {
  question = questions[0]
  return new Promise(function(resolve, reject) {
    setTimeout(resolve(appendQuestion(question)), time)
  })
}

function removeQuestion() {
  document.querySelector('div.question-container').innerText = '';
}

function askQuestionThenRemoveQuestion() {
  return new Promise(function(resolve, reject) {
    resolve(askQuestionThen(10000));
  }).then(removeQuestion)
}

function trueAndFalseButtons() {
  let docElements = document.querySelector('div.true-false-list').children
  return Array.prototype.slice.call( docElements )
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function(element) {
    let arrClasses = element.classList
    if (Array.prototype.slice.call( arrClasses ).includes("hide")) {
      element.classList.remove("hide")
    } else {
      element.classList.add("hide")
    }
  })
}

function addQuestionAndButtons() {
  askQuestionThen(5000).then(toggleTrueAndFalseButtons);
}

function removeQuestionAndButtons() {
  removeQuestion();
  toggleTrueAndFalseButtons();
}

function displayQuestionOnClick() {
  function fireQuestion() {
    return new Promise(function(resolve, reject) {
      resolve(addQuestionAndButtons)
    }).then(removeQuestionAndButtons)
  }
  document.querySelector('a.waves-light').addEventListener("click", fireQuestion);

}
