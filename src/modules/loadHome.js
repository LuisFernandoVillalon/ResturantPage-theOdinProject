import Pic from'../food.jpg';

function createContent() {
    const body = document.createElement('div');
    body.classList.add('body');

    const myPic = new Image();
    myPic.src = Pic;
    body.appendChild(myPic);

    const title = document.createElement('p');
    title.innerHTML ="Roman Pizza LVXX";
    title.classList.add('titleText');
    body.appendChild(title);

    const subText = document.createElement('p');
    subText.innerHTML = "pizza straight from Italy";
    subText.classList.add('subText');
    body.appendChild(subText);

     const infoContainer = document.createElement('div');
     infoContainer.classList.add('infoContainer');

     const titleContainer = document.createElement('div');
     titleContainer.classList.add('titleContainer');
     const contactDiv = document.createElement('div');
     const contactText = document.createTextNode("Contact: ");
     const addressDiv = document.createElement('div');
     const addressText = document.createTextNode("Address: ");
     contactDiv.appendChild(contactText);
     addressDiv.appendChild(addressText);
     titleContainer.appendChild(contactDiv);
     titleContainer.appendChild(addressDiv);

      const dataContainer = document.createElement('div');
      dataContainer.classList.add('titleContainer');
      const contactInfo = document.createElement('div');
      contactInfo.appendChild(document.createTextNode("(76X) 789-3963"));
      contactInfo.appendChild(document.createElement('br'));
      contactInfo.appendChild(document.createTextNode("romanpizza@pizzamail.com"));
      contactInfo.appendChild(document.createElement('br'));
      contactInfo.appendChild(document.createTextNode("123 Alley Way"));
      contactInfo.appendChild(document.createElement('br'));
      contactInfo.appendChild(document.createTextNode("Peach Town, ID"));
      dataContainer.appendChild(contactInfo);

     infoContainer.appendChild(titleContainer);
     infoContainer.appendChild(dataContainer);

     body.appendChild(infoContainer);


    return body;
}

function loadHome() {
    const content = document.getElementById('tab-content');
    content.textContent = '';
    const displayBody = createContent();
    content.appendChild(displayBody);
}
export default loadHome;