/*

//
// 7.1. Введение в функции
//
function logName(name, surname) {
  console.log(`Меня зовут ${name} ${surname}`);
}
logName('Антон', 'Кильцов');

function countDepositSum(depositInUSD, month, rate) {
  return depositInUSD * (1 + rate / 12) ** month;
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);

// Можно сразу вывести в консоль
console.log(countDepositSum(1000, 24, 0.12));

//
// 7.2. Анонимные функции
//
function powerOfTwo(num) {
  return num * num;
}
console.log(powerOfTwo(5));

const poft = function (num) {
  return num * num;
};
console.log(poft(7));

//
// 7.3. Стрелочные функции
//
// Более короткая запись в одну строку
const powerTwo = (num) => num * num;
console.log(powerTwo(9));

//
// 7.4. Упражнение - Упрощение функции
//
function toPower(num, power) {
  const res = num ** power;
  return res;
}
console.log(toPower(3, 2));

const toPowerArrow = (num, power) => num ** power;
console.log(toPowerArrow(7, 2));

//
// 7.5. Параметры по умолчанию
//
function toPower2(num = 2, power = 2) {
  const res = num ** power;
  return res;
}
// Power по умолчанию 2, в функцию не передаем
console.log(toPower2(7));

//
// 7.6. Условия в функциях
//
function canAccessWebsite(age) {
  if (age < 18) {
    return 'Нет';
  }
  return 'Да';
}
console.log(canAccessWebsite(19));

// Более короткое написание
const canAccessWebsite2 = (age) => (age < 18 ? 'Нет' : 'Да');
console.log(canAccessWebsite(17));

//
// 7.7. Функции в функциях
//
const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateW(present) {
  return present * KG_IN_USD;
}

function calculateKm(distance) {
  return distance * KM_IN_USD;
}

function getExchangePrice(present1, present2, distance) {
  const price1 = calculateW(present1);
  const price2 = calculateW(present2);
  const distancePrice = calculateKm(distance);
  return price1 + price2 + distancePrice;
}
console.log(getExchangePrice(1, 2, 10));

*/

//
// 7.8. Упражнение - Кредит на MacBook
//
// Пользователь:
// Возраст
// Наличие работы
// Деньги
// Нужно проверить может ли он купить новый MacBook за 2000$?
// Он может брать не только свои деньги, но и взять кредит.
// Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$
// если ему просто больше 24-х лет и 0 в ином случае.
// Напишите функцию, которая принимает данные пользователя и товара
// и возвращает true или false.

const priceMacBookInUSD = 2000;

function creditSum(age, haveWork = false) {
  switch (true) {
    case age >= 24 && haveWork:
      return 500;
    case age >= 24:
      return 100;
    default:
      return 0;
  }
}

function canBuyMacbook(age, startMoney, haveWork = false) {
  let creditMoney = creditSum(age, haveWork);
  let finalMoney = Number(startMoney + creditMoney);
  return finalMoney >= priceMacBookInUSD ? 'Может купить' : 'Не может';
}
console.log(canBuyMacbook(24, 1500, true));

// Еще одно решение, покороче
// function credit(age, work) {
//   return age > 24 && work ? 500 : age > 24 && !work ? 100 : 0;
// }

// function canBuyMacBook(moneyInUSD, age, work) {
//   const creditSum = credit(age, work);
//   return moneyInUSD + creditSum >= priceMacBookInUSD
//     ? 'может купить'
//     : 'не может купить';
// }

// console.log(canBuyMacBook(1900, 25, false));
