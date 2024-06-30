import City from '../assets/city.svg';



function Contact(){
    let places = ["Mumbai", "Dubai", "Dallas"];
    let addresses = ["Address: Mystic Grove Land,1209, Whispering Elm Drive,Enchanted Meadows, Starryfield 83726, Mumbai","Address: Mystic Grove Land,1209, Whispering Elm Drive,Enchanted Meadows, Starryfield 83726, Dubai", "Address: Mystic Grove Land,1209, Whispering Elm Drive,Enchanted Meadows, Starryfield 83726, Dallas"]

    const contact = document.createElement("div");
    contact.className = "contact";
    const contactCard = document.createElement("div");
    contactCard.className = "contact-card";
    for(let i = 0; i<3; i++){
        let hq = document.createElement("div");
        hq.className = "hq";
        const cityIcon = new Image();
        cityIcon.src = City;
        cityIcon.className = "city-icon";
        let hqPlace = document.createElement("div");
        hqPlace.textContent = places[i];
        hqPlace.className = "hq-place";
        let hqEmail = document.createElement("div");
        hqEmail.textContent = "Email: notanemail@hoi.com";
        hqEmail.className = "hq-email";
        let hqNumber = document.createElement("div");
        hqNumber.textContent = "Phone: 0984774748382112";
        hqNumber.className = "hq-number";
        let hqAddress = document.createElement("div");
        hqAddress.textContent = addresses[i];
        hqAddress.className = "hq-address";
        
        hq.appendChild(cityIcon);
        hq.appendChild(hqPlace);
        hq.appendChild(hqEmail);
        hq.appendChild(hqNumber);
        hq.appendChild(hqAddress);
        
        contactCard.appendChild(hq)
    }
    contact.appendChild(contactCard);
    return contact;
}

export {Contact}

