import ReactDOM from "react-dom/client";
import { GuestList } from "./state/GuestList";
import { UserSearch } from "./state/UserSearch";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <GuestList></GuestList>
      <UserSearch></UserSearch>
    </div>
  );
};

root.render(<App />);
