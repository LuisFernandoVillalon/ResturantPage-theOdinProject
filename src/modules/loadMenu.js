function createMenu(src,alt,text,price) {

    const cont = document.createElement('div');
    cont.classList.add('container');

    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);

    const desc = document.createElement('div');
    desc.classList.add('description');

    const foodName = document.createElement('div');
    foodName.innerHTML = text;

    const cost = document.createElement('div');
    cost.innerHTML = price;

    desc.appendChild(foodName);
    desc.appendChild(cost);

    cont.appendChild(img);
    cont.appendChild(desc);

    return cont;
    
}

function loadMenu() {
    const content = document.getElementById('tab-content');
    content.textContent = '';
    const items = [
        createMenu(
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chicago-Style_Stuffed_Pizza.jpg/1280px-Chicago-Style_Stuffed_Pizza.jpg',
            'chicago pizza',
            'Chicago Pizza',
            'Twelve dolla!'
        ),
        createMenu(
            'https://i0.wp.com/blog.slicelife.com/wp-content/uploads/2020/01/new-york-pizza-slice-pull.jpg?w=1200&ssl=1',
            'new york pizza',
            'New York Pizza',
            'Two dolla!'
        ),
        createMenu(
            'https://www.afarmgirlsdabbles.com/wp-content/uploads/2021/01/thin-crust-pizza-dough-recipe__AFD-20a_v-768x1151.jpg',
            'thin crust pizza',
            'Thin Crust Pizza',
            'Free!'
        ),
        createMenu(
            'https://wellandfull.com/wp-content/uploads/2016/12/wellandfull-24-1.jpg',
            'vegan pizza',
            'Vegan Pizza',
            'We give you two dolla!'
        )
    ]
    items.forEach((food)=>{
        content.append(food);
    });
   
}
export default loadMenu;