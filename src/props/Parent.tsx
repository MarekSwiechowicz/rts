import { Child } from "./Child";

const Parent = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return <Child color="red" onClick={handleClick} />;
};

export default Parent;
