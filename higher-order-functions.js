/*

//
// 10.1. Функции высшего порядка
//

// Функции высшего порядка - которые принимают или возвращают другие функции

//
// 10.2. Callback
//
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function power(a, b) {
  return a ** b;
}

// Функция высшего порядка - внутри другая функция
function calculate(a, b, fn) {
  console.log(fn.name);
  const res = fn(a, b);
  return res;
}

let res = calculate(3, 5, add);
console.log(res);
res = calculate(3, 5, subtract);
console.log(res);
res = calculate(3, 5, power);
console.log(res);

//
// 10.3. Возврат функции
//

function power(pow) {
  return function (num) {
    return num ** pow;
  };
}

const powerOfTwo = power(2);
console.log(powerOfTwo(4));
console.log(powerOfTwo(10));

const powerOfThree = power(3);
console.log(powerOfThree(4));
console.log(powerOfThree(10));

console.log(power(3)(5));

//
// 10.4. Упражнение - Стрелочные функции
//

const power = (pow) => (num) => num ** pow;

const powerOfTwo = power(2);
console.log(powerOfTwo(4));
console.log(powerOfTwo(10));

const powerOfThree = power(3);
console.log(powerOfThree(4));
console.log(powerOfThree(10));

console.log(power(3)(5));

*/
