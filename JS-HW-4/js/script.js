var testProg = document.createElement('section');
document.body.appendChild(testProg);
testProg.innerHTML='<h1>Тест по программированию</h1>';

var testForm = document.createElement('form');
testProg.appendChild(testForm);

var testQuestion1 = document.createElement('fieldset');
testForm.appendChild(testQuestion1);
testQuestion1.innerHTML = '<legend>Вопрос №1</legend>';

var testVariants1 = document.createElement('div');
testVariants1.innerHTML = '<p><input type="checkbox" name="a" value="1"> Вариант ответа №1 </p>\
<p><input type="checkbox" name="a" value="2"> Вариант ответа №2 </p>\
<p><input type="checkbox" name="a" value="3"> Вариант ответа №3 </p>\
'
testQuestion1.appendChild(testVariants1);

var testQuestion2 = document.createElement('fieldset');
testForm.appendChild(testQuestion2);
testQuestion2.innerHTML = '<legend>Вопрос №2</legend>';

var testVariants2 = testVariants1.cloneNode(true);
testQuestion2.appendChild(testVariants2);

var testQuestion3 = document.createElement('fieldset');
testForm.appendChild(testQuestion3);
testQuestion3.innerHTML = '<legend>Вопрос №3</legend>';

var testVariants3 = testVariants1.cloneNode(true);
testQuestion3.appendChild(testVariants3);

var testCheck = document.createElement('button');
testCheck.innerHTML = 'Проверить мои результаты';
testProg.appendChild(testCheck);



console.log(document);
