/*

//
// 12.2. Работа со троками - Базовые методы
//

const userName = 'Вася Пупкина';
console.log(userName);
console.log(userName[0] + userName[1]);
console.log(userName.charAt(2));
console.log(userName.length);
console.log(userName.indexOf('уп'));
console.log(userName.lastIndexOf('a'));
console.log(userName.includes('уп'));
console.log(userName.includes('упа'));
console.log(userName.slice(5));
console.log(userName.slice(5, 8));

//
// 12.3. Упражнение - выделение имени
//

const userInfo = 'Вася aka Terminator Perdinator Пупкин';

const firstProbel = userInfo.indexOf(' '); // Находим первый пробел
const lastProbel = userInfo.lastIndexOf(' '); // Находим последний пробел

let userName = userInfo.slice(0, firstProbel);
let surnameName = userInfo.slice(lastProbel + 1);

console.log(userName); // Имя
console.log(surnameName); // Фамилия

//
// 12.4. Преобразование строки
//

const str = 'Василина Пупкина';
console.log(str.includes('а'));
console.log(str.startsWith('В'));
console.log(str.endsWith('н'));

console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());
console.log(str.replace('В', 'Ф'));
console.log(str.replace('П', 'Д'));
console.log(str.replaceAll('а', 'и')); // Поддерживается не всеми браузерами
console.log(str.replace(/а/g, 'и')); // Регулярное выражение для замены всех 'a'

const strLong = 'Василина Пупкина   \nTerminator';
console.log(strLong.trimStart());

//
// 12.5. Упражнение - проверка номера
//

// Верные номера 
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 3235356';
const num5 = ' +7(910) 3235356 ';

// Неверные номера
const num1Error = '89103235'
const num2Error = '+7d910d323-53-56'
const num3Error = '9+7103235356'
const num4Error = '89103q35356'
const num5Error = '+4(910)335-35-69'


const normalizeNumber = (number) => {
    const cleaned = number
      .toString()
      .trim()
      .replaceAll('+7', '8')
      .replaceAll(' ', '')
      .replaceAll('(', '')
      .replaceAll(')', '')
      .replaceAll('-', '');

    return !isNaN(Number(cleaned)) && cleaned.length === 11 && cleaned.startsWith('8')
      ? cleaned
      : 'Введите корректный номер';
};

console.log(normalizeNumber(num1))
console.log(normalizeNumber(num5Error))

//
// Реализация Антона Ларичева
function isPhoneNumber(num) {
    num = num.trim();
    num = num.replace('+7', '8');
    if (!num.startsWith('8')) {
        return false
    }
    num = num.replaceAll(' ', '');
    num = num.replaceAll('(', '');
    num = num.replaceAll(')', '');
    num = num.replaceAll('-', '');
    if (num.length != 11) {
        return false
    }
    let onlyNumber = true;
    for (const char of num) {
        if (isNaN(Number(char))) {
            onlyNumber = false;
            break;
        }
    }
    return onlyNumber;
}

console.log(isPhoneNumber(num1));
console.log(isPhoneNumber(num5Error));

//
// 12.6. Строки и массивы
//

const userFullName = 'Вася Пункин Иванович';
console.log(userFullName.split(' '));
const [firstName, familyName, lastName] = userFullName.split(' ');
console.log(firstName);
console.log(familyName);
console.log(lastName);
const arr = ['Ты', 'знаешь', 'JS'];
console.log(arr.join(' '));

//
// 12.7. Дополнение строк
//

const film = ' Звездные войны ';
console.log(film.padStart(50, '*')); 
console.log(film.padEnd(50, '*'));
console.log(film.repeat(10)); // повторить строку 10 раз

//
// 12.8. Упражнение - маскировка карты
//

const card = '2834234503458353';

let cardMask = card.slice(card.length - 4).padStart(card.length, '*');

console.log(card);
console.log(cardMask);

*/