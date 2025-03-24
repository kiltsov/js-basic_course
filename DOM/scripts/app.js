'use strict';

/*

//
// 17.2. Выбор и манипуляции с элементами
//

document.querySelector('.panel').innerText = 'New Text';
document.querySelector('.input').value = 'Text';

//
// 17.3. Обработка нажатий
//

// Если без функции и без привязки HTML
// document.querySelector('.button').addEventListener('click', function() {
//     const input = document.querySelector('.input').value;
//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
// });

// Нужно дописать в HTML в кнопку onClick=''
function changeOnClick() {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
};

*/

//
// 17.4. Обработка событий клавиатуры
//

// Нужно дописать в HTML в кнопку onClick='submitForm()'
function submitForm () {
    const input = document.querySelector('.input').value;
    if (!input) {
        return;
    }
    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
    // document.querySelector('.notification').style.display = 'block'; // доступ к стилю
    // Класслист добавляется без точки !!
    // document.querySelector('.notification').classList.add('notification_active'); // Добавляет
    document.querySelector('.notification').classList.remove('notification_hidden'); // Удаляет

    // console.log(document.querySelector('.notification').getAttribute('class'));
    document.querySelector('.notification').setAttribute('key', 1);
    document.querySelector('.notification').setAttribute('user-id', 1);
    console.log(Number(document.querySelector('.notification').getAttribute('user-id', 1)));

    //
    // 17.11. Упражнение - сохранение JSON
    //
    const localStorTest = JSON.stringify({text: input});
    localStorage.setItem('text', localStorTest);
};

// По нажатию на Enter
// document.querySelector('.input').addEventListener('keydown', (e) => {
//     if (e.code == 'Enter') {
//       submitForm();
//     }
//   });

// По нажатию на Enter
// Нужно дописать в HTML в инпут onkeydown="inputChanged(event)
function inputChanged(e) {
    if (e.code == 'Enter') {
        submitForm();
      }
};


//
// 17.7. Упражнение - получение DOM элементов
//
const elements = document.querySelectorAll('.one span');
console.log(elements[0].innerText);
console.log(elements[1].innerText);
console.log(document.querySelector('#two').innerText);
console.log(document.querySelector('[user-id="4"]').innerText);

console.log('----------');

console.log(document.querySelectorAll('.one')[0].innerText);
console.log(document.querySelectorAll('.one')[1].innerText);
console.log(document.querySelector('.one ~ div').innerText); //  Хак, не очень хорошо
console.log(document.getElementById('two').innerText); // ID

//
// 17.8. Добавление html на лету
//
const panelText = 'Панель';
const panelClass = 'button';
const newElement = document.createElement('div');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
// newElement.innerText = 'Кнопка';
newElement.innerHTML = `<button class="${panelClass}">${panelText}</button>`;
document.querySelector('.test').appendChild(newElement);


//
// 17.9. Local storage
//

// Смотреть - Приложение => Хранилище => Локальное хранилище
localStorage.setItem('token', 'sdfhjk2sdfkj'); // Добавить - ключ - значение
localStorage.setItem('token1', 1);
localStorage.setItem('token1', true); // Все будет преобразовано в строку
localStorage.removeItem('token1'); // Удалить по ключу
localStorage.clear(); // Очистить весь сторадж

//
// 17.10. JSON
//

const obj = JSON.parse('{ "a": 1 }'); // Преобразует в обьект
console.log(obj);
const str = JSON.stringify(obj); // Преобразует в строку
console.log(str);