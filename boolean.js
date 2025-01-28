/*

//
// Операторы присваивания
//
let age = 18;
age += 2;
age -= 2;
age *= 3;
age /= 2;
age++;
age--;
console.log(age);

//
// Операторы сравнения
//
const vasya = 20;
console.log(age > vasya);
console.log(age >= vasya);
console.log(age < vasya);
console.log(age <= vasya);
console.log(age == vasya);

let a;
let b;
a = b = 100 - 30; // справа - налево
console.log(a);
console.log(b);

//
//
//
// Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
// К вам приходит заказчик и предлагает заказ на 40 часов работы.
// Сейчас понедельник. Вы должны уехать через 11 дней.Выведете в консоль:
// Boolean переменную успеете ли вы взяться за работу
// Сколько вы за неё попросите?

const hourRate = 80;
const taskTime = 40;
const oneDayTimeWorked = 5;
const weekTime = 5 * oneDayTimeWorked;
const allTimeIHave = (11 - 2) * oneDayTimeWorked;

// Результат
console.log('Успею ли я выполнить заказ ' + (allTimeIHave >= taskTime));
console.log('Сколько денег взять ' + taskTime * hourRate + ' $');

//
// Шаблонные строки
//
const projectName = 'Сайт магазина';
const price = 2000;
const autor = 'Антон Кильцов';

const template = autor + ' заказал ' + projectName + ' по цене ' + price + '$';
console.log(template);

const template2 = `${autor} заказал ${projectName} по цене ${price}$`;
console.log(template2);

//
// Преобразование типов
//
console.log(Boolean(123));
console.log(Boolean('a'));
console.log(Boolean(''));

//
// 5.2. Упражнение - Размещение депозита
//
// Вася положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц.
// Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада и остаток после покупки.
// Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах

const startMoney = 12000; // стартовый капитал
const procent = 7; // процентная ставка
const targetPrice = 13500; // стоимость жилья
const totalDuration = 24; // 24 месяца
const monthlyRate = procent / 100 / 12; // процент в месяц

finalMoney = startMoney * (1 + monthlyRate) ** totalDuration;

console.log(finalMoney);

if (finalMoney > targetPrice) {
  console.log(
    `Вася cможет купить дом за ${targetPrice}$ и останется ${
      finalMoney - targetPrice
    }$`
  );
} else {
  console.log(
    `Вася НЕ cможет купить дом за ${targetPrice}$ потому что не хватает ${
      targetPrice - finalMoney
    }$`
  );
}

//
// 5.3. Операторы равенства
//
const secretNumber = Number(prompt('Угадайте число'));

if (Number(secretNumber) == 8) {
  console.log('Угадал не строго');
} else {
  console.log('Не угадал не строго');
}

if (Number(secretNumber) === 8) {
  console.log('Угадал строго');
} else {
  console.log('Не угадал строго');
}

//
// 5.4. Switch
//
const role = 'manager';

switch (role) {
  case 'manager':
    console.log('Менеджер');
    break;
  case 'admin':
    console.log('Админ');
    break;
  case 'ceo':
    console.log('CEO');
    break;
  default:
    console.log('Мы тебя не знаем!');
}

const num = 1;

switch (true) {
  case num > 0:
    console.log('Положительный результат');
    break;
  case num < 0:
    console.log('Отрицательный результат');
    break;
  default:
    console.log('Ноль');
}

//
// 5.5. Тернарные операторы
//
const bmwPrice = 20000;
const budget = 10000;

console.log(`Я могу купить ${budget > bmwPrice ? 'BMW' : 'Велосипед'}`);


//
// 5.6. Упражнение - Проверка робота
//
// Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?".
// Если ответ верен, выведите в консоли "Успех", если нет - "Вы робот!".
// А если он введёт "Я не робот", то тоже "Успех".

const result = prompt('Сколько будет 7 + или - 15?');

switch (true) {
  case Number(result) === 22:
  case Number(result) === -8:
  case result === 'Я не робот':
    console.log('Успех');
    break;
  default:
    console.log('Вы робот!');
}

// Второе решение

result === 'Я не робот'
  ? console.log('Успех!')
  : Number(result) === 7 + 15 || Number(result) === 7 - 15
  ? console.log('Успех!')
  : console.log('Вы робот!');

//
// 6.3. Операторы с другими типами
//
console.log('Вася' || 'Олег');
console.log(false || 'Олег');
console.log('Вася' || false);
console.log(false || false);

console.log('Вася' && 'Олег');
console.log(false && 'Олег');
console.log('Вася' && false);
console.log(false && false);

let a = 'Марина';
const username = a || 'Петя';
console.log(username);

const isAdmin = true;
const filename = isAdmin;

//
// 6.4. Оператор нулевого слияния
//
let age = 0;
console.log(age || 18);
console.log(age ?? 18); // для нулевых значений

//
// 6.5. Упражнение - Проверка прав
//
// Определить, может ли пользователь купить игру в интернет-магазине (например, Steam)
// на основании четырех условий.
// Баланс пользователя более 1000 рублей или более 100 бонусов.
// Пользователь не забанен в магазине.
// Игра не куплена ранее пользователем.
// Игра доступна в продаже.

let balance = 0;
let bonusBalance = 1;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy =
  (balance >= 1000 || bonusBalance >= 100) &&
  !isBanned &&
  !isExist &&
  isSelling;

console.log(`Могу купить игру: ${canBuy ? 'Да' : 'Нет'}`);

*/
