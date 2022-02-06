// Задание №1  //Ввести с клавиатуры 2 числа `a` и `b` (где `a <<< b`. Символ "<<<" - означает "сильно меньше" ). //Запустить цикл перебора от `a` до `b`. Вывести в консоль квадраты чётных чисел.

// ------ Первый цикл выполняет правильность ввода a и b :) -------

let i=1;

do {
    a=+prompt('Введите число "a"'),
    b=+prompt('Введите число "b"');
    cacheIsNanA=isNaN(a); 
    cacheIsNanB=isNaN(b);
    console.log(cacheIsNanA, cacheIsNanB);
    i++;
} while (cacheIsNanA || cacheIsNanB || a>b)


for (a,b; a<b; a++) {
        if(a%2==0) {
        console.log(a**2);
        }
}

// Задание №2 
//Заставить пользователя ввести с клавиатуры число 
//(не строку и не NaN).

let i=1;

do {
    a=+prompt('Введите число');
    cacheIsNan=isNaN(a); 
    console.log(cacheIsNan);
    i++;
} while (cacheIsNan)


// Задание №3
// Проверить число на простоту. Число вводить с клавиатуры.

let a= +prompt('Введите число')
let flag = true;

for (let i=2; i<a; i++) {
    
    if (a%i==0) {
        flag= false; // не простое 
        console.log(a, 'Не простое');
    }

    if (flag) {
    console.log(a, 'Простое');
}
}

// Задание №4 Посчитать сумму простых чисел от 0 до 250.

let n = 250;
let sum = 0;

for (let i=2; i<n; i++) {
    let assumption = true;
    for (let j=2; j<i; j++) {
        if (i%j==0) {
            assumption = false;
            break;  // не подходит, выходим идем в следующую итерацию 
        }
        }
        if (assumption) {
            sum+=i;
    }
}
console.log(sum);

document.write('Сумма простых чисел от 0 до 250 =' +(sum))
