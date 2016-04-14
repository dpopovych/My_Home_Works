function pow(x, n) {
  var result = x;
  var result_1 = x;

  if (n==0) {
    result = 1;
  }

  if (n < 0) {
    power_minuce= -1*n;
    for (var i = 1; i < power_minuce; i++) {
    result_1 = x*x;
    result = 1 / result_1;
  }
}


  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var number = prompt("x?", '');
var power = prompt("n?", '');

console.log(pow(number, power));
