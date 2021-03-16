import React, { useState, useEffect } from 'react';
import Details from './Details';

export default function List() {
  const [phonebook, setItems] = useState({
    items: [],
    Details: null,
  });
  useEffect(() => {
    async function getItems() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
        if (!response.ok) {
          throw new Error(response.message);
        }

        const responseItems = await response.json();
        setItems({ items: responseItems });
      } catch (e) {
        console.error(e);
      }
    }
    getItems();
  }, []);

  function handleClick(info) {
    setItems((prevItems) => ({ ...prevItems, Details: <Details info={info} /> }));
  }

  return (
    <div>
      <ul>
        {
          phonebook.items.map(o => <li key={o.id} onClick={() => handleClick(o)}>{o.name}</li>)
        }
      </ul>
      {phonebook.Details}
    </div>


  )
}
