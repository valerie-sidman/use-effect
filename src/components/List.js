import React, { useState, useEffect } from 'react';
import Details from './Details';

export default function List() {
  const [phonebook, setItems] = useState({
    items: [],
  });

  const [details, setDetails] = useState({});
  useEffect(() => {
    async function getItems() {
      try {
        const response = await fetch(process.env.REACT_APP_USERS_LIST);
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
    setDetails(() => (info));
  }

  return (
    <div>
      <ul>
        {
          phonebook.items.map(o => <li key={o.id} onClick={() => handleClick(o)}>{o.name}</li>)
        }
      </ul>
      {details.id ? <Details info={details}/> : null}
    </div>


  )
}
