/*

//
// 9.1. Цикл for
//

for (let i = 1; i < 10; i++) {
  console.log(`Ваш баланс ${i}$`);
}

//
// 9.2. Break и continue
//

const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];

for (let i = 0; i < tasks.length; i++) {
  if (tasks[i] === 'Задача 2') {
    continue; // пропускает элемент в цикле
  }
  console.log(tasks[i]);
}

console.log('------------------------------------');

for (let i = 0; i < tasks.length; i++) {
  if (tasks[i] === 'Задача 2') {
    break; // прекращает цикл
  }
  console.log(tasks[i]);
}

//
// 9.3. Упражнение - Цикл в обратном порядке
//

const arr = ['!', 'JS', 'люблю', 'Я'];
const resultArray = [];

for (let i = arr.length - 1; i >= 0; i--) {
  resultArray.push(arr[i]);
}

console.log(resultArray.join(' '));
console.log(arr.reverse().join(' ')); // тоже самое без цикла


//
// 9.4. Цикл в цикле
//

// for (let i = 1; i < 5; i++) {
//   console.log(`Цикл 1 - ${i}`);
//   for (let j = 1; j < 5; j++) {
//     console.log(`Цикл 2 - ${j}`);
//   }
// }

const tasks = [
  [1, 'Задача 1'],
  [2, 'Задача 2'],
];

for (let i = 0; i < tasks.length; i++) {
  for (let j = 0; j < tasks[i].length; j++) {
    console.log(tasks[i][j]);
  }
}


//
// 9.5. Цикл while - до тех пор, пока
//

for (let i = 1; i <= 5; i++) {
  console.log(`Вывод - ${i}`);
}

console.log('------------------------------------');

// Тоже самое через While
let i = 1;
while (i <= 5) {
  console.log(`Вывод - ${i}`);
  i++;
}

console.log('------- Пример с массивом -----------');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (i = 0; i < arr.length; i++) {
  if (arr[i] > 5) {
    break;
  }
  console.log(`Элемент массива - ${arr[i]}`);
}

console.log('------- Тоже самое через While ------');

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let y = 0;
while (arr2[y] <= 5 && y < arr2.length) {
  console.log(`Элемент массива - ${arr2[y]}`);
  y++;
}

console.log('-------- Пример Do - While ----------');

// Do - While всегда один будет исполняться. Проверка после выполнения.
// Всегда выполниться один раз
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let j = 0;
do {
  console.log(`Элемент массива - ${arr3[j]}`);
  j++;
} while (j < 0);

//
// 9.6. Циклы for of и for in
//

const arr = [1, 2, 3, 'четыре', 5, 6, 7, 'восемь', 9];

for (let i = 0; i < arr.length; i++) {
  console.log(`Элемент - ${arr[i]}`);
}

console.log('------------------------------------');

// Выводит элементы
for (element of arr) {
  console.log(element);
}

console.log('------------------------------------');

// Выводит индексы элементов
for (index in arr) {
  console.log(index);
}


//
// 9.7. Упражнение - Расчёт итогового баланса
//

const startBalance = 100;
const operations = [1000, -900, 300, 400, -300, -500, 900, 10800];

// Расчёт итогового баланса
function getBalance(startBalance, operation) {
  let balance = startBalance;
  for (const element of operation) {
    balance += element;
  }
  return balance;
}

// Проверка на наличие отрицательного баланса
function checkOperations(startBalance, operations) {
  let balance = startBalance;
  let flag = true;

  for (const element of operations) {
    balance += element;
    if (balance < 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

// Расчёт средних значений
function averageOperations(operations) {
  let positiveCount = 0;
  let positiveSum = 0;
  let negativeCount = 0;
  let negativeSum = 0;

  for (const element of operations) {
    if (element > 0) {
      positiveCount++;
      positiveSum += element;
    }

    if (element < 0) {
      negativeCount++;
      negativeSum += element;
    }
  }

  return [positiveSum / positiveCount, negativeSum / negativeCount];
}

console.log(getBalance(startBalance, operations));
console.log(checkOperations(startBalance, operations));
console.log(averageOperations(operations));

// Мой вариант, но получилось сложно

// // Расчёт итогового баланса
// const getBalance = operations.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   startBalance
// );

// // Проверка на наличие отрицательного баланса
// function checkOperations(startBalance, operations) {
//   let currentBalance = startBalance;

//   for (const operation of operations) {
//     currentBalance += operation;
//     console.log(
//       `Операция: ${operation}, Текущий баланс: ${currentBalance}, ${
//         currentBalance >= 0 ? 'Баланс положительный' : 'Баланс отрицательный'
//       }`
//     );
//   }
// }

// // Расчёт средних значений
// function averageOperations(operations) {
//   let negativeBalance = operations.filter((op) => op < 0);
//   let positiveBalance = operations.filter((op) => op > 0);

//   let averageNegative =
//     negativeBalance.length > 0
//       ? negativeBalance.reduce((sum, op) => sum + op, 0) /
//         negativeBalance.length
//       : 0;

//   let averagePositive =
//     positiveBalance.length > 0
//       ? positiveBalance.reduce((sum, op) => sum + op, 0) /
//         positiveBalance.length
//       : 0;

//   console.log(`СРЕДНИЙ РАСХОД: ${averageNegative.toFixed(2)}`);
//   console.log(`СРЕДНИЙ ДОХОД: ${averagePositive.toFixed(2)}`);
// }

// checkOperations(startBalance, operations);
// averageOperations(operations);
// console.log(`ИТОГОВЫЙ БАЛАНС: ${getBalance}`);

*/
