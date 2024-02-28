const startGameButton = document.querySelector(".start-quiz")
const nextQuestionButton = document.querySelector(".next-question")
const questionsContainer = document.querySelector(".questions-container")
const questionText = document.querySelector(".question")
const answersContainer = document.querySelector(".answers-container")
const answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

startGameButton.addEventListener("click", startGame)
nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
    startGameButton.classList.add("hide")
    questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions.length === currentQuestionIndex) {
        return finishGame()
    }

    questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAsnwer = document.createElement("button")
        newAsnwer.classList.add("button", "answer")
        newAsnwer.textContent = answer.text
        if (answer.correct) {
            newAsnwer.dataset.correct = answer.correct
        }
        answersContainer.appendChild(newAsnwer)

        newAsnwer.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute("class")
    nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body
        totalCorrect++
    } else {
        document.body
    }

    document.querySelectorAll(".answer").forEach(button => {
        button.disabled = true

        if (button.dataset.correct) {
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }
    })

    nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestions = questions.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestions)

    let message = ""

    switch (true) {
        case (performance >= 90):
            message = "Uau, você é um hunter de verdade!"
            break
        case (performance >= 70):
            message = "Muito bom!"
            break
        case (performance >= 50):
            message = "Bom, mas está na hora de reassistir"
            break
        default:
            message = "Você nunca assistiu HxH? 😱"
    }

    questionsContainer.innerHTML =
        `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
    {
        question: "Qual é o nome completo do protagonista de Hunter x Hunter?",
        answers: [
            { text: "Killua Zoldyck", correct: false },
            { text: "Kurapika Kurta", correct: false },
            { text: "Gon Freecss", correct: true },
            { text: "Leorio Paradinight", correct: false }
        ]
    },
    {
        question: "Qual é o nome da técnica especial de Nen usada por Gon Freecss em sua luta contra Hisoka na Torre Celestial?",
        answers: [
            { text: "Jajanken", correct: true },
            { text: "Ryu", correct: false },
            { text: "Ken", correct: false },
            { text: "Gyo", correct: false }
        ]
    },
    {
        question: 'Qual é a habilidade especial de Kurapika que ele desenvolveu para enfrentar os membros da Tropa Fantasma?',
        answers: [
            { text: "Conjuração", correct: true },
            { text: "Manipulação", correct: false },
            { text: "Emissão", correct: false },
            { text: "Especialização", correct: false }
        ]
    },
    {
        question: 'Quem é o líder da Tropa Fantasma?',
        answers: [
            { text: "Hisoka Morow", correct: false },
            { text: "Chrollo Lucilfer", correct: true },
            { text: "Illumi Zoldyck", correct: false },
            { text: "Feitan Portor", correct: false },
        ]
    },
    {
        question: 'Qual é a habilidade de Nen de Hisoka que lhe permite manipular cartas?',
        answers: [
            { text: "Texture Surprise", correct: false },
            { text: "Bungee Gum", correct: true },
            { text: "Sun and Moon", correct: false },
            { text: "Elastic gum", correct: false },
        ]
    },
    {
        question: 'Quem é o líder do grupo de extermínio de formigas quimera enviado pela Associação de Caçadores?',
        answers: [
            { text: "Knov", correct: false },
            { text: "Morel Mackernasey", correct: false },
            { text: "Netero", correct: true },
            { text: "Knuckle Bine", correct: false },
        ]
    },
    {
        question: 'Qual é o nome do irmão mais novo de Killua, que também é um assassino profissional?',
        answers: [
            { text: 'Milluki Zoldyck', correct: false },
            { text: 'Illumi Zoldyck', correct: false },
            { text: 'Kalluto Zoldyck', correct: true },
            { text: 'Alluka Zoldyck;', correct: false }
        ]
    },
    {
        question: 'Qual é o nome do melhor amigo de Gon, que é um Caçador experiente e anseia se tornar um médico?',
        answers: [
            { text: 'Kurapika Kurta', correct: false },
            { text: 'Leorio Paradinight', correct: true },
            { text: 'Hisoka Morow', correct: false },
            { text: 'Killua Zoldyck', correct: false }
        ]
    },
    {
        question: 'Qual é o nome da técnica de Nen especializada em fortalecer a defesa do usuário?',
        answers: [
            { text: 'Ten', correct: false },
            { text: 'Ken', correct: true },
            { text: 'Zetsu', correct: false },
            { text: 'Ren', correct: false }
        ]
    },
    {
        question: 'Qual é o nome do mestre de Wing, que ensina Nen a Gon e Killua?',
        answers: [
            { text: 'Biscuit Krueger', correct: false },
            { text: 'Zeno Zoldyck', correct: false },
            { text: 'Kastro', correct: false },
            { text: 'Kite', correct: true },
        ]
    },
]