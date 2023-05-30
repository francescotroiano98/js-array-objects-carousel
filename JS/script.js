const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
images.forEach((element, index) => {

    const carousel = document.getElementById("carousel");

    const newDiv = document.createElement("div");
    newDiv.classList.add("h-100")
    newDiv.classList.add("d-none");
    
    if (index === 0) {
        newDiv.classList.remove("d-none");
    }

    // Create the first div with the background image
    const backgroundDiv = document.createElement("div");

        backgroundDiv.classList.add("background-image");

    backgroundDiv.style.backgroundImage = `url(${element.image})`;

    newDiv.appendChild(backgroundDiv);

    // Create the second div with the title and text
    const contentDiv = document.createElement("div");

    const titleElement = document.createElement("h2");

    titleElement.textContent = element.title;

    const textElement = document.createElement("p");

    textElement.textContent = element.text;

    contentDiv.appendChild(titleElement);

    contentDiv.appendChild(textElement);

    newDiv.appendChild(contentDiv);

    carousel.appendChild(newDiv);
});

let currentIndex = 0;

const forwardButton = document.getElementById("right");


forwardButton.addEventListener("click", function(){



});

const backButton = document.getElementById("left");


backButton.addEventListener("click", function(){



});