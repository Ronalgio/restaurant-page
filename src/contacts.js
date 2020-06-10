const renderContacts = () => {

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

   
};

export default renderContacts;

