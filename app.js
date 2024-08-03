const quizData = [
    {
      question: "What does GUI stand for?",
      options: ["Graphical user interface", "Github user interface", "Graphical user ink"],
      answer: "Graphical user interface",
    },
    {
      question: "A blue wavy line in Microsoft Word indicates which error?",
      options: ["Contextual error", "Grammatical error", "Spelling error"],
      answer: "Contextual error",
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
      answer: "Mount Everest",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Mercury", "Uranus"],
      answer: "Mars",
    },
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
        question: 'What is the largest species of shark?',
        options: [
          'Great White Shark',
          'Whale Shark',
          'Tiger Shark',
          'Hammerhead Shark',
        ],
        answer: 'Whale Shark',
      },
    {
        question: 'How many time zones are there in Russia?',
        options: [
            '12',
            '9',
            '15',
            '11',
          ],
          answer: '11',
    },
    {
        question: 'When was Netflix founded?',
        options: [
            '1997',
            '2001',
            '2009',
            '1015',
          ],
          answer: '1997',
    },
    {
        question: 'Which of the following empires had no written language? ',
        options: [
            'incan',
            'aztec',
            'Egyptian',
            ' Roman',
          ],
          answer: 'Incan',
    },
    {
      question: "What is the name of the vertical lines that run through the earth?",
      options: ["Equator", "Longitude", "Latitude"],
      answer: "Equator",
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  const dataView = document.querySelector(".data-view");
  
//   Loading the question with the next button
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    dataView.innerHTML = `
      <div class="question d-flex flex-column justify-content-center">
        <div class="right col-5 py-5 px-5 shadow gap-3">
          <h1 class="ques">${currentQuestion.question}</h1>
          <select name="select" id="select-item" class="w-100 py-3">
            <option value="" disabled selected>Select an answer</option>
            ${currentQuestion.options.map(option => `<option value="${option}">${option}</option>`).join('')}
          </select>
        </div>
        <div class="left col-5 py-4 px-4 gap-2 shadow">
          <p class="choice">Selected answer: </p>
          <p class="answer">Correct answer: </p>
          <p class="stat">Status: </p>
        </div>
      </div>
      <button id="next" class="btn btn-primary d-none">Next Question</button>
    `;
  
    const selectElement = document.querySelector("#select-item");
    selectElement.addEventListener("change", checkAnswer);
    document.getElementById('next').addEventListener('click', nextQuestion);
  }
  
  function checkAnswer(event) {
    const selectedOption = event.target.value;
    const currentQuestion = quizData[currentQuestionIndex];
  
    let status = 'Incorrect';
    if (selectedOption === currentQuestion.answer) {
      score++;
      status = 'Correct';
    }
  
    document.querySelector('.choice').innerText = `Selected answer: ${selectedOption}`;
    document.querySelector('.answer').innerText = `Correct answer: ${currentQuestion.answer}`;
    document.querySelector('.stat').innerText = `Status: ${status}`;
  
    document.getElementById('next').classList.remove('d-none');
  }
  
//   Next question function
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showFinalResult();
    }
  }
  
//   Final result function
  function showFinalResult() {
    dataView.innerHTML = `<h2 class='final-result'>Your final score is ${score}/${quizData.length}</h2>`;
  }
  
  document.addEventListener('DOMContentLoaded', loadQuestion);
  



// //create a dummy data representing the question,option and answer
// const quizData =[
//     {
//         question: 'what does GUI stand for?',
//         options: [ "Graphical user interface", "github user interface","graphical user ink"],
//         answer: "Graphical user interface"
//     },
//     {
//         question: 'A blue wavy line in microsoftword indicate which error?',
//         options: [ "contextual error", "gramatical error","spelling error"],
//         answer: "contextual error"
//     },
//     {
//         question: 'What is the tallest mountain in the world?',
//         options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
//         answer: 'Mount Everest',
//       },
//       {
//         question: 'Which planet is known as the Red Planet?',
//         options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
//         answer: 'Mars',
//       },
//       {
//         question: 'What is the capital of France?',
//         options: ['Paris', 'London', 'Berlin', 'Madrid'],
//         answer: 'Paris',
//       },
//     {
//         question: 'what is the name of the vertical lines that runs through the earth',
//         options: [ "equator", "longitude","latitude"],
//         answer: "equator"
//     }
// ]
// let dataView = document.querySelector(".data-view")
// // console.log(dataView);

// function quizApp() {

// let quizArray = quizData.map((quiz)=>{
//     return ` <div class="question d-flex justify-content-center ">
//     <div class="right col-6 px-5 shadow gap-3">

//         <h1 class="ques">
//             ${quiz.question}
//         </h1>
//         <select name="select" id="select-item" class="w-100 py-3">
//             <option value="" select-disabled> select an answer</option>
//             ${quiz.options.map((Option) => {
//                 return `<option value=${Option}>${Option}</option>`;
//             })}
           
//         </select>
//     </div>
//     <div class="left col-6 px-5 gap-2 shadow">
//         <p class="choice"> selected answer: </p>
//         <p class="answer"> correct answer:</p>
//         <p class="stat"> Status: </p>
//          <div id="result" class="result"></div>
//          <button id="retry" class="button hide">Retry</button>
//     <button id="showAnswer" class="button hide">Show Answer</button>
//     </div>
// </div>`;
// });

//  dataView.innerHTML= quizArray.join("");
// //  let select = document.querySelectorAll('select');
//  let selectElement =document.querySelectorAll("select");
//  selectElement.forEach((select, index) => {
//     select.addEventListener("change", (event) => {
//         let selectValue = event.target.value;
//         // document.querySelectorAll('choice')[index]. innercontent= `selected answer: ${selectValue}`;
//         // consolelog(selectValue);
//         let picked = document.querySelectorAll('.choice')[index];
//         picked.innerHTML=`selected answer: ${selectValue}`;
//         let answer = document.querySelectorAll('.answer')[index];
//         answer.innerHTML =`correct answer: ${quizData[index].answer}`;



//         if (quizData[index].answer===selectValue){
//             document.querySelectorAll('.stat')[index].innerHTML =`status: correct`
//             // document.querySelectorAll('.stat')[index].innerHTML =`status: correct`
//         }else {
//             document.querySelectorAll('.stat')[index].innerHTML =`status: incorrect`

//         }

//     });

//  });
// }

// quizApp()
// let input = document.getElementById('.input')
// function selectMe(event) {
//     event.target.value
// }