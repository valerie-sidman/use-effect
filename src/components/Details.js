import React, { useState, useEffect } from 'react';

export default function Details({ info }) {
  const [card, setCard] = useState({details: {}});
  useEffect(() => {
    async function getCard() {
      try {
        const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
        if (!response.ok) {
          throw new Error(response.message);
        }

        const responseCard = await response.json();
        setCard(responseCard);
      } catch (e) {
        console.error(e);
      }
    }
    getCard();
  });

  return (
    <div>
      {card ? <img src={card.avatar} alt=""/> : null}
      {card ? <div>Name: {card.name}</div> : null}
      {card.details ? <div>City: {card.details.city}</div> : null}
      {card.details ? <div>Company: {card.details.company}</div> : null}
      {card.details ? <div>Position: {card.details.position}</div> : null}
    </div>

  )
}
