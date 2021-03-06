const loadMenu = () => {

let containerExists = document.getElementById("container");
if(!containerExists){
    var container = document.createElement("div");
    container.id = "container";
} else {
    var container = document.getElementById("container");
    container.textContent = '';
}
let navbar = document.getElementById("navbar");
    navbar.after(container);

    let pageTitle = document.createElement("h1");
    pageTitle.classList = "page-title";
    pageTitle.textContent = "Menu";
    container.appendChild(pageTitle);

    let menuWrapper = document.createElement("div");
menuWrapper.id = "menu-wrapper";
container.appendChild(menuWrapper);

let menuItems = [
    ['Bufalina', 'bufalina.jpg'],
    ['Margherita', '4formaggi.jpg'],
    ['Marinara', 'marinara.jpg'],
    ['Gorgonzola & Pere', 'gorgonzolaepere.jpg'],
    ['Prosciutto & Rucola', 'prosciuttoerucola.jpg'],
    ['Salsiccia & Peperoni', 'salsicciaepeperoni.jpg'],
   
   
]

for(let i in menuItems){
    let menuItem = document.createElement("div");
    menuItem.classList = "menu-item";
    menuWrapper.appendChild(menuItem);

    let itemImg = document.createElement("img");
    itemImg.classList = "item-img";
    itemImg.src = menuItems[i][1];
    menuItem.appendChild(itemImg);
    
    let itemName = document.createElement("div");
    itemName.classList = "item-name";
    itemName.textContent = menuItems[i][0];
    menuItem.appendChild(itemName);
}

};

export default loadMenu;

