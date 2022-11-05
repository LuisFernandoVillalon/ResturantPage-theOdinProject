function createAbout() {
    const container = document.createElement('div');
    container.classList.add('aboutContainer');

    const title = document.createElement('p');
    title.innerHTML = "Who is Roman Pizza?"
    title.classList.add('aboutTitle');
    container.appendChild(title);

    const text = document.createElement('p');
    text.innerHTML = "The Roman Italy Pizza, Is the pizza, For you and me! The Roman Italy Pizza, Is the pizza, For you and me! The Roman Italy pizza, Is the pizza, Free deli ver-y, The Roman Italy pizza, Is the pizza, Very ta-asty.";
    text.classList.add('aboutText');
    container.appendChild(text);

    return container;
}
function loadAbout() {
    const content = document.getElementById('tab-content');
    content.textContent = '';
    const displayBody = createAbout();
    content.appendChild(displayBody);
}
export default loadAbout;