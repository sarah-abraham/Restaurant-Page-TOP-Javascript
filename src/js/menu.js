import Paneer from "../assets/paneer.png";
import Naan from "../assets/naan.png";
import Biryani from "../assets/biryani.png";
import GulabJamun from "../assets/gulab-jamun.png";
import ButterChicken from "../assets/butter-chicken.png";


function Menu(){
    let images = [Paneer, Naan, Biryani, GulabJamun, ButterChicken, Paneer];
    let titles = ["Paneer Chilly", "Naan", "Biryani", "Gulab Jamun", "Butter Chicken Rice Bowl", "Paneer Chilly"];
    let descriptions = ["Paneer Chilly is a popular dish featuring crispy cubes of paneer stir-fried with bell peppers, and onions. It's a delightful fusion of textures and flavors, offering a perfect blend of heat and tanginess.", "Indian naan is a soft, leavened flatbread traditionally baked in a tandoor oven, resulting in a slightly charred, chewy texture. It's often enjoyed with various curries and kebabs, enhancing the meal with its pillowy goodness.", "Biryani is a fragrant, spiced rice dish layered with marinated meat, vegetables, and aromatic spices like saffron. It's a one-pot delicacy that captures the essence of Indian cuisine with its rich flavors and aromatic appeal.", "Gulab Jamun is a beloved Indian dessert consisting of soft, deep-fried dough balls soaked in a sweet, infused with cardamom. These melt-in-the-mouth treats are a festive favorite, celebrated for their rich, indulgent sweetness.", "The butter chicken rice bowl features tender pieces of chicken cooked in a creamy, spiced tomato sauce served over a bed of fluffy basmati rice. This dish combines the rich flavors of butter chicken with the comforting simplicity of rice.", "Paneer Chilly is a popular dish featuring crispy cubes of paneer stir-fried with bell peppers, and onions. It's a delightful fusion of textures and flavors, offering a perfect blend of heat and tanginess."];
    const menu = document.createElement("div");
    menu.className = "menu";
    for(let i = 0; i<6; i++){
        let card = document.createElement("div");
        card.className = "card";
        let cardImage = new Image();
        cardImage.src = images[i];
        cardImage.className = "card-image";
        
        let cardTitle = document.createElement("h2");
        cardTitle.className = "card-title";
        cardTitle.textContent = titles[i];
        
        let cardDescription = document.createElement("p");
        cardDescription.className = "card-description";
        cardDescription.textContent = descriptions[i];
    
        card.appendChild(cardImage);
        card.appendChild(cardTitle);
        card.appendChild(cardDescription);
        menu.appendChild(card);
    }
    return menu;
}

export {Menu}