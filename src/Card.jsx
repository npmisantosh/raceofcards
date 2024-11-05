import React, { useEffect } from "react";

function Card(props) {
  //init to var
  const suits = props.shape;
  const arrayCheck = props.cards.filter((item) => item.suit == suits);
  //figure out which card is being send so i can set symbol accordingly

  return (
    <>
      <div className="cards_container">
        <div className="card">
          <div id="number">A</div>
          <div id="shape">{props.length}</div>
        </div>
        {arrayCheck.map((item) => {
          return (
            <div key={item.number} className="card">
              <div id="number">{item.number}</div>
              <div id="shape">{item.suit}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;
