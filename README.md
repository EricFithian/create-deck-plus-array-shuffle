# Create-deck-plus-array-shuffle

## This is going to allow any student to install the package and either create a deck of cards that has a value, a suit and the value plus suit combined for display

### Install
$ npm install create-deck-plus-array-shuffle
### Usage

```
import exportedFunctions from "create-deck-plus-array-shuffle";

const myDeck = exportedFunctions.createDeckOfCards();

// The following should be the value of myDeck:
/* [
  { value: '2', suit: '♣', combined: '2♣' },
  { value: '2', suit: '♦', combined: '2♦' },
  { value: '2', suit: '♥', combined: '2♥' },
  { value: '2', suit: '♠', combined: '2♠' },
  { value: '3', suit: '♣', combined: '3♣' },
  { value: '3', suit: '♦', combined: '3♦' },
  { value: '3', suit: '♥', combined: '3♥' },
  { value: '3', suit: '♠', combined: '3♠' },
  { value: '4', suit: '♣', combined: '4♣' },
  { value: '4', suit: '♦', combined: '4♦' },
  { value: '4', suit: '♥', combined: '4♥' },
  { value: '4', suit: '♠', combined: '4♠' },
  { value: '5', suit: '♣', combined: '5♣' },
  { value: '5', suit: '♦', combined: '5♦' },
  { value: '5', suit: '♥', combined: '5♥' },
  { value: '5', suit: '♠', combined: '5♠' },
  { value: '6', suit: '♣', combined: '6♣' },
  { value: '6', suit: '♦', combined: '6♦' },
  { value: '6', suit: '♥', combined: '6♥' },
  { value: '6', suit: '♠', combined: '6♠' },
  { value: '7', suit: '♣', combined: '7♣' },
  { value: '7', suit: '♦', combined: '7♦' },
  { value: '7', suit: '♥', combined: '7♥' },
  { value: '7', suit: '♠', combined: '7♠' },
  { value: '8', suit: '♣', combined: '8♣' },
  { value: '8', suit: '♦', combined: '8♦' },
  { value: '8', suit: '♥', combined: '8♥' },
  { value: '8', suit: '♠', combined: '8♠' },
  { value: '9', suit: '♣', combined: '9♣' },
  { value: '9', suit: '♦', combined: '9♦' },
  { value: '9', suit: '♥', combined: '9♥' },
  { value: '9', suit: '♠', combined: '9♠' },
  { value: '10', suit: '♣', combined: '10♣' },
  { value: '10', suit: '♦', combined: '10♦' },
  { value: '10', suit: '♥', combined: '10♥' },
  { value: '10', suit: '♠', combined: '10♠' },
  { value: 'J', suit: '♣', combined: 'J♣' },
  { value: 'J', suit: '♦', combined: 'J♦' },
  { value: 'J', suit: '♥', combined: 'J♥' },
  { value: 'J', suit: '♠', combined: 'J♠' },
  { value: 'Q', suit: '♣', combined: 'Q♣' },
  { value: 'Q', suit: '♦', combined: 'Q♦' },
  { value: 'Q', suit: '♥', combined: 'Q♥' },
  { value: 'Q', suit: '♠', combined: 'Q♠' },
  { value: 'K', suit: '♣', combined: 'K♣' },
  { value: 'K', suit: '♦', combined: 'K♦' },
  { value: 'K', suit: '♥', combined: 'K♥' },
  { value: 'K', suit: '♠', combined: 'K♠' },
  { value: 'A', suit: '♣', combined: 'A♣' },
  { value: 'A', suit: '♦', combined: 'A♦' },
  { value: 'A', suit: '♥', combined: 'A♥' },
  { value: 'A', suit: '♠', combined: 'A♠' }
] */

// The shuffle function works for any input array but for the purposes of this demo with a deck here's a possible output for an input matching shuffled deck:

const shuffledDeck = exportedFunctions.shuffle(myDeck)

/* [
  { value: 'K', suit: '♥', combined: 'K♥' },
  { value: '9', suit: '♥', combined: '9♥' },
  { value: '6', suit: '♣', combined: '6♣' },
  { value: '7', suit: '♦', combined: '7♦' },
  { value: '5', suit: '♠', combined: '5♠' },
  { value: '10', suit: '♥', combined: '10♥' },
  { value: 'A', suit: '♥', combined: 'A♥' },
  { value: '2', suit: '♣', combined: '2♣' },
  { value: '3', suit: '♠', combined: '3♠' },
  { value: '2', suit: '♥', combined: '2♥' },
  { value: '6', suit: '♦', combined: '6♦' },
  { value: '5', suit: '♦', combined: '5♦' },
  { value: '4', suit: '♦', combined: '4♦' },
  { value: '8', suit: '♦', combined: '8♦' },
  { value: '6', suit: '♥', combined: '6♥' },
  { value: '4', suit: '♣', combined: '4♣' },
  { value: '2', suit: '♦', combined: '2♦' },
  { value: '2', suit: '♠', combined: '2♠' },
  { value: 'J', suit: '♦', combined: 'J♦' },
  { value: '10', suit: '♠', combined: '10♠' },
  { value: 'J', suit: '♣', combined: 'J♣' },
  { value: '10', suit: '♦', combined: '10♦' },
  { value: 'Q', suit: '♠', combined: 'Q♠' },
  { value: 'J', suit: '♠', combined: 'J♠' },
  { value: 'A', suit: '♦', combined: 'A♦' },
  { value: '3', suit: '♦', combined: '3♦' },
  { value: 'K', suit: '♠', combined: 'K♠' },
  { value: '7', suit: '♣', combined: '7♣' },
  { value: 'Q', suit: '♥', combined: 'Q♥' },
  { value: '4', suit: '♠', combined: '4♠' },
  { value: '7', suit: '♥', combined: '7♥' },
  { value: '3', suit: '♥', combined: '3♥' },
  { value: '8', suit: '♥', combined: '8♥' },
  { value: 'K', suit: '♦', combined: 'K♦' },
  { value: '5', suit: '♣', combined: '5♣' },
  { value: '4', suit: '♥', combined: '4♥' },
  { value: 'A', suit: '♣', combined: 'A♣' },
  { value: '9', suit: '♣', combined: '9♣' },
  { value: '9', suit: '♦', combined: '9♦' },
  { value: '3', suit: '♣', combined: '3♣' },
  { value: '8', suit: '♠', combined: '8♠' },
  { value: '8', suit: '♣', combined: '8♣' },
  { value: '9', suit: '♠', combined: '9♠' },
  { value: 'J', suit: '♥', combined: 'J♥' },
  { value: '5', suit: '♥', combined: '5♥' },
  { value: 'K', suit: '♣', combined: 'K♣' },
  { value: 'Q', suit: '♣', combined: 'Q♣' },
  { value: '7', suit: '♠', combined: '7♠' },
  { value: 'Q', suit: '♦', combined: 'Q♦' },
  { value: 'A', suit: '♠', combined: 'A♠' },
  { value: '6', suit: '♠', combined: '6♠' },
  { value: '10', suit: '♣', combined: '10♣' }
] */

```

Please note that you may have to run a local file for Javascript by adding to your package.json so it matches what I have below:

```
{
  "type": "module",
  "dependencies": {
    "use-negative-indexes": "^1.3.2"
  }
}
```

And then run the file by using this command in the terminal:
```node --experimental-modules fileName.js``` simply overwriting fileName.js to whatever the name of the file you're trying to run is. 

Hopefully this helps for all those Javascript developers with experience in Python and other languagues that natively support negative indexing and who love passing in negative indexes or positive indexes to their nested arrays or who have hit errors with passing in strings on accident for indexes to arrays!
