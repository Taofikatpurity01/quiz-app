//create a dummy data representing the question,option and answer
const quizData =[
    {
        question: 'what does GUI stand for?',
        options: [ "Graphical user interface", "github user interface","graphical user ink"],
        answer: "Graphical user interface"
    },
    {
        question: 'A blue wavy line in microsoftword indicate which error?',
        options: [ "contextual error", "gramatical error","spelling error"],
        answer: "contextual error"
    },
    {
        question: 'What is the tallest mountain in the world?',
        options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
        answer: 'Mount Everest',
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
        answer: 'Mars',
      },
      {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris',
      },
    {
        question: 'what is the name of the vertical lines that runs through the earth',
        options: [ "equator", "longitude","latitude"],
        answer: "equator"
    }
]
let dataView = document.querySelector(".data-view")
// console.log(dataView);

function quizApp() {

let quizArray = quizData.map((quiz)=>{
    return ` <div class="question d-flex justify-content-center ">
    <div class="right col-6 px-5 shadow gap-3">

        <h1 class="ques">
            ${quiz.question}
        </h1>
        <select name="select" id="select-item" class="w-100 py-3">
            <option value="" select-disabled> select an answer</option>
            ${quiz.options.map((Option) => {
                return `<option value=${Option}>${Option}</option>`;
            })}
           
        </select>
    </div>
    <div class="left col-6 px-5 gap-2 shadow">
        <p class="choice"> selected answer: </p>
        <p class="answer"> correct answer:</p>
        <p class="stat"> Status: </p>
    </div>
</div>`;
});

 dataView.innerHTML= quizArray.join("");
//  let select = document.querySelectorAll('select');
 let selectElement =document.querySelectorAll("select");
 selectElement.forEach((select, index) => {
    select.addEventListener("change", (event) => {
        let selectValue = event.target.value;
        // document.querySelectorAll('choice')[index]. innercontent= `selected answer: ${selectValue}`;
        // consolelog(selectValue);
        let picked = document.querySelectorAll('.choice')[index];
        picked.innerHTML=`selected answer: ${selectValue}`;
        let answer = document.querySelectorAll('.answer')[index];
        answer.innerHTML =`correct answer: ${quizData[index].answer}`;



        if (quizData[index].answer===selectValue){
            document.querySelectorAll('.stat')[index].innerHTML =`status: correct`
            // document.querySelectorAll('.stat')[index].innerHTML =`status: correct`
        }else {
            document.querySelectorAll('.stat')[index].innerHTML =`status: incorrect`

        }

    });

 });
}

quizApp()
let input = document.getElementById('.input')
function selectMe(event) {
    event.target.value
}


// function displayResult() {
//     quizContainer.style.display = 'none';
//     submitButton.style.display = 'none';
//     retryButton.style.display = 'inline-block';
//     showAnswerButton.style.display = 'inline-block';
//     resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
//   }

//   function showAnswer() {
//     quizContainer.style.display = 'none';
//     submitButton.style.display = 'none';
//     retryButton.style.display = 'inline-block';
//     showAnswerButton.style.display = 'none';
  
//     let incorrectAnswersHtml = '';
//     for (let i = 0; i < incorrectAnswers.length; i++) {
//       incorrectAnswersHtml += `
//         <p>
//           <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
//           <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
//           <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
//         </p>
//       `;
//     }
  
//     resultContainer.innerHTML = `
//       <p>You scored ${score} out of ${quizData.length}!</p>
//       <p>Incorrect Answers:</p>
//       ${incorrectAnswersHtml}
//     `;
//   }
  
//   submitButton.addEventListener('click', checkAnswer);
//   retryButton.addEventListener('click', retryQuiz);
//   showAnswerButton.addEventListener('click', showAnswer);
  
//   displayQuestion();