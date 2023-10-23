import React from "react";
import { useState } from "react";

export const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClickHandler = () => {
    setName("");
    setGuests([...guests, name]);
  };
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={onClickHandler}>Add Guest</button>
      <ul>
        {guests.map((guest, key) => (
          <li key={key}>{guest}</li>
        ))}
      </ul>
      <h3>GuestList</h3>
    </div>
  );
};
