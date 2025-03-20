/*

//
// 13.1. Знакомство с объектами
//

const user = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 33,
    skills: [
        'Программирование',
        'Кулинария'
    ],
    1: 2
};
console.log(user);

//
// 13.2. Обращение к элементам
//

const user = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 33,
    skills: [
        'Программирование',
        'Кулинария'
    ],
     eduBasic: 'Школа 10',
    eduPro: 'МФТИ'
};

console.log(user);
console.log(user.skills[0]);
console.log(user.skills);

console.log(user['skills']); // Вычисляемое значение
const level = 'Pro';
console.log(user['edu' + level]) // Вычислили значение

// const res = prompt('Введите свойство');
// console.log(user[res]);

user.city = 'Москва'; // Присвоили новое свойство
user['city'] = 'Москва'; // Присвоили новое свойство
console.log(user);

user.age = 56; // Поменяли значение
user['age'] = 56;
console.log(user);

//
// 13.3. Упражнение - сортировка пользователей
//

const users = [  
    { name: 'Вася', age: 30 },  
    { name: 'Катя', age: 18 },  
    { name: 'Аня', age: 40 },  
    { name: 'Петя', age: 25 }
];

const sortAge = [...users].sort((a, b) => a.age - b.age);

const sortNames = [...users].sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
});

console.log(sortAge);
console.log(sortNames);

//
// 13.4. Упражнение - преобразование объектов
//


const users = [
    { 
        name: 'Вася', 
        surname: 'Пупкин', 
        age: 30, 
        skills: ['Разработка', 'DevOps'] 
    },
    { 
        name: 'Катя', 
        age: 18, 
        surname: 'Белова', 
        skills: ['Дизайн'] },
];

const res = users.map(user => {
    return {
        fullname: user.name + ' ' + user.surname,
        skillsNum: user.skills.length
    }
});

console.log(res);

//
// 13.5. Методы объектов
//

const user = {
    name: 'Вася', 
    surname: 'Пупкин', 
    age: 30,
    getFullName: function() {
        return this.name + ' ' + this.surname; // THIS
    }
};

console.log(user);
console.log(user.getFullName());

//
// 13.6. Упражнение - кошелёк
//

const wallet = {
  balance: 0,
  operations: [],
  increase: function (sum, reason) {
    this.balance += sum;
    this.operations.push({
      reason: reason,
      sum: sum,
    });
    return true;
  },
  decrease: function (sum, reason) {
    if (this.balance < sum) {
      console.log('Недостаточно денег');
      return false;
    }
    this.balance -= sum;
    this.operations.push({
      reason: reason,
      sum: -sum,
    });
    return true;
  },
  getOperationLenght: function () {
    return this.operations.length;
  },
};

console.log(wallet.increase(1000, 'Зарплата'));
console.log(wallet.getOperationLenght());
console.log(wallet.decrease(2000, 'Покупка ноутбука'));
console.log(wallet.getOperationLenght());
console.log(wallet.decrease(500, 'Покупка телефона'));
console.log(wallet.getOperationLenght());
console.log(wallet.balance);
console.log(wallet.operations);

//
// 3.7. Enhance object literals
//

const initialBalance = 7;

const wallet = {
    balance: initialBalance, // Начальное значение
    operations: [],
}

// Если название переменной совпадает с названием ключа, то можно писать короче

const balance2 = 7;

const wallet2 = {
    balance2, // Начальное значение - короткое
    operations: [],
}

//
// 13.8. Итерирование по объекту
//

const cities = {
    msk: {
        lt: 200,
        temp: 35
    },
    spb: {
        lt: 100,
        temp: 30
    }
}

let sumTemp = 0;
let citiesCount = 0;
for (const key in cities) {
    citiesCount++;
    sumTemp += cities[key].temp;
}
console.log('Средняя температура');
console.log(sumTemp / citiesCount);

// Второй способ с Object Keys
let sumTemp2 = 0;
let citiesCount2 = Object.keys(cities).length;

for (const key of Object.keys(cities)) {
    sumTemp2 += cities[key].temp;
}
console.log('Средняя температура через Обжект');
console.log(sumTemp2 / citiesCount2);

//
// 13.9. Деструктуризация и rest
//

let user = {
    name: 'Вася',
    age: 40,
    city: 'Moscow'
};

const { age, ...userWithoutAge } = user;
console.log(age);
console.log(userWithoutAge);

const additionalData = {
    skills: ['Разработка', 'Дизайн'],
    creditCard: '2345-2345-7853-3836'
};

user = {
    ...user,
    ...additionalData
};
console.log(user);

//
// 13.10. Optional chaining
//

const cities = {
    msk: {
        temp: {
            celsius: 25,
            kelvin: 55
        }
    },
    spb: {

    }
};

const city = 'msk';
if (cities[city] !=undefined && cities[city].temp !=undefined) {
    console.log(cities[city].temp.celsius);
}

// Знак вопроса - проверка на undefined
console.log(cities[city]?.temp?.celsius);



//
// 13.11. Упражнение - склад
//

const warehouse = {
    goods: [],
    findGoodById: function (id) {
        return this.goods.find(g => g.id == id);
    },

    addGood: function (good) {
        const existedGood = this.findGoodById(good.id);
        if(existedGood) {
            console.log('Товар уже есть на складе');
            return;
        };
        this.goods.push(good);
    },

    getWeightKg: function () {
        return this.goods.reduce((acc, el) => 
            acc += el.weight?.kg ? el.weight.kg : 0,
        0
        )   
    },
  };
  
  // Товары
  const car = {
    id: 1,
    weight: {
    kg: 1000
    },
    brand: 'Ford'
  }
  
  const chair = {
    id: 2,
    weight: {
    kg: 2
    }
  }
  
  const paper = {
    id: 3,
    color: 'red'
  }

warehouse.addGood(car);
console.log(warehouse.goods);
warehouse.addGood(chair);
warehouse.addGood(paper);
warehouse.addGood(car); // Уже есть на складе
console.log(warehouse.goods);

console.log(warehouse.findGoodById(2));

const w = warehouse.getWeightKg();
console.log(w);

*/