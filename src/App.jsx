import "./App.css";
import Card from "./Card";
import { useState } from "react";

function App() {
  const numbers = [
    "A",
    "J",
    "K",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "joker",
  ];
  const shapes = ["h", "s", "d", "c"];
  const [deck, setdeck] = useState([]);
  const [card, setCard] = useState();

  const getRandom = (item) => {
    return item[Math.floor(Math.random() * item.length)];
  };

  const genCard = () => {
    getRandom(cards);
    getRandom(shape);
  };

  const checkDeck = () => {};

  const hit = () => {
    genCard();

    //gen card
    //save card
    //check if gen card is in saved list, if not gen card again

    // if card is same gen again

    //update card component

    //move corresponding card
  };

  return (
    <>
      <div onClick={hit}>Hit</div>
      <Card />
    </>
  );
}

export default App;
