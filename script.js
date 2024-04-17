// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let url = "https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/";
let cards = [
    "https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/diego.jpeg?v=1710258756059",
    "https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/Fidalg%20copy.jpg?v=1710258777163",
    "https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/H.Martin%20copy.jpg?v=1710258789196",
    "https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/J.Quinones%20copy.jpg?v=1710258798229",
    "https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/Leo.Suarez%20copy.jpg?v=1710258819571",
    "https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/k.alvarez.jpg?v=1710258828690",
    "https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/CA2.jpg?v=1710258967284",
    "https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/pelones.jpeg?v=1710259110068"


];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Deck has" + cards.length + "cards.");

    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image: url(" +
                card +
                ")' class='card'>");

        }
    }
};


buttonDouble.style.color = "silver";
console.log("Now the deck has" + cards.length + "cards.");

// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    console.log("Im shuffling the cards");
    game.innerHTML = "";
    let i = 0;
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            card +
            ")' id= " + i + " class='card'>");
        i = i + 1;
    }
};

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}

// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
};

// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    //Get the id property of the clicked thing.
    let clickedId = event.target.id;
    console.log(clickedId);
    if (clickedId !== "") {
        document.getElementById(clickedId).style.backgroundImage = "url('" + url + cards[clickedId] + "')";
        clickedIds.push(clickedId);
        console.log(clickedIds);
        if (clickedIds.length === 2) {
            let card1picture = document.getElementById(clickedIds[0]).style.backgroundImage;
            let card2picture = document.getElementById(clickedIds[1]).style.backgroundImage;
            console.log(card1picture);
            console.log(card2picture);
            if (card1picture === card2picture) {
                console.log("match");
                document.getElementById(clickedIds[0]).id = "";
                document.getElementById(clickedIds[1]).id = "";
                clickedIds = [];
                console.log(clickedIds);
            }
        } else if (clickedIds.length > 2) {
            document.getElementById(clickedIds[0]).style.backgroundImage = "";
            document.getElementById(clickedIds[1]).style.backgroundImage = "";
            clickedIds = [];
            clickedIds.push(clickedId);
            console.log(clickedIds);
        }
    }
});