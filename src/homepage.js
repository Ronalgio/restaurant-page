const loadHome = () => {

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



let mainImage = document.createElement("img");
    mainImage.id = "main-image";
    mainImage.src = "welcome.jpg";
    container.appendChild(mainImage);

    let textBlock = document.createElement("div");
    textBlock.classList = "text-block";
    container.appendChild(textBlock);
    let p1 = document.createElement("p");
    p1.textContent = "Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.) which is then baked at a high temperature, traditionally in a wood-fired oven."
    let p2 = document.createElement("p");
    p2.textContent = "The term pizza was first recorded in the 10th century in a Latin manuscript from the Southern Italian town of Gaeta in Lazio, on the border with Campania.Modern pizza was invented in Naples, and the dish and its variants have since become popular in many countries. It has become one of the most popular foods in the world and a common fast food item in Europe and North America, available at pizzerias (restaurants specializing in pizza), restaurants offering Mediterranean cuisine, and via pizza delivery. "
    
    textBlock.appendChild(p1);
    textBlock.appendChild(p2);


};

export default loadHome;

