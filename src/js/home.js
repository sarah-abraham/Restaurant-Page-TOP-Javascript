import ThaliImage from '../assets/thali3.png';

function Home(){
    const homeContainer = document.createElement("div");
    homeContainer.className = "home";
    
    const homeImageContainer = document.createElement("div");
    homeImageContainer.className = "home-image-container";
    const homeImage = new Image();
    homeImage.src = ThaliImage;
    homeImage.className = "home-image";
    homeImageContainer.appendChild(homeImage);
    
    const homeTextContainer = document.createElement("div");
    homeTextContainer.className = "home-text";
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.textContent = "Welcome to the House of Indian Food 🙏";
    p.textContent = "Indian food is renowned for its rich, aromatic spices and diverse regional flavors. From the creamy curries and tandoori meats of the North to the spicy, coconut-based dishes of the South, Indian cuisine offers a tantalizing array of tastes and textures. Staples like rice, lentils, and flatbreads form the base of many meals, complemented by an array of vegetables, meats, and chutneys, making Indian food a vibrant and flavorful culinary experience.";
    homeTextContainer.appendChild(h2);
    homeTextContainer.appendChild(p);
    
    homeContainer.appendChild(homeImageContainer);
    homeContainer.appendChild(homeTextContainer);

    return homeContainer;
}

export {Home};