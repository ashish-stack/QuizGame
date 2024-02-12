const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];



let scoreCheck = 0;
let currentQuestion = 0;

let questionEL = document.querySelector('#question');


let optionsEl = document.querySelector('#options');
let score = document.querySelector('#score');
const nextEl = document.querySelector('#next');

showQuestion();

nextEl.addEventListener("click", () =>{
  score.textContent = `Score: ${scoreCheck}`;
  nextQuestion();
});

function showQuestion(){ 
  // Destructuring the object
  const {
    correctAnswer,
    options,
    question
  } = quesJSON[currentQuestion];

  questionEL.textContent = question;

  let shuffledAnswers = shuffleOptions(options);

  // Posting the answers
  shuffledAnswers.forEach((opt) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    optionsEl.appendChild(btn);

    btn.addEventListener('click', ()=>{
      if(opt === correctAnswer){
        scoreCheck = scoreCheck+1;
      }
      else{
        scoreCheck = scoreCheck - 0.25;
      }

      score.textContent = `Score: ${scoreCheck}`;
      nextQuestion();
    });
  });
}

function nextQuestion(){
  currentQuestion++;
  optionsEl.textContent = "";
  if(currentQuestion >= quesJSON.length){
    question.textContent = "Quiz Completed!!";
    nextEl.remove();
  }
  else{
    showQuestion();
  }
}

// Shuffling options
function shuffleOptions(options){
  for(let i=options.length-1; i>=0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [options[i], options[j]] = [options[j], options[i]];

  }
  return options;
}
