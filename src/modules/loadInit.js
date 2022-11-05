function displayHeader(id) {
    const header = document.createElement('div');
    header.classList.add('header');
    header.setAttribute('id', id);
    const titlePage = document.createElement('div');
    const titleheader = document.createTextNode("Resturant Page");
    titlePage.appendChild(titleheader);
    titlePage.classList.add('titlePage');
    header.appendChild(titlePage);
    return header;
}
function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.innerHTML = text;
    btn.classList.add('styleBtn');
    return btn;
}
function createNav(id) {
    const nav = document.createElement('nav');
    nav.classList.add('navContainer');
    nav.setAttribute('id', id);
    const homebtn = createBtn('home', 'Home');
    const menubtn = createBtn('menu', 'Menu');
    const aboutbtn = createBtn('about', 'About');
    nav.appendChild(homebtn);
    nav.appendChild(menubtn);
    nav.appendChild(aboutbtn);
    return nav;
}
function createBody(id) {
    const body = document.createElement('div');
    body.setAttribute('id', id);
    return body;
}
function loadPage() {
    const content = document.getElementById('content');
    const header = displayHeader('header');
    content.appendChild(header);
    const navi = createNav('navi');
    header.appendChild(navi);
    const tabContent = createBody('tab-content');
    content.appendChild(tabContent);
}
export default loadPage;