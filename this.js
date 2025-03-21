'use strict';

/*

//
// 16.1. EOL для методов
//

const b = 1;

const a = {
    b,
    getB: function () {
        return this.b;
    },
    getBAlt() {
        return this.b; 
    }
};

console.log(a.getB());
console.log(a.getBAlt());

//
// 16.2. Call, apply
//

const audi = {
  make: 'Audi',
  model: 'A3',
  year: 2021,
  damages: [],
  addDamage(part, rate) {
    console.log(`У авто ${this.make} ${this.model} ${this.year} добавлено повреждение`);
    this.damages.push({
      part,
      rate,
    });
  },
};
// audi.addDamage('Капот', 1); // Переделали через call

const bmw = {
    make: 'BMW',
    model: 'X5',
    year: 2022,
    damages: [],
};

bmw.addDamage = audi.addDamage;
// bmw.addDamage('Бампер', 2); // Переделали через call

const addDamageFunc = audi.addDamage;
// addDamageFunc('Бампер', 2); // Не работает!!!

addDamageFunc.call(audi, 'Капот', 1);
addDamageFunc.call(bmw, 'Бампер', 2);

addDamageFunc.apply(audi, ['Капот', 1]); // Тоже самое, но массив обьектов
addDamageFunc.apply(bmw, ['Бампер', 2]);

//
// 16.3. Bind
//

const audi = {
    make: 'Audi',
    model: 'A3',
    year: 2021,
    damages: []
};

const carManipulation = {
    addDamage(part, rate) {
        this.damages.push({
            part,
            rate
        });
        console.log(`Добавлено повреждение на ${this.make} ${this.model}`);
    }
};

// BIND - привязать вызов функции к конкретному THIS
const addDamageAudi = carManipulation.addDamage.bind(audi);
addDamageAudi('Крыло', 10);

// Можно передать два параметра и привязать к конкретному THIS
const addDamageAudiRoof = carManipulation.addDamage.bind(audi, 'Крыша');

addDamageAudiRoof(7);
addDamageAudiRoof(4);
console.log(audi);

//
// 16.4. Упражнение - управление this
//

const user = {
    login: 'vasya@mail.com',
    password: 'jsdfjkh34usdh'
};

function removePassword(reset) {
    if (reset) {
      this.password = undefined;
    } else {
      this.password = "1";
    }
  };

const removeUserPassword = removePassword.bind(user, true);
removeUserPassword();
console.log(user);

//
// 16.5. IIFE
//

function init() {
    console.log('Приложение запущено');
};

init();

// Нужно чтобы инкапсулировать запуск функции - только один раз
(function init() {
    console.log('Приложение запущено IIFE');
    const a = 1;
})();

console.log(a); // Не можем обратиться, потому что изолирована переменная

//
// 16.6. Замыкания
//

function changeBalance() {
    let balance = 0;
    return function(sum) {
        balance += sum;
        console.log(`Баланс: ${balance}`);
    }
};

const change = changeBalance();
change(100);
change(-50);
change(200);
console.dir(change);

const change2 = changeBalance();
change2(100);
console.dir(change2);

//
// 16.7. Упражнение - работа с замыканиями
//

const userInfo = {
  balance: 0,
  operations: 0,
  increase(sum) {
    this.balance += sum;
    this.operations++;
  },
};

function user() {
    const userObj = {
        balance: 0,
        operations: 0,
        increase(sum) {
          this.balance += sum;
          this.operations++;
        },
    };
    return function() {
        return userObj;
    }
};

const user1 = user();
user1().increase(100);
user1().increase(300);
user1().increase(-200);
console.log(user1());

const user2 = user();
user2().increase(100);
console.log(user2());

*/
