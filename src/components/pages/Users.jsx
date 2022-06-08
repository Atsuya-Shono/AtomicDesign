import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `しょうの` + val,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "atsuya.shono@gmail.com",
    phone: "090-6655-9841",
    company: {
      name: "shono株式会社"
    },
    website: "http://.com"
  };
});

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

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
