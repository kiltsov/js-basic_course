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
