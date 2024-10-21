import "./App.css";
import Card from "./Card";
import { useState } from "react";
import Slots from "./Slots";

function App() {
  const deck = [];
  let drawn = [];

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
    const shapes = ["h", "s", "d", "c"];
    for (let shape of shapes) {
      for (let num of numbers) {
        deck.push({ number: num, suit: shape });
      }
    }
  };
  createDeck();

  const [card, setCard] = useState();
  const [heart, setHeart] = useState(0);
  const [spade, setSpade] = useState(0);
  const [diamond, setDiamond] = useState(0);
  const [clubs, setClubs] = useState(0);

  //randomizer function
  const getRandom = (item) => {
    return item[Math.floor(Math.random() * item.length)];
  };

  //draw until new object appears
  const recurssiveCheck = () => {
    let picked = getRandom(deck);
    if (!drawn.includes(picked)) {
      console.log(`when not true`, picked);
      //drawn.push({ number: picked.number, suit: picked.suit });
      drawn = [...drawn, picked];
      console.log(typeof drawn, drawn);
      picked.suit === "h"
        ? setHeart((prev) => prev + 1)
        : picked.suit === "c"
        ? setClubs((prev) => prev + 1)
        : picked.suit === "d"
        ? setDiamond((prev) => prev + 1)
        : setSpade((prev) => prev + 1);
      return picked;
    }
    console.log(`when true`, picked);
    recurssiveCheck();
  };

  //logic
  const hit = () => {
    if (heart === 12 || spade === 12 || diamond === 12 || clubs === 12) {
      console.log(
        `h`,
        drawn.filter((item) => item.suit != "h")
      );
      console.log(drawn);
      console.log("won");
    } else {
      recurssiveCheck();
    }
  };

  return (
    <>
      <div className="slots-container">
        <Card data={drawn} />
      </div>
      <div onClick={hit}>Hit</div>
      {deck.map((item) => {})}
      <Card data={card} />
    </>
  );
}

export default App;
