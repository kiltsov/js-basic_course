'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';
let globalActiveHabbitId;

////////////////////////////////////////////////////
/* Page */
////////////////////////////////////////////////////

const page = {
  menu: document.querySelector('.menu__list'),
  header: {
    h1: document.querySelector('.h1'),
    progressPercent: document.querySelector('.progress__percent'),
    progressCoverBar: document.querySelector('.progress__cover-bar')
  },
  content: {
    daysContainer: document.getElementById('days'),
    nextDay: document.querySelector('.habbit__day'),
  },
  popup: {
    cover: document.querySelector('.cover'),
    iconField: document.querySelector('.popup__form input[name="icon"]'),
  }
};

////////////////////////////////////////////////////
/* Utils */
////////////////////////////////////////////////////

function loadData() {
  const habbitString = localStorage.getItem(HABBIT_KEY);
  const habbitArray = JSON.parse(habbitString);
  if (Array.isArray(habbitArray)) {
    habbits = habbitArray;
  }
}

function saveData() {
  localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

function resetForm(form, fields) {
  for (const field of fields) {
    form[field].value = '';
  }
}

function validateAntGetFormData(form, fields) {
  const formData = new FormData(form);
  const res = {};
  for (const field of fields) {
    const fieldValue = (formData.get(field));
    form[field].classList.remove('error');
    if (!fieldValue) {
      form[field].classList.add('error');
    }
    res[field] = fieldValue;
  }
  let isValid = true;
  for (const field of fields) {
    if (!res[field]) {
      isValid = false;
    }
  }
  if (!isValid) {
    return;
  }
  return res;
}

function tooglePopup() {
  page.popup.cover.classList.toggle('cover_hidden');
}

////////////////////////////////////////////////////
/* Render */
////////////////////////////////////////////////////

function rerenderMenu(activeHabbit) {
  for (const habbit of habbits) {
    const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);

    if (!existed) {
      // Создание
      const element = document.createElement('button');

      element.setAttribute('menu-habbit-id', habbit.id);
      element.classList.add('menu__item');
      element.innerHTML = `<img src="./images/${habbit.icon}.svg" alt="${habbit.name}">`;
      element.addEventListener('click', () => rerender(habbit.id));

      if (activeHabbit.id === habbit.id) {
        element.classList.add('menu__item_active');
      }
      page.menu.appendChild(element);

      continue;
    }
    if (activeHabbit.id === habbit.id) {
      existed.classList.add('menu__item_active');
    } else {
      existed.classList.remove('menu__item_active');
    }
  }
}
// Рендер Head
function rerenderHead(activeHabbit) {
  page.header.h1.innerText = activeHabbit.name;
  const progress =
    activeHabbit.days.length / activeHabbit.target > 1 ? 100 : (activeHabbit.days.length / activeHabbit.target) * 100;
  page.header.progressPercent.innerText = progress.toFixed(0) + ' %';
  page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`);
}

// Рендер Контента
function rerenderContent(activeHabbit) {
  page.content.daysContainer.innerHTML = '';
  for (const index in activeHabbit.days) {
    const element = document.createElement('div');
    element.classList.add('habbit');
    element.innerHTML = `
    <div class="habbit__day">День ${Number(index) + 1}</div>
    <div class="habbit__comment">${activeHabbit.days[index].comment}</div>
    <button class="habbit__delete" onclick="deleteDay(${index})">
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none"
      xmlns="http://www.w3.org/2000/svg"><path
      d="M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M4 6H20M10 10V16M14 10V16"
      stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
      stroke-linejoin="round" alt="Удалить день ${Number(index) + 1}"/></svg>
    </button>
    `;

    page.content.daysContainer.appendChild(element);
  }
  page.content.nextDay.innerHTML = `День ${activeHabbit.days.length + 1}`;
}

/* Work With Days */
function addDays(event) {
  event.preventDefault();
  const data = validateAntGetFormData(event.target, ['comment']);
  if (!data) {
    return;
  }
  habbits = habbits.map(habbit => {
    if (habbit.id === globalActiveHabbitId) {
      return {
        ...habbit,
        days: habbit.days.concat([{ comment: data.comment }])
      }
    }
    return habbit;
  })
  resetForm(event.target, ['comment']);
  rerender(globalActiveHabbitId);
  saveData();
}

// Удаление дня
function deleteDay(index) {
  habbits = habbits.map((habbit) => { 
    if (habbit.id === globalActiveHabbitId) { 
      habbit.days.splice(index, 1); 
      return {
        ...habbit,
        days: habbit.days
      };
    } 
    return habbit; 
  });
  rerender(globalActiveHabbitId);
  saveData();
}

// Workin with habbits
function setIcon(context, icon) {
  page.popup.iconField.value = icon;
  const activeIcon = document.querySelector('.icon-select.icon-select_active');
  activeIcon.classList.remove('icon-select_active');
  context.classList.add('icon-select_active');
}

function addHabbit(event) {
  event.preventDefault();
  const data = validateAntGetFormData(event.target, ['name', 'icon', 'target']);
  if (!data) {
    return;
  }
  const maxId = habbits.reduce((acc, habbit) => acc > habbit.id ? acc : habbit.id);
  habbits.push({
    id: maxId + 1,
    name: data.name,
    target: data.target,
    icon: data.icon,
    days: []
  })
  resetForm(event.target, ['name', 'target']);
  tooglePopup();
  rerender(maxId + 1);
}

// ОБщий рендер
function rerender(activeHabbitId) {
  globalActiveHabbitId = activeHabbitId;
  const activeHabbit = habbits.find((habbit) => habbit.id === activeHabbitId);
  if (!activeHabbit) {
    return;
  }
  document.location.replace(document.location.pathname + '#' + activeHabbitId);
  rerenderMenu(activeHabbit);
  rerenderHead(activeHabbit);
  rerenderContent(activeHabbit);
}

// Запуск приложения
(() => {
  loadData();
  const hashId = Number(document.location.hash.replace('#', ''));
  const urlHabbit = habbits.find(habbit => habbit.id == hashId);
  if (urlHabbit) {
    rerender(urlHabbit.id);
  } else {
    rerender(habbits[0].id);
  }
})();
