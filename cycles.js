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

*/

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
