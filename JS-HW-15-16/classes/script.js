function Human() {
  this.name = 'Dima';
  this.age ='28';
  this.sex = 'male';
  this.height = 190;
  this.weight = 80;
};

function Worker(){
  this.workAt = 'Mine',
  this.salary = 500,
  this.working = function (){
    alert('I am having a fun!!!');
  };
};

function Student(){
  this.studyAt = 'Slave school';
  this.scholarship = 3;
  this.watchingSeries = function(){
    alert ('John Snow is alive!!!');
  };
};

var newHuman = new Human();
Worker.prototype = newHuman;
Student.prototype = newHuman;

var worker1 = new Worker();
var worker2 = new Worker();
var student1 = new Student();
var student2 = new Student();

console.log('worker1', worker1);
console.log('worker2', worker2);
console.log('student1', student1);
console.log('student2', student2);
