import React, { useState } from "react";


const suits = ["S", "H", "D", "C"];
const values = [
  "A", "2", "3", "4", "5", "6", "7",
  "8", "9", "10", "J", "Q", "K"
];

// Create a deck of cards
const createDeck = () => {
  const deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push(`${suit}-${value}`);
    }
  }
  return deck;
};

//shuffle the deck randomly
const shuffleDeck = (deck) => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const dealCards = (deck, numPlayers) => {
  const players = Array.from({ length: numPlayers }, () => []);
  deck.forEach((card, index) => {
    players[index % numPlayers].push(card);
  });
  return players;
};

const CardGame = () => {
  const [numPlayers, setNumPlayers] = useState(4);
  const [hands, setHands] = useState([]);
 
  const handleDeal = () => {
     if(numPlayers <= 0){
      alert('invalid number of player')
      return
    }
    const deck = shuffleDeck(createDeck());
    const dealtHands = dealCards(deck, numPlayers);
    setHands(dealtHands);
  };

  return (
    <div>
      <h2>Card Dealing Game</h2>
      <label>
        Number of Players:
        <input
          type="number"
          value={numPlayers}
          onChange={(e) => setNumPlayers(Number(e.target.value))}
          min="1"
        />
      </label>
      <button onClick={handleDeal}>Deal Cards</button>
      <div style={{ display: "block", marginTop: "20px" }}>
        {hands.map((hand, index) => (
          <div key={index}>
            <h4>Player {index + 1}</h4>
            <div>{hand.join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGame;
