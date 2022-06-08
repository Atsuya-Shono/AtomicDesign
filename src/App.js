import "./styles.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";

const user = {
  name: "しょうの",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "atsuya.shono@gmail.com",
  phone: "090-6655-9841",
  company: {
    name: "shono株式会社"
  },
  website: "http://.com"
};

export default function App() {
  return (
    <div className="App">
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}