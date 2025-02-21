/*

//
// 8.1. Знакомство с массивами
//
const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser'];
const userInfo = ['Аня', 25];
console.log(roles);
console.log(roles[0]); // первый элемент массива
console.log(roles.length); // длина массива
console.log(roles[roles.length - 1]); // последний элемент массива

// Более современный синтаксис, но не во всех браузерах
console.log(roles.at(0));
console.log(roles.at(-1));

// Более современный синтаксис обозначения массива
const userNames = new Array('Вася', 'Петя', ' Катя');
console.log(userNames);

//
// 8.2. Управление элементами массива
//
const users = ['Аня', 'Вика', 'Катя'];
console.log(users);
users[2] = 'Кристина'; // Меняем элемент массива
console.log(users);

// Добавить элемент в массив !
const arrLenght = users.push('Никита'); 
console.log(users);
console.log(arrLenght);

users.unshift('Вася');
console.log(users);

const el = users.pop(); // Удаляем последний элемент
console.log(el);
console.log(users);

const el2 = users.shift(); //  Удаляем первый элемент
console.log(el2);
console.log(users);

//
// 8.3. Поиск элемента
//
const roles = ['user', 'admin', 'manager'];

const elIndex = roles.indexOf('admin');
console.log(elIndex);
const elIndex2 = roles.indexOf('superuser'); // если нет - отрицательное значение
console.log(elIndex2);

if (roles.indexOf('admin') >= 0) {
  console.log('Доступ разрешен');
}

// Применяется чаще при проверках
console.log(roles.includes('admin')); // булевое значение
console.log(roles.includes('superuser'));

if (roles.includes('admin')) {
  console.log('Доступ разрешен');
}

//
// 8.4. Slice, splice, concat, reverse
//
const roles = ['user', 'admin', 'manager', 'superuser'];

// Один аргумент - начиная с 2 индекса и до конца массива
const res = roles.slice(2);
console.log(roles);
console.log(res);

// Два аргумента - начальный индекс и по второй, но не вклчючая!
const res2 = roles.slice(0, 2);
console.log(res2);

// Последний элемент массива (берет с конца)
const res3 = roles.slice(-1);
console.log(res3);

// ОТ первого элемента до второго с конца, но не включая его
const res4 = roles.slice(1, -2);
console.log(res4);

// Splice - модифицирует исходный массив

//
const res5 = roles.splice(2);
console.log(res5);

// Второй аргумент - длина куска. Со второго элемента взят один элемент.
const res6 = roles.splice(2, 1);
console.log(res6);

// Индекс с конца, удаляем последний элемент
const res7 = roles.splice(-1);
console.log(res7);

// Переворачивает массив
const res8 = roles.reverse();
console.log(res8);

// Обьединение массивов
const newRoles = ['sysadmin', 'developer'];
const res9 = roles.concat(newRoles);
console.log(res9);


//
// 8.5. Из строки в массив и обратно
//
const roles = ['user', 'admin', 'manager', 'superuser'];

const url = 'auth/user/login';
const res = url.split('/'); // Символ по которому будет разбивать массив
console.log(res);

const res2 = roles.join('-'); // Обьединение в массив
console.log(res2);


//
// 8.6. Упражнение - Обновление списка задач
//
const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];

// Добавление задачи
function addNewTask(task) {
  tasks.push(task);
}
addNewTask('Задача 4');
console.log(tasks);

// Удаление задачи
function removeTask(task) {
  const taskRemoveIndex = tasks.indexOf(task);
  taskRemoveIndex >= 0
    ? tasks.splice(taskRemoveIndex, 1)
    : console.log('Задача не найдена');
}
removeTask('Задача 2');
console.log(tasks);

// Приоритизация задачи
function prioritizeTask(task) {
  const taskRemoveIndex = tasks.indexOf(task); // находим индекс
  if (taskRemoveIndex === -1) {
    console.log('Задача не найдена');
    return;
  } else {
    tasks.splice(taskRemoveIndex, 1); // удаляем
  }
  tasks.unshift(task); // добавляем в начало
}
prioritizeTask('Задача 4');

// Финальный массив
console.log(tasks);

//
// 8.7. Принцип DRY
//
// Принцип не повторяться!
const tasks = ['Задача 1', 'Задача 2', 'Задача 3'];

// Добавление задачи
function Add(task) {
  tasks.push(task);
}

// Удаление задачи
function Remove(task) {
  const index = tasks.indexOf(task);
  if (index === -1) {
    return;
  }
  return tasks.splice(index, 1);
}

// Приоритизация задачи
function Prioritize(task) {
  const result = Remove(task);
  if (!result) {
    return;
  }
  tasks.unshift(result[0]);
}

Add('Задача 4');
Add('Задача 5');
console.log(tasks);
Remove('Задача 2');
console.log(tasks);
Prioritize('Задача 5');
console.log(tasks);

//
// 8.8. Деструктуризация
//
const userData = ['Антон', 30, 'Москва'];

function getData() {
  return ['Антон', 30, 'Москва'];
}

// Длинная и неудобная запись
// const userName = getData()[0];
// const age = getData()[1];
// const city = getData()[2];

// Деструктурируем массив
const [userName, _, city] = userData;

console.log(userName, city);

//
// 8.9. Rest оператор
//

const data = [1, 2, 3, 4, 5, 6, 7];

// Должен быть всегда последним
const [one, two, ...others] = data;

console.log(one, two);
console.log(others);

//
// 8.10. Упражнение - Функция разбора URL
//
const url = 'https://purpleschool.ru/course/javascript';

function getUrlParts(url) {
  const splitResult = url.split('/');
  const [protocol, _, host, ...other] = splitResult;
  const path = other.join('/');

  const message = `
  Протокол: ${protocol.replace(':', '').toUpperCase()}
  Хост: ${host} 
  Путь: ${path}`;

  splitResult.includes('https:') || splitResult.includes('http:')
    ? console.log(message)
    : console.log('Некорректный URL');
}

getUrlParts(url);

*/
