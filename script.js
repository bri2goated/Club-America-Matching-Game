// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
let clickedIds = [];
let counterdiv = document.querySelector(".counter");
 let counter = 0;
let counterText = document.querySelector("span");
   
// Array containing image URLs
let url = "https://cdn.glitch.global/63526844-33ee-4f88-8cca-81d00953972f/";
let cards = [
    "diego.jpeg?v=1710258756059",
    "Fidalg%20copy.jpg?v=1710258777163",
    "H.Martin%20copy.jpg?v=1710258789196",
    "J.Quinones%20copy.jpg?v=1710258798229",
    "Leo.Suarez%20copy.jpg?v=1710258819571",
    "k.alvarez.jpg?v=1710258828690",
    "CA2.jpg?v=1710258967284",
    "pelones.jpeg?v=1710259110068"

];


// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
   counter = counter + 1; 
  counterText.innerHTML();
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
        let audio = document.querySelector(".audio");
        audio.play();
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Deck has" + cards.length + " cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend",
                "<div style='background-image: url(" + url + card + ")' class='card'>"

            );

        }
    }

    let audio = document.querySelector(".audio");
    audio.play();
};

// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    console.log("Im shuffling the cards");
    let count = 0;
	  for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url + card + ")' id='" + count + "' class='card'>"
        );
        count = count + 1;
        
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
        let audio = document.querySelector(".audio");
        audio.play();
    }

    return array;


}

game.innerHTML = "";
// Button to Flip All Cards
buttonFlip.onclick = function() {
    let count = 0;
    for (let card of cards) {
        document.getElementById(count).style.backgroundImage = "";
        count = count + 1;
        console.log(count);


        let audio = document.querySelector(".audio");
        audio.play();


    }



};


// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.

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