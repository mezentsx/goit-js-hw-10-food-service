import menu from './menu.json';
import cardsTemplate from './templates/card.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'theme';

const refs = {
    body: document.querySelector('body'),
    menu: document.querySelector('.js-menu'),
    themeSwitch: document.querySelector('#theme-switch-toggle'),
};

settingDefault()

function settingDefault() {
    if (!localStorage.length) {
        localStorage.setItem(STORAGE_KEY, Theme.LIGHT)
    };

    refs.body.classList.add(localStorage.getItem(STORAGE_KEY));
    
    if (refs.body.classList.contains(Theme.DARK)) {
        refs.themeSwitch.checked = true;
    };
};

const markup = cardsTemplate(menu);
refs.menu.insertAdjacentHTML('beforeend', markup);

refs.themeSwitch.addEventListener('change', onThemeSwitchChange);

function onThemeSwitchChange() {
    refs.body.classList.toggle(Theme.DARK);

    if (refs.body.classList.contains(Theme.DARK)) {
        localStorage.setItem(STORAGE_KEY, Theme.DARK)
    } else { localStorage.setItem(STORAGE_KEY, Theme.LIGHT) };
};