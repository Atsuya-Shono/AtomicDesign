import "./styles.css";
// import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
// import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
// import { SearchInput } from "./components/molecules/SearchInput";
// import { UserCard } from "./components/organisms/user/UserCard";
// import { HeaderOnly } from "./components/templates/HeaderOnly";
// import { BrowserRouter } from "react-router-dom";
// import { DefaultLayout } from "./components/templates/DefaltLayout";
import { Router } from "./router/Router";

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
    <Router />
    // <BrowserRouter>
    //   <DefaultLayout>
    //     <br />
    //     <SearchInput />
    //     <UserCard user={user} />
    //   </DefaultLayout>
    // </BrowserRouter>
  );
}
