/*

//
// 15.8. Контекст в методах
//

'use strict';

const user = {
    firstName: 'Вася',
    lastName: 'Пупкин',
    age: 24,
    getUserInfo: function() { // This - это обьект user
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);

        const canDrink = () => {
            if (this.age >= 18) {
                console.log('Может бухать!');
            } else {
                console.log('Пока еще рановато!'); 
            }
        }
        canDrink();
    },
    getUserInfoArrow: () => { // This - это window, так как стрелка
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

user.getUserInfo();
user.getUserInfoArrow();

//
// 15.9. Arguments
//

'use strict';

function sunNum(num1, num2) {
    console.log(this);
    console.log(arguments);
    return num1 + num2;
};

// Можно передать и большее количество аргументов
console.log(sunNum(3, 4, 5, 6));

// Для стрелочной функции нет arguments
const sunNumArr = (num1, num2) => {
    console.log(this);
    console.log(arguments);
    return num1 + num2;
};

console.log(sunNumArr(3, 4, 5, 6));

//
// 15.10. Упражнение - объект в объекте
//

const company = {
  name: 'ООО Агро',
  getCompanyName: function () {
    return `Название компании - ${this.name}`;
  },
  // Сотрудники
  employees: [
    {
      name: 'Света',
    },
    {
      name: 'Паша',
    },
    {
      name: 'Марина',
    },
  ],

  getEmployeesNames: function () {
    const name = this.employees.map((el) => el.name);
    return `Имена сотрудников - ${name}`;
  },
  // СЕО
  ceo: {
    name: 'Вася',
    surname: 'Петров',
    getCEOName: function () {
      return `ФИО СЕО - ${this.name} ${this.surname}`;
    },
  },
};

console.log(company.getCompanyName());
console.log(company.getEmployeesNames());
console.log(company.ceo.getCEOName());

// Решение Антона Ларичева
const companyAnton = {
  name: 'ООО Агро',
  employees: [
    {
      name: 'Света',
      getName: function () {
        return this.name;
      },
    },
  ],
  ceo: {
    name: 'Вася',
    getName: function () {
      return this.name;
    },
  },
  getName: function () {
    return this.name;
  },
};

console.log(companyAnton.getName());
console.log(companyAnton.ceo.getName());
console.log(companyAnton.employees.map(emploee => emploee.getName()));

*/
