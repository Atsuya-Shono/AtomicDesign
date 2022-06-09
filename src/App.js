import "./styles.css";
// import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
// import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
// import { SearchInput } from "./components/molecules/SearchInput";
// import { UserCard } from "./components/organisms/user/UserCard";
// import { HeaderOnly } from "./components/templates/HeaderOnly";
// import { BrowserRouter } from "react-router-dom";
// import { DefaultLayout } from "./components/templates/DefaltLayout";
import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
    // <BrowserRouter>
    //   <DefaultLayout>
    //     <br />
    //     <SearchInput />
    //     <UserCard user={user} />
    //   </DefaultLayout>
    // </BrowserRouter>
  );
}
