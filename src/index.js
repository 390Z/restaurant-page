import loadNav from './components/navigation.js';
import loadScreen from './components/screen.js';

import loadHome from './tabs/home.js';
import loadAbout from './tabs/about.js';
import loadMenu from './tabs/menu.js';
import loadGallery from './tabs/gallery.js';
import loadContact from './tabs/contact.js';


const content = document.querySelector('#content');

const nav = loadNav();
const screen = loadScreen();

const home = loadHome();
const about = loadAbout();
const menu = loadMenu();
const gallery = loadGallery();
const contact = loadContact();

content.appendChild(nav);
content.appendChild(screen);

const updateScreen = (tab) => {
    screen.innerHTML = '';
    screen.appendChild(tab);
}

nav.addEventListener('click', e => {
    if (e.target.id) {
        updateScreen(eval(e.target.id));
    }
})