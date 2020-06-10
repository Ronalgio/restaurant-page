import loadHome from './homepage';
import renderNavbar from './navbar';
import {renderHome, renderMenu, renderContacts} from './navigation';

renderNavbar();
loadHome();

// event listeners for menu
renderHome();
renderMenu();
renderContacts();