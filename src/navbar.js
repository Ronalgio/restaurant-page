const renderNavbar = () => {
var content = document.getElementById("content");


    let navbar = document.createElement("div");
    navbar.id = "navbar";
    content.appendChild(navbar);
    
    let navbarLogo = document.createElement("img");
    navbarLogo.src = "logo.png";
    navbarLogo.id = "navbar-logo";
    navbar.appendChild(navbarLogo);

    var title = document.createElement('div');
title.classList = "title";
title.textContent = "Pizza Time";
navbar.appendChild(title);


    let navbarLinks = document.createElement("div");
    navbarLinks.id = "navbar-links";
    navbar.appendChild(navbarLinks);

    let navbarHome = document.createElement("a");
    navbarHome.id = "navbar-home";
    navbarHome.classList = "navbar-link";
    navbarHome.textContent = "Home";
    navbarHome.href="#home";
    navbarLinks.appendChild(navbarHome);

    let navbarMenu = document.createElement("a");
    navbarMenu.id = "navbar-menu";
    navbarMenu.classList = "navbar-link";
    navbarMenu.textContent = "Menu";
    navbarMenu.href="#menu";
    navbarLinks.appendChild(navbarMenu);

    let navbarContacts = document.createElement("a");
    navbarContacts.id = "navbar-contacts";
    navbarContacts.classList = "navbar-link";
    navbarContacts.textContent = "Contacts";
    navbarContacts.href="#contacts";
    navbarLinks.appendChild(navbarContacts);
};




export default renderNavbar;

