
    import loadWelcome from "./homepage";
    import loadMenu from "./menu";
   import loadContacts from "./contacts";
    

    
    let renderHome = () => {
        let homeNav = document.getElementById("navbar-home");
        homeNav.addEventListener("click", function() {loadWelcome()}, false);
    }
    
    let renderMenu = () => {
        let menuNav = document.getElementById("navbar-menu");
        menuNav.addEventListener("click", function() {loadMenu()}, false);
    }
    
    let renderContacts = () => {
    let contactsNav = document.getElementById("navbar-contacts");
      contactsNav.addEventListener("click", function() {loadContacts()}, false);
    }
    
    export {
        renderHome, 
        renderMenu,
        //renderContacts
    };