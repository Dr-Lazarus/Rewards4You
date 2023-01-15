let questions = [
  {
    id: 1,
    question: "Which type of reward would you prefer (if it's of the same value)?",
    options: [
      "Cash",
      "Coupon",
      "Product"
    ]
  },
  {
    id: 2,
    question: "Which type of payment service would you prefer if you're getting the same reward (of the same value and reward type)?",
    options: [
      "GrabPay",
      "Revolut",
      "GPay"
    ]
  },
  {
    id: 3,
    question: "What is the type of your tier in GrabPay",
    options: [
      "Member or Silver",
      "Gold",
      "Platinum"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function () {
  show(question_count);

};

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("next-btn").addEventListener("click", next);
});

function next() {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  // if (user_answer == questions[question_count].answer) {
  //   points += 10;
  //   sessionStorage.setItem("points", points);
  // }
  // console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third] = questions[count].options;

  question.innerHTML = `
  <h2>${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
