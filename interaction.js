/*

//
// 11.1. forEach
//

Метод forEach() выполняет указанную функцию один раз 
//для каждого элемента в массиве.

const scope = [1, 5, 8, 12]; //  Очки команды

for (const [i, el] of scope.entries()) {
  console.log(`Раунд ${i + 1}: ${el}`);
}

console.log('------------------------------------');

// Тоже самое через forEach
scope.forEach((scoreEl, i, arr) => {
  console.log(`Раунд ${i + 1}: ${scoreEl}`);
});

//
// 11.2. map
//

// Метод map() создаёт новый массив с результатом вызова указанной функции 
// для каждого элемента массива.

const transactionInUSD = [10, -7, 50, -10, 100];

const transactionInRUB = [];
for (const transaction of transactionInUSD) {
  transactionInRUB.push(transaction * 89);
}

// console.log(transactionInUSD);
// console.log(transactionInRUB);

const transactionInRUB2 = transactionInUSD.map((transaction, i) => {
  console.log(i);
  return transaction * 89;
});

console.log(transactionInUSD);
console.log(transactionInRUB);

//
// 11.3. filter
//

const operations = [100, -20, 7, -20, 50];

// const positiveOperations = [];
// for (const operation of operations) {
//   if (operation > 0) {
//     positiveOperations.push(operation);
//   }
// }
// console.log(positiveOperations);

const positiveOperations = operations.filter((operation) => {
  return operation > 0;
});
console.log(positiveOperations);

const positiveRUBOperations = operations
  .filter((operation) => {
	return operation > 0;
  })
  .map((operation) => operation * 60);
console.log(positiveRUBOperations);

//
// 11.4. Упражнение - вывод изменений цен
//

// Массив цен - первая в момент X, вторая - в момент Y.
// Нужно оставить только те, что подорожали.

const prices = [
  [100, 200],
  [120, 100],
  [200, 350],
  [400, 350],
  [200, 250],
];

// Мое решение
const deltaPositivePrices = prices
  .filter((price) => price[1] - price[0] > 0)
  .map((price) => price[1] - price[0]);

console.log(deltaPositivePrices);

// Решение Антона
const result = prices
  .map((product) => product[1] - product[0])
  .filter((price) => price > 0);
console.log(result);


//
// 11.5. reduce
//

// Сужение массива до конкретного значения
// Метод reduce() применяет функцию reducer к каждому элементу массива
// (слева-направо), возвращая одно результирующее значение.

const operations = [100, -20, 7, -30, 50];

// // Можно сделать через For
// let balance = 0;
// for (const operation of operations) {
//   balance += operation;
// }
// console.log(balance);

// Тоже самое через Reduce
const finalBalance = operations.reduce((acc, operation, i) => {
  console.log(`Итерация ${i}, acc ${acc}, operation ${operation}`);
  return (acc += operation);
}, 0);

console.log(finalBalance);

// Вывод минимального элемента
const minElement = operations.reduce((acc, operation) => {
  if (operation > acc) {
    return acc;
  } else {
    return operation;
  }
}, 0);

console.log(minElement);

//
// 11.6. Упражнение - среднее значение
//

const arr = [1, 4, 4, 10];

const avg = arr.reduce((acc, value, i) => {
  // Если это не последний элемент - складываем
  if (i != arr.length - 1) {
    return acc + value;
    // Если это последний - возвращаем среднее
  } else {
    return (acc + value) / arr.length;
  }
}, 0);

console.log(avg);

// Более короткая запись
const avg2 = arr.reduce((acc, value) => acc + value, 0) / arr.length;

console.log(avg2);

//
// 11.7. find и findIndex
//

const arr = [2, 4, 4, 10, 20];

let elGT5;
for (const el of arr) {
  if (el > 5) {
    elGT5 = el;
    break;
  }
}
console.log(elGT5);

elGT5 = arr.find((el) => el > 5); // элемент
elGT5Index = arr.findIndex((el) => el < 0); // индекс элемента

console.log(elGT5);
console.log(elGT5Index); // если такого элемента нет - вернет -1

//
// 11.8. Упражнение - реализация some
//

// Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию,
// заданному в передаваемой функции.

const arr = [2, 4, 4, 10, 20];

function some(array, element) {
  const res = array.find((el) => el === element);
  return res == undefined ? false : true;
}
console.log(some(arr, 2));

// Тоже самое через метод Some
console.log(arr.some((el) => el === 2));

//
// 11.9. flat и flatMap
//

// Метод flat() экземпляров Array возвращает новый массив,
// в котором все элементы вложенных подмассивов рекурсивно "подняты" на указанный уровень.

const prices = [
  [100, 200],
  [120, 100],
  [200, 350],
  [400, 350],
  [200, 250],
];

// Делает массив плоским
const res = prices.flat();
const resInf = prices.flat(Infinity); // делает с любой вложенностью
// Последовательное применение map а потом flat
const res2 = prices.flatMap((el) => el.concat([['строка']]));

console.log(res);
console.log(res2);
console.log(resInf);

//
// 11.10. sort
//

const users = ['Вася', 'Маша', 'Катя', 'Аня'];
console.log(users);
users.sort(); // Отсортирует просто строки
console.log(users);

const operation = [100, -300, -100, 50, 480];
console.log(operation);
operation.sort();
console.log(operation);

// Сортировка по возрастанию
operation.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
});
console.log(operation);

// Сортировка по убыванию
operation.sort((a, b) => {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
});
console.log(operation);

// Сортировка по возрастанию - более короткая запись
operation.sort((a, b) => a - b);
console.log(operation);

// Сортировка по убыванию - более короткая запись
operation.sort((a, b) => b - a);
console.log(operation);

//
// 11.11. Быстрое создание массивов
//

const arr = [1, 2, 3, 4, 5];

console.log(new Array(1, 2, 3, 4, 5));
const arr2 = new Array(5);
console.log(arr2);

arr2.fill(1, 0, 3);
arr2.fill(2, 3, 5);
console.log(arr2);

// Создать и заполнить массив по порядку числами
const arr3 = Array.from({ length: 10 }, (cur, i) => i + 1);
console.log(arr3);

*/
