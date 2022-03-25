const quizData = [
  {
    question: "How old are you?",
    a: "10",
    b: "15",
    c: "18",
    d: "20",
    ans: "d",
  },
  {
    question: "How are you feeling?",
    a: "fine",
    b: "good",
    c: "happy",
    d: "lucky",
    ans: "c",
  },
  {
    question: "What you going to do?",
    a: "dance",
    b: "run",
    c: "gym",
    d: "walk",
    ans: "b",
  },
  {
    question: "Favourite Language?",
    a: "C",
    b: "JS",
    c: "Java",
    d: "Python",
    ans: "b",
  },
  {
    question: "Where are you from?",
    a: "India",
    b: "USA",
    c: "Cananda",
    d: "Dubai",
    ans: "d",
  },
];

const ques = document.getElementById("question");
const opt_a = document.getElementById("opt_a");
const opt_b = document.getElementById("opt_b");
const opt_c = document.getElementById("opt_c");
const opt_d = document.getElementById("opt_d");
const answerEles = document.querySelectorAll("answers");
const submit = document.getElementById("submit");
let currentQues = 0;
let score = 0;

console.log(answerEles);
loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQues];
  ques.innerText = currentQuizData.question;
  opt_a.innerText = currentQuizData.a;
  opt_b.innerText = currentQuizData.b;
  opt_c.innerText = currentQuizData.c;
  opt_d.innerText = currentQuizData.d;
}

function getSelected(){
    // let answerEle = undefined;
    // answerEles.forEach((answerEle) =>{
    //     if(answerEle.checked)
    // })

}
submit.addEventListener("click", () => {
  currentQues++;
  if (currentQues < quizData.length) {
    loadQuiz();
  } else {
    alert("You finished the quiz. Kuddos!!");
  }
});