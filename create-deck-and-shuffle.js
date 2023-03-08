function createDeckOfCards() {
    // Create a deck of cards that's an array of 52 objects. Each will have a suit and a value. It also has a display which is those two combined.
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits = ["♣", "♦", "♥", "♠"];
    let deck = [];
    for(let i = 0; i < values.length; i++) {
        for(let j = 0; j < suits.length; j++) {
            // Make an object
            const newCard = {};
            // Add both a value and a suit along with the combination of those two to each of the new cards
            newCard.value = values[i];
            newCard.suit = suits[j];
            newCard.combined = values[i] + suits[j];
            deck.push(newCard);
        }
    }
    return deck;
}

const deck = createDeckOfCards()


function shuffle(arr) {
    // Create a new array that stuff can be added to
    let newArr = [];
    // Loop through the array. Each time splicing out a single item and having it be a random one that we take out;
    while(arr.length > 0) {
        const idx = Math.floor(Math.random() * arr.length);
        newArr.push(arr[idx]);
        arr.splice(idx, 1);
    }
    return newArr;
}

console.log(shuffle(deck));

const exportedFunctions = {
    // createDeckOfCards: createDeckOfCards,
    // shuffle: shuffle
    createDeckOfCards,
    shuffle
}

// module.exports = exportedFunctions;