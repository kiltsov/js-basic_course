/*

//
// 11.1. forEach
//
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

*/

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
