import React, { useState } from "react";

const users = [
  {
    name: "wojtek",
    age: 18,
  },
];

export const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClickHandler = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  return (
    <div>
      <div>User Search</div>
      <input name={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={onClickHandler}>Find User</button>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
};
