import loadPage from './modules/loadInit.js';
import loadMenu from './modules/loadMenu.js';
import loadHome from './modules/loadHome.js';
import loadAbout from './modules/loadAbout.js';
import './style.css';


init();

function addNavEvents() {
    const homebtn = document.getElementById('home');
    const menubtn = document.getElementById('menu');
    const aboutbtn = document.getElementById('about');

    homebtn.addEventListener('click', loadHome);
    menubtn.addEventListener('click', loadMenu);
    aboutbtn.addEventListener('click', loadAbout);
}
function init() {
    loadPage();
    loadHome();
    addNavEvents();
}
