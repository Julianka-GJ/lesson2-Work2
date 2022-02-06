"use strict";

var n = 250;
var sum = 0;

for (var i = 2; i < n; i++) {
  var assumption = true;

  for (var j = 2; j < i; j++) {
    if (i % j == 0) {
      assumption = false;
      break; // не подходит, выходим идем в следующую итерацию 
    }
  }

  if (assumption) {
    sum += i;
  }
}

console.log(sum);
document.write('Сумма простых чисел от 0 до 250 =' + sum);