'use strict';

var subtitle = "Тест з програмування";
var questions=[
{
    text: "За допомогою якого атрибуту тегу <img> вказують місце знаходження зображення:",
    answers: ["'src'",
          "'shlyakh'",
          "'istochnik'"],
    correctAnswer: 0
},
{
    text: "Яким чином зміниться текст, розташований в між тегам <b></b>:",
    answers: ["не зміниться",
          "стане 'жирним'",
          "буде замінений шаблонізатором"],
    correctAnswer: 1
},
{
    text: "Творці ІЕ в минуломи житті були:",
    answers: ["інквізиторами",
          "равликами",
          "у них не було минулих життів"],
    correctAnswer: 1
}
];

 localStorage.setItem('test',JSON.stringify(questions));
 var myTest = localStorage.getItem('test');

var objTest = JSON.parse(myTest);

var yourAns = new Array;
var score = 0;
function Engine(question, answer) {yourAns[question]=answer;}


function Score(){

   var answerText = " ";
   for (var i = 0; i < yourAns.length; ++i){
     var num = i + 1;
    answerText = answerText + "\n    Питання №"+ num + "";
    if(yourAns[i] != objTest[i].correctAnswer){
        answerText = answerText + "\n    Вірна відповідь: " +
        objTest[i].answers[objTest[i].correctAnswer];
      } else {
        answerText = answerText + ": Вірно!\n";
        ++score;
        }
       }
   answerText = answerText + "\n Всього правильних відповідей: " + score + "";

  var element = document.createElement('div');
  element.id = 'box';
  element.innerHTML = answerText;
  var modalContent = document.querySelector('.modal_content');
  modalContent.appendChild(element);
     yourAns = [];
     score = 0;
     clearForm("quiz");
}

function clearForm(name) {
   var f = document.forms[name];
   for(var i = 0; i < f.elements.length; ++i) {
    if(f.elements[i].checked)
        f.elements[i].checked = false;
        }
}
