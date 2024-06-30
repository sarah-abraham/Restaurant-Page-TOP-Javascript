console.log("Woohhoooo we are working!");
import './styles/index.css';
import HomeImage from './assets/home.svg';
import MenuImage from './assets/menu.svg';
import ContactImage from './assets/contacts.svg';
import {Home} from './js/home.js';
import {Menu} from './js/menu.js';

function component(){
    const content = document.querySelector("#content");
    const nav = document.querySelector("nav");
    const homeButton = document.createElement("button");
    const menuButton = document.createElement("button");
    const contactButton = document.createElement("button");

    homeButton.id = "home";
    const homeIcon = new Image();
    homeIcon.src = HomeImage;
    homeIcon.className = "icon";
    homeButton.appendChild(homeIcon);
    homeButton.appendChild(document.createTextNode("Home"));
    nav.appendChild(homeButton);

    menuButton.id = "menu";
    const menuIcon = new Image();
    menuIcon.src = MenuImage;
    menuIcon.className = "icon";
    menuButton.appendChild(menuIcon);
    menuButton.appendChild(document.createTextNode("Menu"));
    nav.appendChild(menuButton);

    contactButton.id = "contact";
    const contactIcon = new Image();
    contactIcon.src = ContactImage;
    contactIcon.className = "icon";
    contactButton.appendChild(contactIcon);
    contactButton.appendChild(document.createTextNode("Contact"));
    nav.appendChild(contactButton);

   
    content.appendChild(Menu());

}

document.body.appendChild(component());