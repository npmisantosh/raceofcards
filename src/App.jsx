import "./App.css";
import Card from "./Card";
import { useState } from "react";

function App() {
  const deck = [];
  const shapes = ["h", "s", "d", "c"];
  const createDeck = () => {
    const numbers = [
      "joker",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
    ];

    for (let shape of shapes) {
      for (let num of numbers) {
        deck.push({ number: num, suit: shape });
      }
    }
  };
  createDeck();

  const [check, setCheck] = useState(false);
  const [heart, setHeart] = useState(0);
  const [spade, setSpade] = useState(0);
  const [diamond, setDiamond] = useState(0);
  const [clubs, setClubs] = useState(0);
  const [drawn, setdrawn] = useState([]);

  //randomizer function
  const getRandom = (item) => {
    return item[Math.floor(Math.random() * item.length)];
  };
  //adds score to check for win
  const winCondition = (suit) => {
    suit === "h"
      ? setHeart((prev) => prev + 1)
      : suit === "c"
      ? setClubs((prev) => prev + 1)
      : suit === "d"
      ? setDiamond((prev) => prev + 1)
      : setSpade((prev) => prev + 1);
  };

  //draw until new object appears
  const recurssiveCheck = () => {
    let picked = getRandom(deck);
    //console.log("yo chai randomly leko", picked);
    if (
      drawn.some(
        (card) => card.suit === picked.suit && card.number === picked.number
      )
    ) {
      console.log(`when true`, picked);
      recurssiveCheck();
    } else {
      winCondition(picked.suit);

      setdrawn((drawn) => {
        return [...drawn, picked];
      });
    }
  };

  //logic
  const hit = () => {
    if (heart === 12 || spade === 12 || diamond === 12 || clubs === 12) {
      console.log(
        `h`,
        drawn.filter((item) => item.suit == "h")
      );
      console.log("won");
    } else {
      recurssiveCheck();
    }

    console.log(
      "h drawn : ",
      drawn.filter((item) => item.suit == "h")
    );
    console.log(
      "d drawn : ",
      drawn.filter((item) => item.suit == "d")
    );
    console.log(
      "s drawn : ",
      drawn.filter((item) => item.suit == "s")
    );
    console.log(
      "c drawn : ",
      drawn.filter((item) => item.suit == "c")
    );
  };

  return (
    <>
      <div className="" onClick={hit}>
        Hit
      </div>
      <div className="slots-container">
        {shapes.map((shape) => {
          return <Card key={shape} data={shape} cards={drawn} />;
        })}
      </div>
    </>
  );
}

export default App;
